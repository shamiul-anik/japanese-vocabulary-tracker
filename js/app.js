// Clean, balanced implementation of app.js
// Constants
const STORAGE_KEY_PREFIX = 'vocabLearned_';
const SETTINGS_KEY = 'vocabSettings';

// State
let currentPage = 1;
let itemsPerPage = 10;
let currentLevel = 'all';
let hideLearned = false;
let learnedWords = {}; // { 'all': Set, '1': Set, ... }
let searchTerm = '';
let currentFontSize = 16;

// Elements (queried lazily in init)
let levelSelect, perPageSelect, hideLearnedCheckbox, tableBody, prevButton, nextButton,
    clearLearnedBtn, totalPagesSpan, decreaseFontBtn, increaseFontBtn, currentFontSizeSpan,
    currentPageInput, totalCountElement, levelCountElement, learnedCountElement, resultsCountElement,
    columnToggles;

function loadElements() {
    levelSelect = document.getElementById('level');
    perPageSelect = document.getElementById('perPage');
    hideLearnedCheckbox = document.getElementById('hideLearnedCheckbox');
    tableBody = document.querySelector('#vocabTable tbody');
    prevButton = document.getElementById('prevPage');
    nextButton = document.getElementById('nextPage');
    clearLearnedBtn = document.getElementById('clearLearnedBtn');
    totalPagesSpan = document.getElementById('totalPages');
    decreaseFontBtn = document.getElementById('decreaseFontBtn');
    increaseFontBtn = document.getElementById('increaseFontBtn');
    currentFontSizeSpan = document.getElementById('currentFontSize');
    currentPageInput = document.getElementById('currentPageInput');
    totalCountElement = document.getElementById('totalCount');
    levelCountElement = document.getElementById('levelCount');
    learnedCountElement = document.getElementById('learnedCount');
    resultsCountElement = document.getElementById('resultsCount');
    columnToggles = Array.from(document.querySelectorAll('input[data-column]'));
}

function initializeLearnedWords() {
    const levels = ['all','1','2','3','4','5'];
    levels.forEach(l => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY_PREFIX + l);
            learnedWords[l] = raw ? new Set(JSON.parse(raw)) : new Set();
        } catch (e) {
            learnedWords[l] = new Set();
        }
    });
    // ensure 'all' is union of others
    const all = new Set(learnedWords['all'] || []);
    ['1','2','3','4','5'].forEach(l => (learnedWords[l] || new Set()).forEach(w => all.add(w)));
    learnedWords['all'] = all;
    localStorage.setItem(STORAGE_KEY_PREFIX + 'all', JSON.stringify([...all]));
}

function saveSettings() {
    const settings = { currentPage, itemsPerPage, currentLevel, hideLearned };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function loadSettings() {
    try {
        const raw = localStorage.getItem(SETTINGS_KEY);
        if (!raw) return;
        const s = JSON.parse(raw);
        itemsPerPage = parseInt(s.itemsPerPage) || itemsPerPage;
        currentLevel = s.currentLevel || currentLevel;
        hideLearned = !!s.hideLearned;
        currentPage = parseInt(s.currentPage) || currentPage;

        if (perPageSelect) perPageSelect.value = itemsPerPage;
        if (levelSelect) levelSelect.value = currentLevel;
        if (hideLearnedCheckbox) hideLearnedCheckbox.checked = hideLearned;
        if (currentPageInput) currentPageInput.value = currentPage;
    } catch (e) {
        console.warn('Could not load settings', e);
    }
}

function escapeHtml(s){ return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]); }

function highlight(text){
    const raw = text == null ? '' : String(text);
    if (!searchTerm) return escapeHtml(raw);
    const q = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(q, 'ig');
    let last = 0, out = '';
    let m;
    while ((m = re.exec(raw)) !== null) {
        out += escapeHtml(raw.slice(last, m.index));
        out += '<mark>' + escapeHtml(raw.slice(m.index, re.lastIndex)) + '</mark>';
        last = re.lastIndex;
        if (re.lastIndex === m.index) re.lastIndex++;
    }
    out += escapeHtml(raw.slice(last));
    return out;
}

