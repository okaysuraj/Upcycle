# 🌿 Upcycle: Campus Sustainability Platform

**Live Website:** [https://upcycleapp.netlify.app](https://upcycleapp.netlify.app)

## 🏗 Architecture

The repository is organized into three major projects, completely synced to the exact same Postgres database.

1. **`backend/`**: Node.js + Express API powered by Prisma ORM and Postgres.
2. **`frontend/`**: React Web Application powered by Vite and React Router DOM.
3. **`upcycle-mobile/`**: React Native Mobile App powered by Expo Router.

---


### 1. Database & Backend
```bash
cd backend
npm install
# Create a .env file containing DATABASE_URL and JWT_SECRET
npx prisma generate
npx prisma db push
npm run dev
```
*(Runs on `http://localhost:5000`)*

### 2. Web Frontend
```bash
cd frontend
npm install
npm run dev
```
*(Runs on `http://localhost:5173`)*

### 3. Mobile App
```bash
cd upcycle-mobile
npm install
npx expo start
```
*(Scans QR code to run on iOS/Android device or simulator)*

---

### 1. Deploying the Backend (Render)
Create a new Web Service on Render pointing to the `backend/` directory of your repository.

**Build Command**: `npm install && npx prisma generate`
**Start Command**: `npm start` (or `node server.js`)

**Required Environment Variables**:
- `DATABASE_URL`: Your production PostgreSQL connection string.
- `JWT_SECRET`: A secure random string for signing auth tokens.
- `FRONTEND_URL`: Your Netlify URL (e.g. `https://upcycle-web.netlify.app`) to allow CORS.

### 2. Deploying the Web Frontend (Netlify)
Create a new Site on Netlify pointing to the `frontend/` directory of your repository.

**Build Command**: `npm run build`
**Publish Directory**: `dist`

**Required Environment Variables**:
- `VITE_API_URL`: The URL of your deployed Render backend (e.g. `https://upcycle-backend.onrender.com/api`).

*(Note: The `public/_redirects` file is already included to ensure React Router handles deep links correctly without throwing 404 errors on Netlify).*

---

## 🔒 Security & Environment Audits

Before going live, ensure you have secured the following:
1. **Passwords**: Ensure Prisma schemas enforce strong passwords and that `bcrypt` is handling hashing.
2. **JWT Expiry**: Adjust token expiry times in `backend/routes/auth.js` to meet your security policy.
3. **API Keys**: Add any necessary third-party API keys (e.g., SendGrid, Stripe, Maps) to your Render environment variables. Do not commit `.env` files to source control.
