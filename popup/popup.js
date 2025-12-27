document.addEventListener("DOMContentLoaded", () => {
  const repoInput = document.getElementById("repoInput");
  const saveBtn = document.getElementById("saveBtn");
  const status = document.getElementById("status");

  // 1. LOAD saved value when popup opens
  chrome.storage.local.get(["githubRepo"], (result) => {
    if (result.githubRepo) {
      repoInput.value = result.githubRepo;
    }
  });

  // 2. SAVE value when button is clicked
  saveBtn.addEventListener("click", () => {
    const repoValue = repoInput.value.trim();

    chrome.storage.local.set(
      { githubRepo: repoValue },
      () => {
        status.textContent = "Saved ✅";
      }
    );
  });

  chrome.runtime.sendMessage(
  { type: "PING" },
  (response) => {
    console.log("Popup received:", response);
  }
);

});