function filterVocabularyByLevel(){
    if (!Array.isArray(vocabularyData)) return [];
    let filtered = currentLevel === 'all' ? [...vocabularyData] : vocabularyData.filter(i => i.level === parseInt(currentLevel));
    if (hideLearned) {
        const allSet = learnedWords['all'] || new Set();
        filtered = filtered.filter(item => {
            const lvlSet = learnedWords[item.level ? item.level.toString() : currentLevel] || new Set();
            return !(allSet.has(item.word) || lvlSet.has(item.word));
        });
    }
    if (searchTerm) {
        const q = searchTerm.toLowerCase();
        filtered = filtered.filter(item => (
            (item.word||'').toString().toLowerCase().includes(q) ||
            (item.furigana||'').toString().toLowerCase().includes(q) ||
            (item.romaji||'').toString().toLowerCase().includes(q) ||
            (item.meaning||'').toString().toLowerCase().includes(q)
        ));
    }
    if (resultsCountElement) resultsCountElement.textContent = `Showing ${filtered.length} result${filtered.length!==1?'s':''}`;
    return filtered;
}

function renderTable(){
    const filtered = filterVocabularyByLevel();
    if (!filtered.length) {
        if (tableBody) tableBody.innerHTML = '<tr><td colspan="6" class="p-4 text-center">No vocabulary items found</td></tr>';
        currentPage = 1;
        if (totalPagesSpan) totalPagesSpan.textContent = 'of 1';
        if (prevButton) prevButton.disabled = true;
        if (nextButton) nextButton.disabled = true;
        if (currentPageInput) currentPageInput.value = 1;
        return;
    }

    const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const start = (currentPage-1)*itemsPerPage;
    const pageData = filtered.slice(start, start + itemsPerPage);

    if (prevButton) prevButton.disabled = currentPage===1;
    if (nextButton) nextButton.disabled = currentPage===totalPages;
    if (currentPageInput) currentPageInput.value = currentPage;
    if (totalPagesSpan) totalPagesSpan.textContent = `of ${totalPages}`;

    if (!tableBody) return;
    tableBody.innerHTML = '';
    pageData.forEach((item, idx) => {
        const tr = document.createElement('tr');
        const serial = start + idx + 1;

        const tdNo = document.createElement('td'); tdNo.className = 'p-2 text-center'; tdNo.textContent = serial;
        const tdWord = document.createElement('td'); tdWord.className = 'p-2 col-word text-center'; tdWord.innerHTML = highlight(item.word);
        const tdF = document.createElement('td'); tdF.className = 'p-2 col-furigana text-center'; tdF.innerHTML = highlight(item.furigana || '');
        const tdR = document.createElement('td'); tdR.className = 'p-2 col-romaji text-center'; tdR.innerHTML = highlight(item.romaji || '');
        const tdM = document.createElement('td'); tdM.className = 'p-2 col-meaning text-left'; tdM.innerHTML = highlight(item.meaning || '');

    const tdActions = document.createElement('td'); tdActions.className = 'p-2 text-center';
    // determine learned state for this item (check both current level and 'all')
    const isLearnedInCurrent = learnedWords[currentLevel] && learnedWords[currentLevel].has(item.word);
    const isLearnedInAll = learnedWords['all'] && learnedWords['all'].has(item.word);
    const isLearned = !!(isLearnedInCurrent || isLearnedInAll);
    const btnLearn = document.createElement('button');
    btnLearn.textContent = '✔';
    // When learned: check is green, X is gray. When not learned: check is gray, X is red.
    btnLearn.className = 'mx-1 btn ' + (isLearned ? 'text-green-600' : 'text-gray-400');
    btnLearn.setAttribute('aria-pressed', isLearned ? 'true' : 'false');
    btnLearn.title = isLearned ? 'Mark as not learned' : 'Mark as learned';

    const btnUn = document.createElement('button');
    btnUn.textContent = '✖';
    btnUn.className = 'mx-1 btn ' + (isLearned ? 'text-gray-400' : 'text-red-600');
    btnUn.title = isLearned ? 'Mark as not learned' : 'Mark as learned';

    // dataset and aria labels
    btnLearn.dataset.word = item.word; btnUn.dataset.word = item.word;
    btnLearn.setAttribute('aria-label', btnLearn.title);
    btnUn.setAttribute('aria-label', btnUn.title);

    btnLearn.addEventListener('click', () => toggleLearned(item.word, true));
    btnUn.addEventListener('click', () => toggleLearned(item.word, false));
    tdActions.appendChild(btnLearn); tdActions.appendChild(btnUn);

        tr.appendChild(tdNo); tr.appendChild(tdWord); tr.appendChild(tdF); tr.appendChild(tdR); tr.appendChild(tdM); tr.appendChild(tdActions);
        tableBody.appendChild(tr);
    });

    // apply column visibility
    columnToggles.forEach(t => {
        const col = t.dataset.column;
        const visible = t.checked;
        document.querySelectorAll(`.col-${col}`).forEach(el => el.classList.toggle('hidden', !visible));
    });
}

