const Monster = require('../models/Monster');

// @desc:  fetch all Monsters
// @route:  GET /api/Monsters
// @access:  Public
const getMonsters = async (req, res, next) => {
  try {
    const monsters = await Monster.find({});

    console.log('in getMonsters controller', monsters[0]);

    if (monsters) {
      res.status(200).render('monsters', {
        page_title: 'Monsters available to add to your Dungeons',
        authenticated: false,
        monsters: monsters,
        monsterView: monsters[0],
      });
      // res.status(200).json(monsters);
    } else {
      next();
    }
  } catch (error) {
    console.error('error', error);
  }
};

module.exports = {
  getMonsters,
};
