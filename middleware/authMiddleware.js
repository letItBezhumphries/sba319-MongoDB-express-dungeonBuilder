const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = function (req, res, next) {
  // store the token from the req.header
  const token = req.header['x-auth-token'];

  // if no token exists respond with a 401 status and send message
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // otherwise a token was found if we hit this point,
  //in which case need to verify token with jwt.verify
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // decoded will store verified token
    req.user = decoded.user;

    // move to next middleware
    next();
  } catch (error) {
    res.status(401).json({ msg: 'token is no longer valid' });
  }
};

module.exports = auth;
