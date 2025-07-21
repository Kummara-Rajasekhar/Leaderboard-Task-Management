# 🏆 Leaderboard Task – MERN Stack Project

## 🚀 Project Overview

This is a full-stack web application that allows users to select or add players, assign random points, and track real-time rankings using a dynamic leaderboard. Built using the **MERN stack** (MongoDB, Express.js, ReactJS, and Node.js).

---

## 🎯 Objectives

- Select or add users.
- Randomly award 1–10 points using a claim button.
- Store claim history in MongoDB.
- Dynamically rank users based on total points.
- Build clean, responsive frontend and structured backend.

---

## 🧩 Features

### ✅ Frontend (ReactJS)
- 🔹 User selection dropdown
- 🔹 Add new users
- 🔹 Claim random points (1–10)
- 🔹 Real-time leaderboard with user ranks
- 🔹 Developer footer with links to portfolio & resume

### ✅ Backend (NodeJS + MongoDB)
- 🔹 Users collection: Stores names and total points
- 🔹 ClaimHistory collection: Stores every point claim event
- 🔹 API Endpoints:
  - `GET /api/users` – fetch sorted leaderboard
  - `POST /api/users` – add new user
  - `POST /api/claim` – claim random points
  - `GET /api/history` – fetch point claim history (optional)

---


## ⚙️ Tech Stack

- **Frontend**: ReactJS, Axios, Tailwind CSS (optional)
- **Backend**: NodeJS, ExpressJS, MongoDB
- **Database**: MongoDB (Mongoose ODM)
- **Tools**: Vite, CORS, dotenv

---

## ⚒️ Setup Instructions

### 📦 Backend
\`\`\`bash
cd server
npm install
npm run server
\`\`\`

### 💻 Frontend
\`\`\`bash
cd client
npm install
npm run dev
\`\`\`

Make sure to create a `.env` file in `server/` with:
\`\`\`
MONGO_URI=your_mongodb_connection_string
PORT=5000
\`\`\`

---

## 🧪 Future Enhancements

- 🔐 Add authentication
- 📊 Date filters on claim history
- ⬇️ Export leaderboard (PDF/CSV)
- 🔄 Pagination/infinite scroll

---

## 🙋‍♂️ Developer Info

**👨‍💻 Rajasekhar**  
📫 Email: kummararajasekhar17092004@gmail.com  
🌐 Portfolio: [rajasekhar-pf.netlify.app](https://rajasekhar-pf.netlify.app/)  
📄 Resume: [Download Here](https://drive.google.com/file/d/1Y-8cOgqVAR4Grm8DuB43gqWx5Rn1Jts5/view?usp=sharing)

---

 
