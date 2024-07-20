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
router.get('/profile/:id', getUserById);
router.put('/:id', updateUser).delete('/:id', deleteUser);

module.exports = router;
