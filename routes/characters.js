const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

/* pre-db characters data */
const characters = require('../data/characters');

// @route    GET /api/characters
// @desc     get all characters
// @access   Public
router.get('/', (req, res) => {
  console.log('GET all characters:', characters);
  res.status(200).render('characters', {
    page_title: 'Characters of the multiverse!',
    autheticated: false,
    characters: characters,
  });
});

// @route    GET /api/characters/:chrId
// @desc     get character by id
// @access   Public
router.get('/:chrId', (req, res, next) => {
  const { chrId } = req.params;

  function isTarget(resource) {
    if (resource.id === chrId) {
      return true;
    }
  }

  const character = characters.find((ch) => {
    return isTarget(ch);
  });

  if (character) {
    // res.status(200).json(character);
    res.status(200).render('character', {
      page_title: `${character.name} details`,
      autheticated: true,
      character: character,
    });
  } else {
    next();
  }
});

// @route    POST /api/characters/new/:id
// @desc     creates a new character
// @access   private
router.post('/new/:id', (req, res, next) => {
  const { id } = req.params;
  // console.log('req.body:', req.body);
  const { name, gender, class_type, age, hit_points } = req.body;

  let newCharacter = {
    id: faker.string.uuid().split('-').join(''),
    img: faker.image.urlLoremFlickr({ category: class_type }),
    userId: id,
    name: name,
    gender: gender,
    class: class_type,
    age: age,
    hit_points: hit_points,
  };

  characters.push(newCharacter);

  // res.status(201).redirect(`/characters/:${newCharacter.id}`);
  res.status(201).render('character', {
    page_title: `${newCharacter.name} was just created`,
    autheticated: true,
    character: newCharacter,
  });
});

// Update route - update a character by id
// @route    PUT characters/:id
// @desc     update a character
// @access   Private
router.put('/:chrId', (req, res, next) => {
  const { chrId } = req.params;

  function isTarget(resource, index, resourceArr) {
    if (resource.id === chrId) {
      for (const key in req.body) {
        resourceArr[index][key] = req.body[key];
      }
      return true;
    }
  }

  const character = characters.find((chr, i, characters) => {
    return isTarget(chr, i, characters);
  });

  console.log('PUT route update character by id:', character);

  if (character) {
    res.status(203).render('character', {
      page_title: `${character.name} was just updated`,
      autheticated: true,
      character: character,
    });
  } else {
    next();
  }

  // if (character) res.status(203).json(character);
  // else next();
});

// @route    DELETE /api/characters/:chrId
// @desc     Delete character by id
// @access   Private
router.delete('/:chrId', (req, res, next) => {
  const { chrId } = req.params;
  // testing function to pass to user find
  function isTarget(resource, index, resourceArr) {
    if (resource.id === chrId) {
      resourceArr.splice(index, 1);
      return true;
    }
  }

  const character = characters.find((chr, i, characters) => {
    return isTarget(chr, i, characters);
  });
  console.log('DELETE character by id:', character);
  // if (character) res.status(204).json(character);
  // else next();
  if (character) {
    res.status(204).render('character', {
      page_title: `${character.name} was just deleted`,
      authenticated: true,
      character: character,
    });
  } else {
    next();
  }
});

module.exports = router;