function toggleLearned(word, shouldLearn){
    if (!word) return;
    const levels = ['all','1','2','3','4','5'];
    levels.forEach(l => { if (!learnedWords[l]) learnedWords[l] = new Set(); });

    const vocabItem = vocabularyData.find(i => i.word === word);
    const lvl = vocabItem ? String(vocabItem.level) : null;

    if (shouldLearn) {
        if (lvl) learnedWords[lvl].add(word);
        learnedWords['all'].add(word);
    } else {
        levels.forEach(l => learnedWords[l].delete(word));
    }

    levels.forEach(l => localStorage.setItem(STORAGE_KEY_PREFIX + l, JSON.stringify([...learnedWords[l]])));
    updateDisplayCounts();
    renderTable();
}

function clearLearnedWordsForLevel(){
    const level = currentLevel;
    const msg = level === 'all' ? 'Are you sure you want to clear all learned words?' : `Are you sure you want to clear all learned words for N${level}?`;
    if (!confirm(msg)) return;

    if (level === 'all') {
        Object.keys(learnedWords).forEach(k => learnedWords[k] && learnedWords[k].clear());
        Object.keys(learnedWords).forEach(k => localStorage.removeItem(STORAGE_KEY_PREFIX + k));
    } else {
        if (learnedWords[level]) learnedWords[level].clear();
        const newAll = new Set();
        ['1','2','3','4','5'].forEach(l => (learnedWords[l] || new Set()).forEach(w => newAll.add(w)));
        learnedWords['all'] = newAll;
        localStorage.setItem(STORAGE_KEY_PREFIX + 'all', JSON.stringify([...newAll]));
        localStorage.removeItem(STORAGE_KEY_PREFIX + level);
    }
    saveSettings();
    updateDisplayCounts();
    renderTable();
}

function updateDisplayCounts(){
    if (!Array.isArray(vocabularyData)) return;
    const total = vocabularyData.length;
    const levelData = currentLevel === 'all' ? vocabularyData : vocabularyData.filter(i => i.level === parseInt(currentLevel));
    const learnedInLevel = levelData.filter(i => (learnedWords[currentLevel] && learnedWords[currentLevel].has(i.word)) || (learnedWords['all'] && learnedWords['all'].has(i.word))).length;
    const percent = levelData.length ? ((learnedInLevel/levelData.length)*100).toFixed(1) : '0.0';
    if (totalCountElement) totalCountElement.textContent = total;
    if (levelCountElement) levelCountElement.textContent = levelData.length;
    if (learnedCountElement) learnedCountElement.textContent = `${learnedInLevel} (${percent}%)`;
}

function changePage(delta){
    const filtered = filterVocabularyByLevel();
    const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
    const np = currentPage + delta;
    if (np >= 1 && np <= totalPages) {
        currentPage = np;
        if (currentPageInput) currentPageInput.value = currentPage;
        renderTable();
        saveSettings();
    }
}

function updateFontSize(size){
    currentFontSize = Math.max(12, Math.min(24, size));
    document.body.style.fontSize = `${currentFontSize}px`;
    if (currentFontSizeSpan) currentFontSizeSpan.textContent = `${currentFontSize}px`;
    localStorage.setItem('fontsize', currentFontSize);
}

