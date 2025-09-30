// Constants
const STORAGE_KEY_PREFIX = "vocabLearned_";
const SETTINGS_KEY = "vocabSettings";

// State management
let currentPage = 1;
let itemsPerPage = 10;
let currentLevel = "all";
let hideLearned = false; // Default state is false (don't hide learned words)
let learnedWords = {}; // Object to store learned words by level
let searchTerm = ""; // current search term (empty = no filter)
const levelSelect = document.getElementById("level");
const perPageSelect = document.getElementById("perPage");
const hideLearnedCheckbox = document.getElementById("hideLearnedCheckbox");
const tableBody = document.querySelector("#vocabTable tbody");
const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");
const clearLearnedBtn = document.getElementById("clearLearnedBtn");
const totalPagesSpan = document.getElementById("totalPages");
const decreaseFontBtn = document.getElementById("decreaseFontBtn");
const increaseFontBtn = document.getElementById("increaseFontBtn");
const currentFontSizeSpan = document.getElementById("currentFontSize");
let currentFontSize = 16; // Default font size
const currentPageInput = document.getElementById("currentPageInput");
const totalCountElement = document.getElementById("totalCount");
const levelCountElement = document.getElementById("levelCount");
const learnedCountElement = document.getElementById("learnedCount");
const resultsCountElement = document.getElementById("resultsCount");
const columnToggles = document.querySelectorAll("input[data-column]");

// Initialize learned words storage
function initializeLearnedWords() {
  try {
    // Initialize for all levels
    const levels = ["all", "1", "2", "3", "4", "5"];
    levels.forEach((level) => {
      const key = STORAGE_KEY_PREFIX + level;
      try {
        const savedLearned = localStorage.getItem(key);
        if (savedLearned) {
          const parsed = JSON.parse(savedLearned);
          learnedWords[level] = new Set(Array.isArray(parsed) ? parsed : []);
        } else {
          learnedWords[level] = new Set();
        }
      } catch (error) {
        console.error(`Error loading learned words for level ${level}:`, error);
        learnedWords[level] = new Set();
      }
    });

    // Validate data consistency
    const allSet = learnedWords["all"];
    if (allSet) {
      // Ensure all words marked as learned in specific levels are in 'all'
      levels.forEach((level) => {
        if (level !== "all" && learnedWords[level]) {
          learnedWords[level].forEach((word) => allSet.add(word));
        }
      });
      // Save the validated 'all' set
      localStorage.setItem(
        STORAGE_KEY_PREFIX + "all",
        JSON.stringify([...allSet])
      );
    }
  } catch (error) {
    console.error("Error initializing learned words:", error);
    learnedWords = {
			'all': new Set(),
			'1': new Set(),
			'2': new Set(),
			'3': new Set(),
			'4': new Set(),
			'5': new Set()
		};
  }
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
  try {
    const savedSettings = localStorage.getItem(SETTINGS_KEY);
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);

      // Load basic settings first
      itemsPerPage = parseInt(settings.itemsPerPage) || 10;
      currentLevel = settings.currentLevel || "all";
      hideLearned = settings.hideLearned || false;
      currentPage = settings.currentPage || 1;

      // Update UI to match settings
      perPageSelect.value = itemsPerPage;
      levelSelect.value = currentLevel;
      hideLearnedCheckbox.checked = hideLearned;
      currentPageInput.value = currentPage.toString();
    }
  } catch (error) {
    console.error("Error loading settings:", error);
    // Reset to defaults if there's an error
    currentPage = 1;
    itemsPerPage = 10;
    currentLevel = "all";
    hideLearned = false;

    // Update UI with defaults
    perPageSelect.value = itemsPerPage;
    levelSelect.value = currentLevel;
    hideLearnedCheckbox.checked = false;
    currentPageInput.value = "1";
  }
}

