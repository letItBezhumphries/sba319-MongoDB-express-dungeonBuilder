const { faker } = require('@faker-js/faker');

/* require in Character Model */
const Character = require('../models/Character');

// @route    GET /api/characters
// @desc     get all characters
// @access   Public
const getCharacters = async (req, res, next) => {
  try {
    const characters = await Character.find({}).populate('userId');
    console.log('GET all characters:', characters);

    if (characters) {
      res.status(200).render('characters', {
        page_title: 'Characters of the multiverse!',
        autheticated: false,
        characters: characters,
      });
    } else {
      next();
    }
  } catch (error) {
    console.log('error', error);
  }
};

// @route    GET /api/characters/:chrId
// @desc     get character by id
// @access   Public
const getCharacterById = async (req, res, next) => {
  try {
    const { chrId } = req.params;

    const character = await Character.findById(chrId).populate('userId');

    if (character) {
      res.status(200).json(character);
      // res.status(200).render('character', {
      //   page_title: `${character.name} details`,
      //   autheticated: true,
      //   character: character,
      // });
    } else {
      next();
    }
  } catch (error) {
    console.log('error', error);
  }
};

// @route    POST /api/characters/new/:id
// @desc     creates a new character
// @access   private
const createNewCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log('req.body:', req.body);
    const { name, gender, class_type, age, hit_points } = req.body;

    let newCharacter = new Character({
      img: faker.image.urlLoremFlickr({ category: class_type }),
      userId: id,
      name: name,
      gender: gender,
      class_type: class_type,
      age: age,
      hit_points: hit_points,
    });

    const createdCharacter = await newCharacter.save();

    if (createdCharacter) {
      res.status(201).json(newCharacter);
      // res.status(201).render('character', {
      //   page_title: `${newCharacter.name} was just created`,
      //   autheticated: true,
      //   character: newCharacter,
      // });
    } else {
      next();
    }
  } catch (error) {
    console.log('error', error);
  }
};

// Update route - update a character by id
// @route    PUT characters/:id
// @desc     update a character
// @access   Private
const updateCharacter = async (req, res, next) => {
  try {
    const { chrId } = req.params;
    const { name, gender, class_type, age, hit_points, img } = req.body;
    const character = await Character.findById(chrId).populate('userId');
    console.log('PUT route update character by id:', character);
    // check if character was found
    if (character) {
      character.name = name;
      character.gender = gender;
      character.class_type = class_type;
      character.age = age;
      character.hit_points = hit_points;
      character.img = img;

      const updatedCharacter = await character.save();
      // res.status(203).render('character', {
      //   page_title: `${updatedCharacter.name} was just updated`,
      //   autheticated: true,
      //   character: updatedCharacter,
      // });
      res.status(203).json(updatedCharacter);
    } else {
      next();
    }
  } catch (error) {
    console.log('error', error);
  }
};

// @route    DELETE /api/characters/:chrId
// @desc     Delete character by id
// @access   Private
const deleteCharacter = async (req, res, next) => {
  try {
    const { chrId } = req.params;

    const character = await Character.findById(chrId).populate('userId');

    if (character) {
      await character.remove();
      // res.status(204).render('character', {
      //   page_title: `${character.name} was just deleted`,
      //   authenticated: true,
      //   character: character,
      // });
      res.status(204).json(character);
    } else {
      next();
    }
  } catch (error) {
    console.log('error', error);
  }
};

module.exports = {
  getCharacters,
  getCharacterById,
  createNewCharacter,
  updateCharacter,
  deleteCharacter,
};
