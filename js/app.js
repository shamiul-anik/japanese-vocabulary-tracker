// Constants
const STORAGE_KEY_PREFIX = 'vocabLearned_';
const SETTINGS_KEY = 'vocabSettings';

// State management
let currentPage = 1;
let itemsPerPage = 10;
let currentLevel = 'all';
let hideLearned = false;
let learnedWords = {};  // Object to store learned words by level

// DOM Elements
const levelSelect = document.getElementById('level');
const perPageSelect = document.getElementById('perPage');
const hideLearnedCheckbox = document.getElementById('hideLearnedCheckbox');
const tableBody = document.querySelector('#vocabTable tbody');
const prevButton = document.getElementById('prevPage');
const nextButton = document.getElementById('nextPage');
const clearLearnedBtn = document.getElementById('clearLearnedBtn');
const totalPagesSpan = document.getElementById('totalPages');
const currentPageInput = document.getElementById('currentPageInput');
const totalCountElement = document.getElementById('totalCount');
const levelCountElement = document.getElementById('levelCount');
const learnedCountElement = document.getElementById('learnedCount');
const columnToggles = document.querySelectorAll('input[data-column]');

// Initialize learned words storage
function initializeLearnedWords() {
    // Initialize for all levels
    const levels = ['all', '1', '2', '3', '4', '5'];
    levels.forEach(level => {
        const key = STORAGE_KEY_PREFIX + level;
        const savedLearned = localStorage.getItem(key);
        if (savedLearned) {
            learnedWords[level] = new Set(JSON.parse(savedLearned));
        } else {
            learnedWords[level] = new Set();
        }
    });
}

// Initialize the application
function init() {
    // Initialize learned words storage
    initializeLearnedWords();
    
    // Load saved settings
    loadSettings();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initial render
    updateDisplayCounts();
    renderTable();
}

// Save settings to localStorage
function saveSettings() {
    const settings = {
        currentPage,
        itemsPerPage: parseInt(perPageSelect.value),
        currentLevel,
        hideLearned,
    };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

// Load settings from localStorage
function loadSettings() {
    const savedSettings = localStorage.getItem(SETTINGS_KEY);
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        currentPage = settings.currentPage;
        itemsPerPage = settings.itemsPerPage;
        currentLevel = settings.currentLevel;
        hideLearned = settings.hideLearned;

        // Update UI to match settings
        perPageSelect.value = itemsPerPage;
        levelSelect.value = currentLevel;
        hideLearnedCheckbox.checked = hideLearned;
    }
}

// Clear learned words for current level
function clearLearnedWordsForLevel() {
    const level = currentLevel;
    const confirmMessage = level === 'all' 
        ? 'Are you sure you want to clear all learned words?'
        : `Are you sure you want to clear all learned words for N${level}?`;

    if (confirm(confirmMessage)) {
        if (level === 'all') {
            // Clear all levels
            Object.keys(learnedWords).forEach(key => {
                learnedWords[key] = new Set();
                localStorage.setItem(STORAGE_KEY_PREFIX + key, JSON.stringify(Array.from(learnedWords[key])));
            });
        } else {
            // Clear specific level
            learnedWords[level] = new Set();
            localStorage.setItem(STORAGE_KEY_PREFIX + level, JSON.stringify(Array.from(learnedWords[level])));
        }
        
        // Update display
        updateDisplayCounts();
        renderTable();
    }
}

// Set up event listeners
function setupEventListeners() {
    levelSelect.addEventListener('change', handleLevelChange);
    clearLearnedBtn.addEventListener('click', clearLearnedWordsForLevel);
    perPageSelect.addEventListener('change', handlePerPageChange);
    hideLearnedCheckbox.addEventListener('change', handleHideLearnedChange);
    prevButton.addEventListener('click', () => changePage(-1));
    nextButton.addEventListener('click', () => changePage(1));
    columnToggles.forEach(toggle => {
        toggle.addEventListener('change', handleColumnToggle);
    });

    // Handle manual page input
    currentPageInput.addEventListener('change', handlePageInputChange);

    // Save settings when leaving the page
    window.addEventListener('beforeunload', saveSettings);
}

// Handle level change
function handleLevelChange(event) {
    currentLevel = event.target.value;
    currentPage = 1;
    updateDisplayCounts();
    renderTable();
    saveSettings();
}

// Handle hide learned change
function handleHideLearnedChange(event) {
    hideLearned = event.target.checked;
    currentPage = 1;
    updateDisplayCounts();
    renderTable();
    saveSettings();
}

// Handle items per page change
function handlePerPageChange(event) {
    itemsPerPage = parseInt(event.target.value);
    currentPage = 1;
    renderTable();
    saveSettings();
}

