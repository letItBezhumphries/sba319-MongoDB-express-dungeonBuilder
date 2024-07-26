const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { check } = require('express-validator');
const { getToken, authenticateUser } = require('../controllers/authController');

router
  .get('/', auth, getToken)
  .post(
    '/',
    [
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Password is required').exists(),
    ],
    authenticateUser
  );

module.exports = router;
