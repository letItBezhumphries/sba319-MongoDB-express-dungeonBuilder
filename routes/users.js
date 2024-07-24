const express = require('express');
const router = express.Router();

// need to require in any auth middleware
/* controllers */
const {
  getUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

router.get('/', getUsers).post('/', createNewUser);
router.get('/login', (req, res, next) => {
  res.status(200).render('login');
});
router.get('/profile/:id', getUserById);
router.put('/:id', updateUser).delete('/:id', deleteUser);

module.exports = router;
