// -------------------- Elements --------------------

const setupView = document.getElementById("setupView");
const dashboardView = document.getElementById("dashboardView");

const ownerInput = document.getElementById("githubOwner");
const repoInput = document.getElementById("githubRepo");
const tokenInput = document.getElementById("githubToken");

const saveBtn = document.getElementById("saveBtn");
const setupStatus = document.getElementById("setupStatus");

const repoText = document.getElementById("repoText");
// const dashboardStatus = document.getElementById("dashboardStatus");
const changeConfigBtn = document.getElementById("changeConfigBtn");
const autoSyncToggle = document.getElementById("autoSyncToggle");
const syncModeText = document.getElementById("syncModeText");

// -------------------- View Helpers --------------------

function showSetup() {
  setupView.classList.remove("hidden");
  dashboardView.classList.add("hidden");
}

function showDashboard(owner, repo) {
  repoText.textContent = `Repo: ${owner}/${repo}`;
  setupView.classList.add("hidden");
  dashboardView.classList.remove("hidden");
}

// -------------------- Draft Persistence --------------------

function persistDraft() {
  chrome.storage.local.set({
    draftGithubOwner: ownerInput.value,
    draftGithubRepo: repoInput.value,
    draftGithubToken: tokenInput.value
  });
}

ownerInput.addEventListener("input", persistDraft);
repoInput.addEventListener("input", persistDraft);
tokenInput.addEventListener("input", persistDraft);

// -------------------- Load State --------------------

chrome.storage.local.get(
  [
    "githubOwner",
    "githubRepo",
    "githubToken",
    "autoSync",
    "lastStatus",
    "draftGithubOwner",
    "draftGithubRepo",
    "draftGithubToken"
  ],
  (data) => {
    autoSyncToggle.checked = data.autoSync !== false;

    syncModeText.textContent = autoSyncToggle.checked
      ? "Mode: Auto-sync ✅"
      : "Mode: Manual ⏸️";

    if (data.githubOwner && data.githubRepo && data.githubToken) {
      showDashboard(data.githubOwner, data.githubRepo);
    } else {
      showSetup();
      ownerInput.value = data.draftGithubOwner || "";
      repoInput.value = data.draftGithubRepo || "";
      tokenInput.value = data.draftGithubToken || "";
    }

    // if (data.lastStatus) {
    //   dashboardStatus.textContent = data.lastStatus;
    // }
  }
);

// -------------------- Save Configuration --------------------

saveBtn.addEventListener("click", () => {
  const githubOwner = ownerInput.value.trim();
  const githubRepo = repoInput.value.trim();
  const githubToken = tokenInput.value.trim();

  if (!githubOwner || !githubRepo || !githubToken) {
    setupStatus.textContent = "Please fill all fields ⚠️";
    return;
  }

  chrome.storage.local.set(
    {
      githubOwner,
      githubRepo,
      githubToken,
      autoSync: true,
      draftGithubOwner: "",
      draftGithubRepo: "",
      draftGithubToken: "",
      lastStatus: "GitHub configured successfully ✅"
    },
    () => {
      setupStatus.textContent = "";
      showDashboard(githubOwner, githubRepo);
      // dashboardStatus.textContent = "Waiting for next Accepted submission…";
      syncModeText.textContent = "Mode: Auto-sync ✅";
    }
  );
});

// -------------------- Change Configuration --------------------

changeConfigBtn.addEventListener("click", () => {
  showSetup();
});

// -------------------- Auto-sync Toggle --------------------

autoSyncToggle.addEventListener("change", () => {
  chrome.storage.local.set({ autoSync: autoSyncToggle.checked });

  syncModeText.textContent = autoSyncToggle.checked
    ? "Mode: Auto-sync ✅"
    : "Mode: Manual ⏸️";

  // dashboardStatus.textContent = autoSyncToggle.checked
  //   ? "Auto-sync enabled ✅"
  //   : "Auto-sync disabled ⏸️";
});