function setupEventListeners(){
    if (levelSelect) levelSelect.addEventListener('change', (e)=>{ currentLevel = e.target.value; currentPage=1; updateDisplayCounts(); renderTable(); saveSettings(); });
    if (perPageSelect) perPageSelect.addEventListener('change', (e)=>{ itemsPerPage = parseInt(e.target.value); currentPage=1; renderTable(); saveSettings(); });
    if (hideLearnedCheckbox) hideLearnedCheckbox.addEventListener('change', (e)=>{ hideLearned = e.target.checked; currentPage=1; updateDisplayCounts(); renderTable(); saveSettings(); });
    if (clearLearnedBtn) clearLearnedBtn.addEventListener('click', clearLearnedWordsForLevel);

    const searchBox = document.getElementById('searchBox');
    const searchBtn = document.getElementById('searchBtn');
    const searchClearBtn = document.getElementById('searchClearBtn');
    const searchSpinner = document.getElementById('searchSpinner');

    function showSpinner(show){ if (!searchSpinner) return; if (show) { searchSpinner.classList.remove('hidden'); searchSpinner.setAttribute('aria-hidden','false'); } else { searchSpinner.classList.add('hidden'); searchSpinner.setAttribute('aria-hidden','true'); } }

            if (searchBox) {
        searchBox.addEventListener('input', (e)=>{
            searchTerm = (e.target.value||'').trim();
                    if (searchClearBtn) { if (searchTerm) { searchClearBtn.classList.remove('hidden'); searchClearBtn.setAttribute('aria-hidden','false'); } else { searchClearBtn.classList.add('hidden'); searchClearBtn.setAttribute('aria-hidden','true'); } }
            currentPage = 1; showSpinner(true); updateDisplayCounts(); renderTable(); saveSettings(); setTimeout(()=>showSpinner(false),150);
        });
        if (searchBtn) searchBtn.addEventListener('click', ()=> searchBox.focus());
    }
    if (searchClearBtn && searchBox) {
                searchClearBtn.setAttribute('aria-label','Clear search');
                searchClearBtn.setAttribute('aria-hidden','true');
                searchClearBtn.addEventListener('click', ()=>{ searchBox.value=''; searchTerm=''; searchClearBtn.classList.add('hidden'); searchClearBtn.setAttribute('aria-hidden','true'); currentPage=1; showSpinner(true); updateDisplayCounts(); renderTable(); saveSettings(); setTimeout(()=>showSpinner(false),100); searchBox.focus(); });
    }

    if (prevButton) prevButton.addEventListener('click', ()=> changePage(-1));
    if (nextButton) nextButton.addEventListener('click', ()=> changePage(1));
    columnToggles.forEach(t => t.addEventListener('change', ()=>{ const col=t.dataset.column; document.querySelectorAll(`.col-${col}`).forEach(el=>el.classList.toggle('hidden', !t.checked)); }));
    if (currentPageInput) currentPageInput.addEventListener('change', (e)=>{ const v = parseInt(e.target.value)||1; const total = Math.ceil(filterVocabularyByLevel().length/itemsPerPage)||1; if (v>=1 && v<=total){ currentPage=v; renderTable(); saveSettings(); } else { if (currentPageInput) currentPageInput.value = currentPage; } });

    window.addEventListener('beforeunload', saveSettings);

    // Keyboard shortcut: '/' focuses search unless typing in input
    document.addEventListener('keydown', (e)=>{
        if (e.key === '/'){
            const active = document.activeElement; if (active && (active.tagName==='INPUT' || active.tagName==='TEXTAREA')) return;
            if (searchBox){ e.preventDefault(); searchBox.focus(); searchBox.selectionStart = searchBox.selectionEnd = searchBox.value.length; }
        }
    });
}

function init(){
    loadElements();
    initializeLearnedWords();
    loadSettings();
    setupEventListeners();
    updateDisplayCounts();
    renderTable();
}

document.addEventListener('DOMContentLoaded', function() {
    const savedFont = localStorage.getItem('fontsize'); if (savedFont) updateFontSize(parseInt(savedFont));
    loadElements();
    if (decreaseFontBtn) decreaseFontBtn.addEventListener('click', ()=> updateFontSize(currentFontSize-2));
    if (increaseFontBtn) increaseFontBtn.addEventListener('click', ()=> updateFontSize(currentFontSize+2));
    init();

    // show clear if search has value
    const sb = document.getElementById('searchBox'); const cb = document.getElementById('searchClearBtn'); if (sb && cb && sb.value) cb.classList.remove('hidden');
});