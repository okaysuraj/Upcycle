# Upcycle 🌿

Upcycle is a full-stack, comprehensive platform for recycling management, horticulture coordination, resource tracking, and volunteer engagement. Built with a serene, modern, and earthy aesthetic, Upcycle connects communities and tracks sustainability efforts with beautiful UI and robust API services.

## Features

* **Secure Authentication**: JWT-based login with real Email Verification & OTP Password Recovery using Nodemailer.
* **Role-Based Dashboards**: Distinct interfaces for Administrators, Staff, and Volunteers.
* **Horticulture Management**: Track plant health, soil preparation, planting dates, and crop harvests.
* **Interactive Task Management**: Real-time task cards and progress indicators.
* **Resource & Inventory Tracking**: Keep tabs on tools, seeds, and water supplies.
* **Serene UI/UX**: Custom design system built on top of TailwindCSS focusing on high-contrast earthy greens, glassmorphism, and subtle micro-animations.

## Technology Stack

* **Frontend**: React (Vite), Tailwind CSS, Recharts (for Dashboard data visualization).
* **Backend**: Node.js, Express, PostgreSQL (`pg`), JSON Web Tokens (JWT), Bcrypt, Nodemailer.
* **Architecture**: REST API with robust security middleware and environment-based configuration.

## Project Structure

```text
upcycle/
├── backend/            # Express.js REST API
│   ├── config/         # DB Connection & env configurations
│   ├── database/       # PostgreSQL schema & migration scripts
│   ├── routes/         # Express routers (auth, tasks, events, etc.)
│   ├── utils/          # Helper utilities (email dispatcher with Ethereal fallback)
│   └── server.js       # Main server entry point
└── frontend/           # React App
    ├── src/
    │   ├── components/ # Reusable UI pieces (Navbar, Notifications)
    │   ├── context/    # React Context providers (AuthContext)
    │   ├── pages/      # Route-level views (Dashboard, Tasks, Landing, Login, Signup)
    │   ├── index.css   # Core Tailwind entry & Global Theme Variables
    │   └── App.jsx     # Main routing application
    └── tailwind.config.js
```

## Getting Started

### Prerequisites
* **Node.js**: v18+
* **Neon Cloud PostgreSQL**: An active Neon project (or other hosted Postgres database).

### 1. Database Setup
Ensure you have created a database in Neon Cloud Postgres. Retrieve your database connection string from the Neon console. It should look like this:
`postgresql://<user>:<password>@<neon-hostname>/neondb?sslmode=require`

### 2. Backend Configuration
1. Navigate to the backend directory:
   ```bash
   cd backend
   npm install
   ```
2. Create a `.env` file in the `backend/` directory (you can use `.env.example` as a starting template):
   ```env
   PORT=5000
   DATABASE_URL="postgresql://neondb_owner:<password>@<neon-hostname>/neondb?sslmode=require"
   JWT_SECRET=your_super_secret_jwt_key
   
   # Optional: Email configuration for Nodemailer
   # If left blank, the app will automatically use Ethereal Email for testing!
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=your_email@example.com
   SMTP_PASS=your_app_password
   SMTP_FROM="Upcycle App" <noreply@upcycle.edu>
   ```
3. Initialize the database schema and seed data on the Neon database:
   ```bash
   # Linux/Mac
   RESET_DB=true node -e "require('dotenv').config(); require('./config/db').connectDB().then(() => process.exit(0))"
   
   # Windows (PowerShell)
   $env:RESET_DB="true"; node -e "require('dotenv').config(); require('./config/db').connectDB().then(() => process.exit(0))"
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### 3. Frontend Configuration
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   npm install
   ```
2. Start the development server (configured to proxy API calls to the backend on port 5440):
   ```bash
   npm run dev
   ```

## Contributing
Please refer to standard Git workflows when committing to Upcycle. Ensure your environment variables `.env` are never tracked in version control.
