const express = require('express');
const router = express.Router();

/* require in Dungeon Model */
const {
  getDungeons,
  getDungeonById,
  createNewDungeon,
  updateDungeon,
  deleteDungeon,
} = require('../controllers/dungeonController');

router.get('/', getDungeons);
router
  .get('/:dgId', getDungeonById)
  .put('/:dgId', updateDungeon)
  .delete('/:dgId', deleteDungeon);
router.post('/new/:id', createNewDungeon);

module.exports = router;