// Clear learned words for current level
function clearLearnedWordsForLevel() {
  const level = currentLevel;
  const confirmMessage =
    level === "all"
      ? "Are you sure you want to clear all learned words?"
      : `Are you sure you want to clear all learned words for N${level}?`;

  if (confirm(confirmMessage)) {
    try {
      if (level === "all") {
        // Clear all levels and remove storage keys
        Object.keys(learnedWords).forEach((key) => {
          if (learnedWords[key]) {
            learnedWords[key].clear();
            localStorage.removeItem(STORAGE_KEY_PREFIX + key);
          }
        });
        // Ensure 'all' storage removed as well
        localStorage.removeItem(STORAGE_KEY_PREFIX + "all");
      } else {
        // Clear specific level
        if (learnedWords[level]) {
          // Remove words in this level from the 'all' set where appropriate
          const removedWords = [...learnedWords[level]];
          learnedWords[level].clear();
          localStorage.removeItem(STORAGE_KEY_PREFIX + level);

          // Rebuild 'all' by collecting words from remaining levels
          const newAll = new Set();
          Object.keys(learnedWords).forEach((k) => {
            if (k !== "all" && learnedWords[k]) {
              learnedWords[k].forEach((w) => newAll.add(w));
            }
          });
          learnedWords["all"] = newAll;
          // Persist updated 'all'
          localStorage.setItem(
            STORAGE_KEY_PREFIX + "all",
            JSON.stringify([...learnedWords["all"]])
          );
        }
      }

      // Reset to first page when clearing words
      currentPage = 1;

      // Persist remaining per-level sets to storage (ensure consistency)
      Object.keys(learnedWords).forEach((k) => {
        if (learnedWords[k]) {
          localStorage.setItem(
            STORAGE_KEY_PREFIX + k,
            JSON.stringify([...learnedWords[k]])
          );
        }
      });
      // Save UI settings (page, hideLearned, etc.)
      saveSettings();

      // Update display and table
      updateDisplayCounts();
      renderTable();
    } catch (error) {
      console.error("Error clearing learned words:", error);
      alert(
        "An error occurred while clearing learned words. Please try again."
      );
    }
  }
}

// Set up event listeners
function setupEventListeners() {
  levelSelect.addEventListener("change", handleLevelChange);
  clearLearnedBtn.addEventListener("click", clearLearnedWordsForLevel);
  perPageSelect.addEventListener("change", handlePerPageChange);
  hideLearnedCheckbox.addEventListener("change", handleHideLearnedChange);
  // Search input (instant)
  const searchBox = document.getElementById("searchBox");
  const searchBtn = document.getElementById("searchBtn");
  const searchClearBtn = document.getElementById("searchClearBtn");
  const searchSpinner = document.getElementById("searchSpinner");

  function showSpinner(show) {
    if (!searchSpinner) return;
    searchSpinner.style.display = show ? "inline-block" : "none";
  }

  function onSearchChangeImmediate(e) {
    searchTerm = (e.target.value || "").trim();
    // show or hide clear button
    if (searchClearBtn)
      searchClearBtn.style.display = searchTerm ? "inline" : "none";
    currentPage = 1;
    // show spinner briefly while updating
    showSpinner(true);
    // render synchronously; small set should be fast
    updateDisplayCounts();
    renderTable();
    saveSettings();
    // hide spinner after render
    setTimeout(() => showSpinner(false), 150);
  }

  if (searchBox) {
    searchBox.addEventListener("input", onSearchChangeImmediate);
    // allow pressing button to focus / trigger (keeps UI consistent)
    if (searchBtn) searchBtn.addEventListener("click", () => searchBox.focus());
  }
  if (searchClearBtn && searchBox) {
    searchClearBtn.addEventListener("click", () => {
      searchBox.value = "";
      searchTerm = "";
      searchClearBtn.style.display = "none";
      currentPage = 1;
      showSpinner(true);
      updateDisplayCounts();
      renderTable();
      saveSettings();
      setTimeout(() => showSpinner(false), 100);
      searchBox.focus();
    });
  }
  prevButton.addEventListener("click", () => changePage(-1));
  nextButton.addEventListener("click", () => changePage(1));
  columnToggles.forEach((toggle) => {
    toggle.addEventListener("change", handleColumnToggle);
  });

  // Handle manual page input
  currentPageInput.addEventListener("change", handlePageInputChange);

  // Handle mouse wheel on page input
  currentPageInput.addEventListener("wheel", (event) => {
    event.preventDefault();
    const currentValue = parseInt(currentPageInput.value);
    const totalPages = parseInt(totalPagesSpan.textContent.replace("of ", ""));
    let newValue;

    if (event.deltaY < 0) {
      newValue = currentValue + 1;
    } else {
      newValue = currentValue - 1;
    }

    if (newValue >= 1 && newValue <= totalPages) {
      currentPageInput.value = newValue;
      handlePageInputChange({ target: currentPageInput });
    }
  });

  // Save settings when leaving the page
  window.addEventListener("beforeunload", saveSettings);
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
  // Debug: log current hideLearned state and sizes of learned sets
  try {
    const allCount = learnedWords["all"] ? learnedWords["all"].size : 0;
    console.debug(
      "hideLearned toggled ->",
      hideLearned,
      "learned all count =",
      allCount
    );
  } catch (e) {
    console.debug("hideLearned toggled ->", hideLearned);
  }
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
    currentPageInput.value = currentPage.toString();
    renderTable();
    saveSettings();
  } else {
    currentPageInput.value = currentPage.toString();
  }
}

