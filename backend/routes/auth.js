const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { pool } = require('../config/db');
const { sendEmail } = require('../utils/email');

// Middleware: authenticate JWT
const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role, skills, availabilityHours } = req.body;
    const existing = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verifyToken = crypto.randomBytes(32).toString('hex');
    const verifyExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const userRes = await pool.query(`
      INSERT INTO users (name, email, password, role, skills, "availabilityHours", "activeTasks", is_verified, verification_token, verification_token_expiry)
      VALUES ($1, $2, $3, $4, $5, $6, 0, false, $7, $8)
      RETURNING *
    `, [name, email, hashedPassword, role || 'volunteer', skills || [], availabilityHours || 10, verifyToken, verifyExpiry]);
    
    const verifyUrl = `http://localhost:5173/?verify_token=${verifyToken}`;
    await sendEmail({
      to: email,
      subject: 'Verify your Upcycle Email',
      html: `<h2>Welcome to Upcycle, ${name}!</h2><p>Please click the link below to verify your email address:</p><a href="${verifyUrl}">${verifyUrl}</a>`
    });

    res.status(201).json({ message: 'Registration successful. Please check your email to verify your account.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRes = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userRes.rows.length === 0) return res.status(400).json({ message: 'Invalid credentials' });

    const user = userRes.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    if (!user.is_verified) return res.status(403).json({ message: 'Please verify your email address first. Check your inbox.' });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { _id: user.id, name: user.name, email: user.email, role: user.role, skills: user.skills, availabilityHours: user.availabilityHours } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/auth/forgot-password
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const userRes = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userRes.rows.length === 0) return res.status(404).json({ message: 'User not found' });

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 15 * 60 * 1000); // 15 mins

    await pool.query('UPDATE users SET reset_otp = $1, reset_otp_expiry = $2 WHERE email = $3', [otp, expiry, email]);

    await sendEmail({
      to: email,
      subject: 'Upcycle Password Reset OTP',
      text: `Your password reset OTP is: ${otp}. It expires in 15 minutes.`
    });

    res.json({ message: 'OTP sent successfully to your email.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/auth/reset-password
router.post('/reset-password', async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    const userRes = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userRes.rows.length === 0) return res.status(404).json({ message: 'User not found' });

    const user = userRes.rows[0];
    if (user.reset_otp !== otp) return res.status(400).json({ message: 'Invalid OTP' });
    if (new Date() > new Date(user.reset_otp_expiry)) return res.status(400).json({ message: 'OTP has expired' });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await pool.query('UPDATE users SET password = $1, reset_otp = NULL, reset_otp_expiry = NULL WHERE email = $2', [hashedPassword, email]);

    res.json({ message: 'Password reset successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/auth/verify-email
router.post('/verify-email', async (req, res) => {
  try {
    const { token } = req.body;
    const userRes = await pool.query('SELECT * FROM users WHERE verification_token = $1', [token]);
    if (userRes.rows.length === 0) return res.status(400).json({ message: 'Invalid verification token' });

    const user = userRes.rows[0];
    if (new Date() > new Date(user.verification_token_expiry)) return res.status(400).json({ message: 'Verification token has expired. Please register again.' });

    await pool.query('UPDATE users SET is_verified = true, verification_token = NULL, verification_token_expiry = NULL WHERE id = $1', [user.id]);
    res.json({ message: 'Email verified successfully! You can now log in.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/auth/me
router.get('/me', auth, async (req, res) => {
  try {
    const userRes = await pool.query('SELECT * FROM users WHERE id = $1', [req.user.id]);
    if (userRes.rows.length === 0) return res.status(404).json({ message: 'User not found' });
    const { password, ...userData } = userRes.rows[0];
    res.json({ ...userData, _id: userData.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/auth/volunteers
router.get('/volunteers', auth, async (req, res) => {
  try {
    const usersRes = await pool.query("SELECT * FROM users WHERE role != 'admin'");
    const volunteers = usersRes.rows.map(u => {
      const { password, ...rest } = u;
      return { ...rest, _id: u.id };
    });
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/auth/all
router.get('/all', auth, async (req, res) => {
  try {
    const usersRes = await pool.query('SELECT * FROM users');
    const safeUsers = usersRes.rows.map(u => {
      const { password, ...rest } = u;
      return { ...rest, _id: u.id };
    });
    res.json(safeUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = { router, auth };
