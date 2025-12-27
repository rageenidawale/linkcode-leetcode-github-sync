console.log("LeetCode content script loaded");

let submissionInProgress = false;

/**
 * STEP 1: Detect when the user clicks the Submit button
 */
document.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (button && button.innerText.trim() === "Submit") {
    submissionInProgress = true;
    console.log("Submit button clicked");
  }
});

/**
 * STEP 2: Observe DOM changes after submit
 * We only react if a submission is in progress
 */
const observer = new MutationObserver(() => {
  if (!submissionInProgress) return;

  // Detect Accepted result
  if (document.body.innerText.includes("Accepted")) {
    console.log("✅ Accepted submission detected");

    submissionInProgress = false;

    // Tell background script to extract code safely
    chrome.runtime.sendMessage({
      type: "EXTRACT_CODE"
    });
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
