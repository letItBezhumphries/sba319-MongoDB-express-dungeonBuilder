const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
// need to require in any auth middleware
const auth = require('../middleware/authMiddleware');

/* controllers */

const {
  getUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

router
  .get('/', getUsers)
  .post(
    '/',
    [
      check('username', 'A Username is required').not().isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
      check(
        'password',
        'Please enter a password with 6 or more characters'
      ).isLength({ min: 6 }),
    ],
    createNewUser
  );
router.get('/login', (req, res, next) => {
  res.status(200).render('login');
});

// router.get('/profile/:id', getUserById);
router.get('/profile/:id', getUserById);

router.put('/:id', updateUser).delete('/:id', deleteUser);
// router.put('/:id', updateUser).delete('/:id', auth, deleteUser);

module.exports = router;
