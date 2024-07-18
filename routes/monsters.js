const express = require('express');
const router = express.Router();

/* pre-db monsters data */
const monsters = require('../data/monsters');

// @route    GET api/monsters
// @desc     get all monsters
// @access   Public
router.get('/', (req, res) => {
  res.status(200).render('monsters', {
    page_title: 'Monsters available to add to your Dungeons',
    authenticated: false,
    monsters: monsters,
    monsterView: monsters[0],
  });
});

module.exports = router;
