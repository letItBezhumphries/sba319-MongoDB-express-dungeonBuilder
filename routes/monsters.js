const express = require('express');
const router = express.Router();

/* controller */
const { getMonsters } = require('../controllers/monsterController');

router.get('/', getMonsters);

module.exports = router;
