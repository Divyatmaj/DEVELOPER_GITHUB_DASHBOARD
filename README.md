# 🚀 Developer GitHub Dashboard

A customizable React-based dashboard that gives a quick overview of any GitHub profile — including repositories, recent activity, and README.

---

## ✨ Features

* 📊 View GitHub profile (followers, following, profile link)
* 📁 Display repositories with direct links
* 🕒 Track recent GitHub activity
* 📄 Render README from your profile repo
* 🎨 Clean and customizable UI (WIP)
* ⚡ Built using React + GitHub API

---

## 🧠 How It Works

This project fetches data directly from the GitHub API using your username and displays:

* Profile information
* Public repositories
* Recent activity (events)
* Profile README

All data is dynamically loaded at runtime.

---

## 🔧 Customization (Very Easy)

You can customize the entire website by editing just **one file**:

```js
// src/config/userConfig.js

export default {
  name: "Your Name",
  githubUsername: "your-username",
  bio: "Your bio",
  accentColor: "#6366f1"
};
```

### 🔥 That’s it.

Change the `githubUsername` → the entire dashboard updates automatically.

---

## 🛠️ Tech Stack

* React
* JavaScript (ES6+)
* GitHub REST API
* CSS (custom styling)

---

## ⚙️ Setup & Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/your-repo-name

# Go into the project
cd your-repo-name

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## ⚠️ API Rate Limit (Important)

GitHub allows only **60 requests/hour (unauthenticated)**.

If data stops loading:

👉 Either wait or use a Personal Access Token.


---

## 📌 Future Improvements

* Better UI/UX (animations, layout upgrades)
* Dark/light theme toggle
* Repo sorting & filtering
* Language & stars display
* Fully customizable themes
* & much more?!

---

## 🤝 Contributing

Feel free to fork the project and customize it for your own portfolio.

---
