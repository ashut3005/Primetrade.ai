# Project Overview

This project is a scalable full-stack Task Manager application built as part of the Backend Developer (Intern) assignment.

It demonstrates:

- Secure JWT authentication
- Role-based access control (User & Admin)
- RESTful API design
- CRUD operations
- MongoDB database schema
- API versioning
- Scalable backend architecture
- React frontend integration
- Tailwind CSS UI

## Tech Stack
### Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt (Password Hashing)
- Helmet (Security headers)
- CORS
- Express-validator

### Frontend

- React (Vite)
- React Router
- Axios
- Tailwind CSS

📂 Project Structure
```bash
backend/
│── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── server.js
│── .env
│── package.json

frontend/
│── src/
│   ├── pages/
│   ├── components/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx

```

### Authentication & Security

- Passwords are hashed using bcrypt
- JWT tokens are generated with expiration
- Protected routes using middleware
- Role-based access control
- CORS enabled
- Security headers using Helmet
- Input validation & error handling

## Roles & Permissions
### User

- Register & Login
- Create tasks
- View own tasks
- Update own tasks
- Delete own tasks

### Admin

- View all tasks
- Delete any task
- Special admin dashboard view

### API Versioning

All APIs are versioned:
```bash
/api/v1/auth/register
/api/v1/auth/login
/api/v1/tasks
```


This allows easy upgrade to /api/v2 in future.

## Database Schema
### User Schema
```bash
{
  name: String,
  email: String (unique, indexed),
  password: String (hashed),
  role: "user" | "admin"
}
```

### Task Schema
```bash
{
  title: String,
  description: String,
  user: ObjectId (ref: User)
}
```

### Frontend Features

- Clean UI using Tailwind CSS
- Login & Register forms
- Protected Dashboard
- Dynamic Navbar (Login/Register or Logout)
- Admin dashboard differentiation
- Real-time task updates

## Setup Instructions
### Clone Repository
```bash
git clone Primetrade.ai
cd project-folder
```

### Backend Setup
```bash
cd backend
npm install
```


Create .env file:
```bash
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/intern_assignment
JWT_SECRET=supersecretkey
JWT_EXPIRE=1h
```


Start backend:
```bash
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```


Frontend runs on:
```bash
http://localhost:5173
```

Backend runs on:
```bash
http://localhost:5000
```
