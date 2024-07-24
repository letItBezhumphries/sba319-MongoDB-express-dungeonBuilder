const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { validationResult } = require('express-validator');

/* The User Model */
const User = require('../models/User');

// @route    GET api/auth
// @desc     Test route
// @access   Public
const getToken = async (req, res) => {
  try {
    // remember that auth middle will set the req.user
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
const authenticateUser = async (req, res) => {
  // check the request for any validationResult errors passed from our middleware checks
  // store any errors and check if the result is not empty
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // no validation errors then all go to get the req.body
  const { email, password } = req.body;

  try {
    // want to make sure this user doesnt already exist
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    // create the payload and sign
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

module.exports = { getToken, authenticateUser };
