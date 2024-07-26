const express = require('express');
const router = express.Router();

/* require in Dungeon Controllers */
const {
  getDungeons,
  getDungeonById,
  createNewDungeon,
  updateDungeon,
  deleteDungeon,
} = require('../controllers/dungeonController');

const auth = require('../middleware/authMiddleware');

router.get('/', getDungeons);
router
  .get('/:dgId', getDungeonById)
  .put('/:dgId', updateDungeon)
  .delete('/:dgId', deleteDungeon);
router.post('/new/:id', createNewDungeon);

module.exports = router;
