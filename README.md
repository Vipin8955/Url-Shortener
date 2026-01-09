🔗 URL Shortener with Authentication

A full-stack URL Shortener application built using Node.js, Express, MongoDB, and EJS, featuring user authentication, secure password handling, click analytics, and a clean dashboard UI.

This project follows proper backend architecture patterns and is suitable for learning, portfolio, and interview discussions.

🚀 Features
🔐 Authentication & Security

User Signup & Login

Password hashing using bcrypt

JWT-based authentication

Secure httpOnly cookies

Logout functionality

Route protection using middleware

🔗 URL Shortening

Generate short URLs using nanoid

Redirect short URLs to original URLs

Track total number of clicks per URL

User-specific URLs (each user sees only their own data)

📊 Dashboard

List of all generated URLs

Click count analytics

Delete URLs without page reload (using Fetch API)

Proper empty-state handling

Handles long URLs gracefully in UI

🧠 Architecture & Best Practices

Post-Redirect-Get (PRG) pattern to avoid duplicate submissions

Server-side rendering using EJS

Clean separation of routes, controllers, models, and middleware

Environment variables using dotenv

🛠 Tech Stack

Backend

Node.js

Express.js

MongoDB

Mongoose

bcrypt

jsonwebtoken

Frontend

EJS (Server-side templates)

CSS (Glassmorphism UI for auth pages)

Vanilla JavaScript (Fetch API)

```text
📁 Project Structure
urlexp/
├── controllers/
│   ├── user.js
│   └── url.js
├── models/
│   ├── user.js
│   └── url.js
├── routes/
│   ├── staticRoute.js
│   └── url.js
├── middlewares/
│   └── auth.js
├── views/
│   ├── login.ejs
│   ├── signUp.ejs
│   └── home.ejs
├── public/
│   └── css/
├── connection.js
├── auth.js
├── index.js
├── .env
└── README.md
```
⚙️ Environment Variables

Create a .env file in the root directory:

PORT=8000
MONGO_URI=your_mongodb_connection_string
SECRET=your_jwt_secret

▶️ How to Run Locally

Clone the repository

git clone https://github.com/your-username/url-shortener.git
cd url-shortener


Install dependencies

npm install


Start the server

npm start


Open your browser:

http://localhost:8000

🧪 Key Learnings

Secure password handling with bcrypt

JWT authentication using cookies

Middleware-based route protection

Proper form handling using PRG pattern

Handling real-world edge cases in server-rendered apps

Clean MVC-style backend structure

📌 Future Improvements (Optional)

URL expiration feature

Detailed analytics page (per URL)

Copy-to-clipboard button

Pagination for large URL lists

Deployment (Render / Railway / Fly.io)

👨‍💻 Author

Vipin Choudhary
B.Tech Student | Backend Development Enthusiast

⭐ Final Note

This project was built with a focus on correct backend architecture, security, and clean UX, making it suitable for interviews and portfolio showcasing.

Feel free to fork, star, or improve it!
