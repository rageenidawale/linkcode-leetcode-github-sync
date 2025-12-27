# Privacy Policy

**LeetCode GitHub Sync** respects your privacy and is designed with a **security-first** approach.  
This document explains what data the extension accesses, how it is used, and what it does **not** do.

---

## What data the extension accesses

### 1. LeetCode website data

The extension runs **only** on LeetCode problem pages (`https://leetcode.com/problems/*`) and observes:

- Submission result status (for example, *Accepted*)
- Problem metadata (problem name and URL)
- Programming language used
- Code that **you personally submit**

This data is accessed **only after you submit a solution** and only to detect *Accepted* submissions.

---

### 2. GitHub repository access

The extension uses a **GitHub fine-grained Personal Access Token** that you provide during setup.

The token is used only to:

- Create or update files
- Commit code **only** to the single repository you select

The extension **does not**:

- Access your other repositories
- Access your GitHub profile
- Access organizations
- Access issues, pull requests, workflows, or settings

---

## What data is stored

All data is stored **locally in your browser** using Chrome’s local storage:

- GitHub Personal Access Token
- Selected repository name
- Sync mode preference (automatic or semi-automatic)
- Minimal state used to prevent duplicate syncing

No data is stored on external servers.

---

## What data is NOT accessed

The extension **does not**:

- Read or store your LeetCode password
- Read browser cookies
- Access browsing history
- Track user activity
- Collect analytics or telemetry
- Send data to third-party services

There is **no backend server** involved.

---

## How data is transmitted

- Code is sent **directly from your browser to GitHub** using the official GitHub REST API.
- All communication happens over secure HTTPS connections.
- No data is intercepted, logged, or proxied by external services.

---

## User control

You are always in control:

- Sync can be disabled at any time
- Semi-automatic mode requires explicit confirmation before syncing
- GitHub tokens can be revoked instantly from GitHub settings

The extension performs no background syncing without your consent.

---

## Third-party services

This extension interacts only with:

- **LeetCode** (`leetcode.com`)
- **GitHub** (`api.github.com`)

No other third-party services are used.

---

## Changes to this policy

This privacy policy may be updated as the extension evolves.  
Any changes will be reflected in the extension documentation.

---

## Contact

If you have questions or concerns about privacy or security, please contact the developer via the Chrome Web Store listing.

---

### Summary (plain English)

- Your code stays yours  
- Your GitHub access is limited to one repository  
- Nothing leaves your browser except your solution going to GitHub  
- No tracking, no analytics, no hidden behavior
