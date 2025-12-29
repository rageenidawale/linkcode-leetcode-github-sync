let submissionInProgress = false;
let lastStatus = null;
let observer = null;
let lastSeenResult = null;
let currentProblemSlug = null;


const SUBMIT_SELECTORS = [
  '[data-e2e-locator="console-submit-button"]',
  '[data-e2e-locator="submit-button"]',
  'button[aria-label="Submit"]'
];

function safeSendMessage(payload) {
  if (
    typeof chrome === "undefined" ||
    !chrome.runtime ||
    !chrome.runtime.sendMessage
  ) {
    console.warn("Extension context unavailable. Message skipped.");
    return false;
  }

  chrome.runtime.sendMessage(payload);
  return true;
}

function isSQLLanguage(lang) {
  return ["mysql", "postgresql", "oracle", "ms sql server", "sqlserver"].includes(lang?.toLowerCase());
}

function getProblemSlug() {
  const match = window.location.pathname.match(/problems\/([^/]+)/);
  return match ? match[1] : null;
}
setInterval(() => {
  const slug = getProblemSlug();
  if (!slug) return;

  if (slug !== currentProblemSlug) {

    currentProblemSlug = slug;
    submissionInProgress = false;
    lastStatus = null;
  }
}

);
// Detect Submit click
document.addEventListener("click", (event) => {

  const submitBtn = event.target.closest('[data-e2e-locator="console-submit-button"]');
  if (submitBtn) {
    submissionInProgress = true; 
  } 
});

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
    submissionInProgress = true;
  } 
});

// Observe result changes
observer = new MutationObserver(() => {

  if (!submissionInProgress) return;

  const resultEl = document.querySelector(
    '[data-e2e-locator="submission-result"]'
  );
  if (!resultEl) return;

  if (resultEl === lastSeenResult) return;
  lastSeenResult = resultEl;

  const status = resultEl.innerText.trim();


  if (status === "Accepted") {
    lastStatus = "Accepted";
    submissionInProgress = false;

    const sent = safeSendMessage({ type: "EXTRACT_CODE" });
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

