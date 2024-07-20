/* require in Dungeon Model */
const Dungeon = require('../models/Dungeon');
const Monster = require('../models/Monster');

// @route    GET api/dungeons
// @desc     get all dungeons
// @access   Public
const getDungeons = async (req, res, next) => {
  try {
    const dungeons = await Dungeon.find()
      .populate({ path: 'monsters' })
      .populate('userId');

    console.log('in getDungeons -> dungeons:', dungeons);

    const monsters = await Monster.find({});

    if (dungeons) {
      res.status(200).render('dungeons', {
        page_title: 'Dungeons Built',
        dungeons: dungeons,
        monsters: monsters,
      });
    } else {
      next();
    }
  } catch (error) {
    console.error('error', error);
  }
};

// @route    GET api/dungeons/:id
// @desc     get dungeon by id
// @access   Public
const getDungeonById = async (req, res, next) => {
  try {
    const { dgId } = req.params;

    const dungeon = await Dungeon.findById(dgId);
    console.log('in GET dungeon by id:', dungeon);

    if (dungeon) {
      res.status(200).render('dungeon', {
        page_title: `${dungeon.dungeon_name} details`,
        dungeon: dungeon,
        authenticated: true,
      });
    } else {
      next();
    }
  } catch (error) {
    console.error('error', error);
  }
};

// @route    POST api/dungeons/new/:id
// @desc     creates a new dungeon for user
// @access   private
const createNewDungeon = async (req, res, next) => {
  try {
    // console.log('req.body:', req.body);
    const { id } = req.params;

    const { size, dungeon_name, monsters } = req.body;

    const newDungeon = new Dungeon({
      userId: id,
      size: size,
      dungeon_name: dungeon_name,
      monsters: monsters,
    });

    const createdDungeon = await newDungeon.save();

    if (createdDungeon) {
      res.status(201).render('dungeon', {
        page_title: `${createdDungeon.dungeon_name} has been discovered!`,
        authenticated: true,
        dungeon: createdDungeon,
      });
    } else {
      next();
    }
    // res.status(201).redirect(`/dungeons/:${newDungeon.id}`);
  } catch (error) {
    console.error('error', error);
  }
};

// @route    PUT api/dungeons/:dgId
// @desc     update a dungeon size or name
// @access   Private
const updateDungeon = async (req, res, next) => {
  try {
    const { dgId } = req.params;

    // destructure the req.body
    const { dungeon_name, size, monsters } = req.body;

    // find dungeon by id
    const dungeon = await Dungeon.findById(dgId);

    if (dungeon) {
      dungeon.dungeon_name = dungeon_name;
      dungeon.size = size;
      dungeon.monsters = monsters;

      const updatedDungeon = await dungeon.save();
      res.status(203).render('dungeon', {
        page_title: `${updatedDungeon.dungeon_name} has been updated!`,
        authenticated: true,
        dungeon: updatedDungeon,
      });
      // res.json(updatedProduct);
    } else {
      next();
    }
  } catch (error) {
    console.error('error', error);
  }
};

// @route    DELETE api/dungeons/:dgId
// @desc     Delete dungeon by id
// @access   Private
const deleteDungeon = async (req, res, next) => {
  try {
    const { dgId } = req.params;

    const dungeon = await Dungeon.findById(dgId);
    console.log('DELETE dungeon by id:', dungeon);

    if (dungeon) {
      await dungeon.remove();
      res.status(204).render('dungeon', {
        page_title: `${dungeon.dungeon_name} has been deleted!`,
        authenticated: true,
        dungeon: dungeon,
      });
    } else {
      next();
    }
  } catch (error) {
    console.error('error', error);
  }
};

module.exports = {
  getDungeons,
  getDungeonById,
  createNewDungeon,
  updateDungeon,
  deleteDungeon,
};
