# Feeling Quotes App

**Feeling Quotes** is a beginner-friendly web app built with ReactJS where users enter how they feel (e.g., “happy”, “sad”, or “tired”) and receive a quote that matches that mood.  
This app is created for learning purposes using a basic React frontend and Node.js backend with a local quote database.

---

## Features

- **Emotion Input** – Type how you feel and get a related quote
- **Quick Response** – Quotes are shown instantly on clicking "Tell Me" or pressing Enter
- **Simple Data** – Limited static quotes stored in a local JSON file
- **Custom Styling** – Basic layout with a soft, letter-style quote box (CSS-based)

---

## Tech Stack

| Area       | Technology         |
|------------|---------------------|
| Frontend   | React (Vite), CSS   |
| Backend    | Node.js, Express.js |
| Data       | Static `quotes.json` |

---

## Getting Started

### Prerequisites

- Node.js installed  
- No API keys required — quotes are served from a local JSON file

---

### Step 1: Clone the repository

```bash
git clone https://github.com/evelyneldo/feeling-quotes-app.git
cd feeling-quotes-app
Step 2: Start the backend
cd backend
npm install
node server.js

Step 3: Start the frontend
cd ../client
npm install
npm run dev

### License
This project was created for learning, personal growth, and portfolio demonstration.
You are welcome to explore, remix, and build on it — but not for commercial use.
