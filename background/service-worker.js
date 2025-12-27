console.log("Background service worker loaded");

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type === "EXTRACT_CODE") {
    console.log("📨 Background received EXTRACT_CODE message");

    chrome.scripting.executeScript(
      {
        target: { tabId: sender.tab.id },
        world: "MAIN",
        func: () => {
          let code = "";

          if (window.monaco && window.monaco.editor) {
            const models = window.monaco.editor.getModels();
            if (models.length > 0) {
              code = models[0].getValue();
            }
          }

          return code;
        }
      },
      (results) => {
        const code = results?.[0]?.result || "";
        const submission = {
  problemSlug: sender.tab.url.split("/")[4], // e.g. "two-sum"
  language: "python", // we’ll refine later
  code,
  timestamp: Date.now()
};

chrome.storage.local.set(
  { lastSubmission: submission },
  () => {
    console.log("💾 Submission saved to storage:", submission);
  }
);

      }
    );
  }
});