// Handle column visibility toggle
function handleColumnToggle(event) {
  const column = event.target.dataset.column;
  const isVisible = event.target.checked;
  const cells = document.querySelectorAll(`.col-${column}`);
  cells.forEach((cell) => {
    cell.classList.toggle("hidden", !isVisible);
  });
}

// Update all display counts
function updateDisplayCounts() {
  if (!vocabularyData || !Array.isArray(vocabularyData)) {
    console.error("Vocabulary data not available");
    return;
  }

  const totalVocab = vocabularyData.length;

  // Get vocabulary for current level
  const levelData =
    currentLevel === "all"
      ? vocabularyData
      : vocabularyData.filter((item) => item.level === parseInt(currentLevel));
  const levelVocab = levelData.length;

  // Count learned words for current level
  const currentLevelSet = learnedWords[currentLevel] || new Set();
  const allLevelSet = learnedWords["all"] || new Set();

  const learnedInLevel = levelData.filter(
    (item) => currentLevelSet.has(item.word) || allLevelSet.has(item.word)
  ).length;

  const percentage =
    levelVocab > 0 ? ((learnedInLevel / levelVocab) * 100).toFixed(1) : "0.0";

  // Update display elements
  totalCountElement.textContent = totalVocab;
  levelCountElement.textContent = levelVocab;
  learnedCountElement.textContent = `${learnedInLevel} (${percentage}%)`;
}

// Filter vocabulary by selected level and learned status
function filterVocabularyByLevel() {
  if (!vocabularyData || !Array.isArray(vocabularyData)) {
    console.error("Vocabulary data is not available or not an array");
    return [];
  }

  try {
    // First filter by level
    let filtered =
      currentLevel === "all"
        ? [...vocabularyData]
        : vocabularyData.filter(
            (item) => item.level === parseInt(currentLevel)
          );

    const totalForLevel = filtered.length;
    let hiddenCount = 0;

    // Filter out learned words if hideLearned is true
    if (hideLearned) {
      const beforeFilter = filtered.length;
      const allSet = learnedWords["all"] || new Set();
      filtered = filtered.filter((item) => {
        const isLearnedInAll = allSet.has(item.word);
        const levelSet =
          learnedWords[item.level ? item.level.toString() : currentLevel] ||
          new Set();
        const isLearnedInLevel = levelSet.has(item.word);
        return !(isLearnedInAll || isLearnedInLevel);
      });
      hiddenCount = beforeFilter - filtered.length;
    }

    // Apply searchTerm filter (case-insensitive) and rank results by match quality
    if (searchTerm && searchTerm.length > 0) {
      const q = searchTerm.toLowerCase();
      // Score items: exact match (3), prefix match (2), substring match (1)
      const scored = filtered
        .map((item, idx) => {
          const word = (item.word || "").toString().toLowerCase();
          const furigana = (item.furigana || "").toString().toLowerCase();
          const romaji = (item.romaji || "").toString().toLowerCase();
          const meaning = (item.meaning || "").toString().toLowerCase();
          const fields = [word, furigana, romaji, meaning];
          let score = 0;
          for (const f of fields) {
            if (!f) continue;
            if (f === q) {
              score = Math.max(score, 3);
              break;
            }
            if (f.startsWith(q)) score = Math.max(score, 2);
            else if (f.includes(q)) score = Math.max(score, 1);
          }
          return { item, score, idx };
        })
        .filter((s) => s.score > 0);

      // stable sort by score desc, then original index asc
      scored.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.idx - b.idx;
      });

      filtered = scored.map((s) => s.item);
    }

    // update results count display (before pagination)
    try {
      if (resultsCountElement) {
        let resultText = `Showing ${filtered.length} word${
          filtered.length !== 1 ? "s" : ""
        }`;
        if (hideLearned && hiddenCount > 0) {
          resultText = `Showing ${filtered.length} words (${hiddenCount} words are hidden)`;
        }
        resultsCountElement.textContent = resultText;
      }
    } catch (e) {
      /* ignore */
    }

    return filtered;
  } catch (error) {
    console.error("Error filtering vocabulary:", error);
    return [];
  }
}