// Handle manual page input
function handlePageInputChange(event) {
    const value = parseInt(event.target.value);
    const filteredData = filterVocabularyByLevel();
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    
    if (value && value > 0 && value <= totalPages) {
        currentPage = value;
        renderTable();
    } else {
        event.target.value = currentPage;
    }
}

// Handle column visibility toggle
function handleColumnToggle(event) {
    const column = event.target.dataset.column;
    const isVisible = event.target.checked;
    const cells = document.querySelectorAll(`.col-${column}`);
    cells.forEach(cell => {
        cell.classList.toggle('hidden', !isVisible);
    });
}

// Update all display counts
function updateDisplayCounts() {
    const filteredData = filterVocabularyByLevel();
    const totalVocab = vocabularyData.length;
    const levelVocab = filteredData.length;
    
    // Count learned words for current level
    const currentLevelSet = learnedWords[currentLevel];
    const learnedInLevel = filteredData.filter(item => 
        currentLevelSet.has(item.word) || learnedWords['all'].has(item.word)
    ).length;
    
    const percentage = levelVocab > 0 ? (learnedInLevel / levelVocab * 100).toFixed(1) : '0.0';

    totalCountElement.textContent = totalVocab;
    levelCountElement.textContent = levelVocab;
    learnedCountElement.textContent = `${learnedInLevel} (${percentage}%)`;
}

// Filter vocabulary by selected level and learned status
function filterVocabularyByLevel() {
    let filtered = currentLevel === 'all' 
        ? vocabularyData 
        : vocabularyData.filter(item => item.level === parseInt(currentLevel));
    
    // Filter out learned words if hideLearned is true
    if (hideLearned) {
        filtered = filtered.filter(item => 
            !learnedWords[currentLevel].has(item.word) && 
            !learnedWords['all'].has(item.word)
        );
    }
    
    return filtered;
}

// Render the vocabulary table
function renderTable() {
    const filteredData = filterVocabularyByLevel();
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    
    // Ensure current page is valid
    if (currentPage > totalPages) {
        currentPage = totalPages || 1;
    }
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = filteredData.slice(startIndex, endIndex);

    // Update pagination controls
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    currentPageInput.value = currentPage;
    totalPagesSpan.textContent = `of ${totalPages || 1}`;

    // Clear existing table content
    tableBody.innerHTML = '';

    // Render table rows
    pageData.forEach((item, index) => {
        const row = document.createElement('tr');
        const serialNo = startIndex + index + 1;
        const isLearned = learnedWords[currentLevel].has(item.word) || 
                         learnedWords['all'].has(item.word);

        row.innerHTML = `
            <td>${serialNo}</td>
            <td class="col-word">${item.word}</td>
            <td class="col-furigana">${item.furigana || ''}</td>
            <td class="col-romaji">${item.romaji}</td>
            <td class="col-meaning">${item.meaning}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-check" onclick="toggleLearned('${item.word}', true)" 
                            style="color: ${isLearned ? 'var(--success-color)' : 'var(--border-color)'}">
                        ✓
                    </button>
                    <button class="btn btn-x" onclick="toggleLearned('${item.word}', false)"
                            style="color: ${!isLearned ? 'var(--danger-color)' : 'var(--border-color)'}">
                        ✕
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Apply column visibility states
    columnToggles.forEach(toggle => {
        const column = toggle.dataset.column;
        const isVisible = toggle.checked;
        const cells = document.querySelectorAll(`.col-${column}`);
        cells.forEach(cell => {
            cell.classList.toggle('hidden', !isVisible);
        });
    });
}

// Toggle word learned status
function toggleLearned(word, isLearned) {
    // Get the current level set
    const levelSet = learnedWords[currentLevel];

    if (isLearned) {
        levelSet.add(word);
    } else {
        levelSet.delete(word);
        // Also remove from 'all' if it exists there
        learnedWords['all'].delete(word);
    }

    // Save to localStorage for current level
    localStorage.setItem(
        STORAGE_KEY_PREFIX + currentLevel, 
        JSON.stringify([...levelSet])
    );
    
    // If it's in 'all' level, save that too
    if (currentLevel === 'all') {
        localStorage.setItem(
            STORAGE_KEY_PREFIX + 'all', 
            JSON.stringify([...learnedWords['all']])
        );
    }
    
    // Update display
    updateDisplayCounts();
    renderTable();
}

// Change page
function changePage(delta) {
    const filteredData = filterVocabularyByLevel();
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const newPage = currentPage + delta;

    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        renderTable();
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    console.log('Vocabulary data available:', vocabularyData ? vocabularyData.length : 'No data');
    init();
});