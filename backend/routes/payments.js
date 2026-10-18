// Report payment availability until a payment provider is connected.
const router = require('express').Router();
const { auth } = require('../middleware/auth');
router.post('/create-checkout-session', auth, (req, res) =>
  res
    .status(501)
    .json({ message: 'Online payments are not configured. No payment has been taken.' })
);
module.exports = router;