// Escape HTML to avoid injection when highlighting
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function (s) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[s];
  });
}

// Highlight occurrences of searchTerm in text (case-insensitive), returns HTML string
function highlight(text) {
  const raw = text == null ? "" : String(text);
  if (!searchTerm) return escapeHtml(raw);
  const q = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // escape regex
  const re = new RegExp(q, "ig");
  // Use escaped text but replace matches by locating in original string via regex on original
  let result = "";
  let lastIndex = 0;
  let match;
  while ((match = re.exec(raw)) !== null) {
    const start = match.index;
    const end = re.lastIndex;
    result += escapeHtml(raw.slice(lastIndex, start));
    result += `<mark>${escapeHtml(raw.slice(start, end))}</mark>`;
    lastIndex = end;
    // avoid infinite loops for zero-length matches
    if (re.lastIndex === match.index) re.lastIndex++;
  }
  result += escapeHtml(raw.slice(lastIndex));
  return result;
}

// Render the vocabulary table
function renderTable() {
  const filteredData = filterVocabularyByLevel();

  // Handle empty data case
  if (!filteredData.length) {
    tableBody.innerHTML =
      '<tr><td colspan="6" class="no-data">No vocabulary items found</td></tr>';
    currentPage = 1;
    totalPagesSpan.textContent = "of 1";
    prevButton.disabled = true;
    nextButton.disabled = true;
    currentPageInput.value = 1;
    return;
  }

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Ensure current page is valid
  if (currentPage > totalPages) {
    currentPage = totalPages;
  } else if (currentPage < 1) {
    currentPage = 1;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
  const pageData = filteredData.slice(startIndex, endIndex);

  // Update pagination controls
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
  currentPageInput.value = currentPage;
  totalPagesSpan.textContent = `of ${totalPages || 1}`;

  // Clear existing table content
  tableBody.innerHTML = "";

  // Render table rows
  pageData.forEach((item, index) => {
    const row = document.createElement("tr");
    const serialNo = startIndex + index + 1;

    // Check learned status from both current level and 'all'
    const isLearnedInCurrent =
      learnedWords[currentLevel] && learnedWords[currentLevel].has(item.word);
    const isLearnedInAll =
      learnedWords["all"] && learnedWords["all"].has(item.word);
    const isLearned = isLearnedInCurrent || isLearnedInAll;

    row.innerHTML = `
            <td>${serialNo}</td>
            <td class="col-word">${highlight(item.word)}</td>
            <td class="col-furigana">${highlight(item.furigana || "")}</td>
            <td class="col-romaji">${highlight(item.romaji || "")}</td>
            <td class="col-meaning">${highlight(item.meaning || "")}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-check" data-word="${escapeHtml(
                      item.word
                    )}" data-action="learn"
                            style="color: ${
                              isLearned
                                ? "var(--success-color)"
                                : "var(--border-color)"
                            }"
                            title="${
                              isLearned
                                ? "Mark as not learned"
                                : "Mark as learned"
                            }">
                        ✔
                    </button>
                    <button class="btn btn-x" data-word="${escapeHtml(
                      item.word
                    )}" data-action="unlearn"
                            style="color: ${
                              !isLearned
                                ? "var(--danger-color)"
                                : "var(--border-color)"
                            }"
                            title="${
                              !isLearned
                                ? "Mark as learned"
                                : "Mark as not learned"
                            }">
                        ✖
                    </button>
                </div>
            </td>
        `;

    // Add event listeners to the buttons
    row.querySelectorAll(".btn").forEach((button) => {
      button.addEventListener("click", function () {
        const word = this.dataset.word;
        const action = this.dataset.action;
        const shouldMarkLearned = action === "learn";
        toggleLearned(word, shouldMarkLearned);
      });
    });

    tableBody.appendChild(row);
  });

  // Apply column visibility states
  columnToggles.forEach((toggle) => {
    const column = toggle.dataset.column;
    const isVisible = toggle.checked;
    const cells = document.querySelectorAll(`.col-${column}`);
    cells.forEach((cell) => {
      cell.classList.toggle("hidden", !isVisible);
    });
  });
}

// Toggle word learned status
function toggleLearned(word, shouldMarkLearned) {
  if (!word || !learnedWords) {
    console.error("Invalid word or learnedWords not initialized");
    return;
  }

  try {
    // Get vocabulary item to determine its level
    const vocabItem = vocabularyData.find((item) => item.word === word);
    if (!vocabItem) {
      console.error("Vocabulary item not found:", word);
      return;
    }

    // Initialize Sets if they don't exist
    const levels = ["all", "1", "2", "3", "4", "5"];
    levels.forEach((level) => {
      if (!learnedWords[level]) learnedWords[level] = new Set();
    });

    const itemLevel = vocabItem.level.toString();

    if (shouldMarkLearned) {
      // Mark as learned
      learnedWords[itemLevel].add(word); // Add to word's specific level
      learnedWords["all"].add(word); // Always add to 'all' level
      if (currentLevel !== "all") {
        learnedWords[currentLevel].add(word); // Add to current level if not in 'all' view
      }
    } else {
      // Mark as not learned - remove from all sets
      levels.forEach((level) => {
        learnedWords[level].delete(word);
      });
    }

    // Save changes to localStorage
    levels.forEach((level) => {
      localStorage.setItem(
        STORAGE_KEY_PREFIX + level,
        JSON.stringify([...learnedWords[level]])
      );
    });

    // Update display
    updateDisplayCounts();
    renderTable();
  } catch (error) {
    console.error("Error toggling learned status:", error);
  }
}

// Change page
function changePage(delta) {
  const filteredData = filterVocabularyByLevel();
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const newPage = currentPage + delta;

  if (newPage >= 1 && newPage <= totalPages) {
    currentPage = newPage;
    currentPageInput.value = currentPage.toString();
    renderTable();
    saveSettings();
  }
}

// Font size control functions
function updateFontSize(size) {
  currentFontSize = Math.max(12, Math.min(24, size)); // Limit font size between 12px and 24px
  document.body.style.fontSize = `${currentFontSize}px`;
  currentFontSizeSpan.textContent = `${currentFontSize}px`;
  localStorage.setItem("fontsize", currentFontSize);
}

// Note: setupEventListeners is defined earlier (used by init()).
// The earlier implementation wires all controls including the hideLearned checkbox.

// Initialize the application when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Initialize font size from localStorage
  const savedFontSize = localStorage.getItem("fontsize");
  if (savedFontSize) {
    updateFontSize(parseInt(savedFontSize));
  }

  // Font size control events
  decreaseFontBtn.addEventListener("click", () =>
    updateFontSize(currentFontSize - 2)
  );
  increaseFontBtn.addEventListener("click", () =>
    updateFontSize(currentFontSize + 2)
  );
  console.log("DOM loaded, initializing app...");
  console.log(
    "Vocabulary data available:",
    vocabularyData ? vocabularyData.length : "No data"
  );
  init();

  // show clear button if search has value on load
  const sb = document.getElementById("searchBox");
  const clearBtn = document.getElementById("searchClearBtn");
  if (sb && clearBtn) clearBtn.style.display = sb.value ? "inline" : "none";

  // Keyboard shortcut: '/' to focus search (skip if typing in input)
  document.addEventListener("keydown", (e) => {
    if (e.key === "/") {
      const active = document.activeElement;
      if (
        active &&
        (active.tagName === "INPUT" || active.tagName === "TEXTAREA")
      )
        return;
      if (sb) {
        e.preventDefault();
        sb.focus();
        sb.selectionStart = sb.selectionEnd = sb.value.length;
      }
    }
  });
});
