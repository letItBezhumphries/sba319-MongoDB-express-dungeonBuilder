const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

/* pre-db dungeons data */
const dungeons = require('../data/dungeons');
const monsters = require('../data/monsters');

// @route    GET api/dungeons
// @desc     get all dungeons
// @access   Public
router.get('/', (req, res) => {
  console.log('in GET all dungeons:', dungeons);
  res.status(200).render('dungeons', {
    page_title: 'Dungeons Built',
    dungeons: dungeons,
    monsters: monsters,
  });
});

// @route    GET api/dungeons/:id
// @desc     get dungeon by id
// @access   Public
router.get('/:dgId', (req, res, next) => {
  const { dgId } = req.params;

  function isTarget(resource) {
    if (resource.id === dgId) {
      return true;
    }
  }

  const dungeon = dungeons.find((dg) => {
    return isTarget(dg);
  });

  if (dungeon) {
    res.status(200).render('dungeon', {
      page_title: `${dungeon.dungeon_name} details`,
      dungeon: dungeon,
      authenticated: true,
    });
  } else {
    next();
  }
});

// @route    POST api/dungeons/new/:id
// @desc     creates a new dungeon for user
// @access   private
router.post('/new/:id', (req, res, next) => {
  // console.log('req.body:', req.body);
  const { id } = req.params;

  const { size, dungeon_name, monsters } = req.body;

  let newDungeon = {
    id: faker.string.uuid().split('-').join(''),
    userId: id,
    size: size,
    dungeon_name: dungeon_name,
    monsters: monsters,
  };

  dungeons.push(newDungeon);

  // res.status(201).redirect(`/dungeons/:${newDungeon.id}`);
  res.status(201).render('dungeon', {
    page_title: `${newDungeon.dungeon_name} has been discovered!`,
    authenticated: true,
    dungeon: newDungeon,
  });
});

// @route    PUT api/dungeons/:dgId
// @desc     update a dungeon size or name
// @access   Private
router.put('/:dgId', (req, res, next) => {
  const { dgId } = req.params;

  function isTarget(resource, index, resourceArr) {
    if (resource.id === dgId) {
      for (const key in req.body) {
        resourceArr[index][key] = req.body[key];
      }
      return true;
    }
  }

  const dungeon = dungeons.find((dg, i, dungeons) => {
    return isTarget(dg, i, dungeons);
  });

  console.log('PUT route update dungeon by id:', dungeon);

  if (dungeon) {
    res.status(203).render('dungeon', {
      page_title: `${dungeon.dungeon_name} has been updated!`,
      authenticated: true,
      dungeon: dungeon,
    });
  }
  // if (dungeon) res.status(203).render('dungeon', { dungeon });
  // else next();
});

// @route    DELETE api/dungeons/:dgId
// @desc     Delete dungeon by id
// @access   Private
router.delete('/:dgId', (req, res, next) => {
  const { dgId } = req.params;
  // testing function to pass to user find
  function isTarget(resource, index, resourceArr) {
    if (resource.id === dgId) {
      resourceArr.splice(index, 1);
      return true;
    }
  }

  const dungeon = dungeons.find((dg, i, dungeons) => {
    return isTarget(dg, i, dungeons);
  });
  console.log('DELETE dungeon by id:', dungeon);

  // if (dungeon) res.status(204).render('dungeon', { dungeon });
  // else next();
  if (dungeon) {
    res.status(204).render('dungeon', {
      page_title: `${dungeon.dungeon_name} has been deleted!`,
      authenticated: true,
      dungeon: dungeon,
    });
  }
});

module.exports = router;
