# 📦 Short-URL

A backend-focused **URL shortening service** built with **Node.js**, **Express**, and **MongoDB**. This project demonstrates server-side logic, database integration, and routing for redirecting users from a short URL to the original one.

---

## ⚙️ Tech Stack

- **Node.js** – Server runtime environment
- **Express.js** – Web framework for Node.js
- **MongoDB** – NoSQL database for storing URLs
- **Mongoose** – ODM for MongoDB
- **EJS** – Templating engine for rendering views

---

## 🔐 Features

- Generate a short URL for any valid long URL
- Redirect users to the original URL using the short link
- Track the number of visits for each short URL
- Clean backend structure with route separation and models

---

## 📁 Project Structure

```
Short-URL/
├── models/
│   └── ShortUrl.js
├── routes/
│   └── index.js
├── views/
│   └── index.ejs
├── .env
├── .gitignore
├── package.json
├── server.js
```

---

## 🛠️ Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/8zeeshan1/Short-URL.git
cd Short-URL
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file in the root directory**

```env
PORT=5000
MONGO_URL=your_mongodb_atlas_url
```

4. **Run the application**
```bash
node server.js
```

> Visit `http://localhost:5000` to test the app locally.

---

## 🌐 Environment Variables

| Variable      | Description                        |
|---------------|------------------------------------|
| `PORT`        | Port number for server to listen on |
| `MONGO_URL`   | MongoDB connection string (Atlas)  |

---

## 📌 Note

This project is built primarily for demonstrating backend concepts using Node.js and MongoDB. The frontend is minimal, using EJS to focus on backend logic and database integration.

---

## 🧑‍💻 Author

**Mohd Zeeshan Quraishi**  
GitHub: [8zeeshan1](https://github.com/8zeeshan1)

---