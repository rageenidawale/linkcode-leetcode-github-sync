# LinkCode 
LeetCode → GitHub Sync

LinkCode automatically syncs your **accepted LeetCode solutions** to a **single GitHub repository**, with full control, transparency, and minimal permissions.

---

## What is LinkCode?

**LinkCode** is a Chrome extension that watches your LeetCode submissions and saves **only accepted solutions** directly to a GitHub repository you choose.

- One repository per user
- Auto-sync or manual sync modes
- No unnecessary permissions
- Clean, developer-focused UI

---

## Why does this extension exist?

Most existing LeetCode → GitHub tools:

- Ask for **full GitHub account access**
- Access **all repositories**

As developers, this raises real concerns:
- Why does an extension need access to my entire GitHub?

**LinkCode exists to fix this.**

### The philosophy behind LinkCode
- **Minimal access** – only one repository
- **Transparency** – you see what gets synced
- **Control** – auto or manual syncing
- **Clean history** – Git handles versions, not the extension

---

## How does LinkCode work?

1. **Connect a GitHub repository**
   - Provide your GitHub username, repository name, and an access token
   - Token is stored locally and can be revoked anytime

2. **Solve problems on LeetCode**
   - LinkCode listens for **Accepted** submissions only

3. **Extract the solution safely**
   - Reads code directly from the editor
   - Detects the programming language automatically

4. **Sync to GitHub**
   - Saves code under language-based folders  
     Example:
     ```
     python/two_sum.py
     javascript/valid_parentheses.js
     ```
   - Existing files are **updated**, not duplicated
   - Git handles version history automatically

5. **You stay in control**
   - Auto-sync ON → sync happens automatically
   - Auto-sync OFF → sync manually when you want

---

## Security & Privacy

LinkCode is built with security as a first-class concern.

- Uses **fine-grained GitHub tokens**
- Requires access to **only one repository**
- Never accesses other repositories or account data
- No analytics, tracking, or external servers
- All data stored locally using `chrome.storage.local`

---

## Why does LinkCode need a GitHub token?

LinkCode needs a GitHub token **only to create or update files** in the repository you choose.

It **cannot**:
- Access other repositories
- Read issues, pull requests, or profile data
- Perform any action outside the selected repository

Your token:
- Stays **only in your browser**
- Is never sent to any external server
- Can be revoked anytime from GitHub settings

This avoids risky OAuth flows and keeps **full control in your hands**.

---

## Required token permissions

When creating a **fine-grained GitHub token**, grant **only** the following access:

### Repository access
- Select **only the repository** you want to sync with LinkCode

### Repository permissions
- **Contents:** Read and write

No other permissions are required.

LinkCode does **not** need access to:
- Other repositories
- Issues or pull requests
- User profile data
- Organization data

---

## Features

- Sync **only accepted submissions**
- Auto-sync and manual sync modes
- Language-based folder structure
- Inline validation and error handling
- Draft-safe setup (no lost form data on tab switch)
- Clean, distraction-free UI

---

## Tech Stack

- Chrome Extensions (Manifest V3)
- Vanilla JavaScript
- GitHub REST API
- No external dependencies

---

## Reporting Bugs

Found a bug or something confusing?

Please report it here:  
https://github.com/rageenidawale/leetcode-github-sync/issues

Include:
- What you expected
- What actually happened
- Screenshots if possible

---

## Roadmap

Planned improvements:
- Problem metadata headers
- Submission history
- Streak tracking
- Better language detection
- Optional OAuth support

---
