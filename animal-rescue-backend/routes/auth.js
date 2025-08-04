const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../models/db');
const { jwtSecret } = require('../config');

const router = express.Router();

// 🔐 Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'All fields required.' });

  try {
    const [rows] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
    if (rows.length > 0) return res.status(409).json({ error: 'Email already registered.' });

    const hash = await bcrypt.hash(password, 10);
    await pool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hash]
    );

    res.json({ message: 'Signup successful.' });
  } catch (err) {
    console.error('Signup error:', err);  // Helpful for debugging
    res.status(500).json({ error: 'Server error.' });
  }
});


// ✅ Secure Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'All fields required.' });

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) return res.status(401).json({ error: 'Invalid credentials.' });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials.' });

    const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '1d' });

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
