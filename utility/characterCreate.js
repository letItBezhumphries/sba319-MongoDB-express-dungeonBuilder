const { faker } = require('@faker-js/faker');
const axios = require('axios');

const CLASSESURL = 'https://www.dnd5eapi.co/api/classes';
const RACESURL = 'https://www.dnd5eapi.co/api/races';
const APIURL = 'https://www.dnd5eapi.co';
const API2URL = 'https://api.open5e.com/monsters/?limit=100';

axios.default.defaults.headers.common = {
  Accept: 'application/json',
};

axios.default.defaults.baseURL = 'https://www.dnd5eapi.co';

const abilityKeys = [
  'strength',
  'dexterity',
  'constitution',
  'intelligence',
  'wisdom',
  'charisma',
];
const defaultAbilityScoresArray = [15, 14, 13, 12, 10, 8];

/* This function generates random scores for each ability not very flexible and it will be used in the seedCharacters file */
function roll4ForAbility(characterObj) {
  let currentIndex = 0;
  let rolls = [];
  while (currentIndex < abilityKeys.length) {
    let currentAbility = abilityKeys[currentIndex];

    let count = 0;
    while (count < 4) {
      let currentRoll = faker.number.int({ min: 0, max: 6 });
      rolls.push(currentRoll);
      count++;
    }
    console.log('rolls', rolls);

    let score = rolls
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, b) => a + b, 0);

    console.log('rolls', score);
    // could push the score to an array of roll scores up to 6 in length and offer the user the choice to assign the roll scores to the abilities they choose
    characterObj[currentAbility] = score;
    rolls = [];
    currentIndex++;
  }

  console.log('characterObj:', characterObj);
  return characterObj;
}

/* For Frontend possibly */
const generateRollScoresArray = function () {
  let rollScores = [];
  let rolls = [];
  let currentIndex = 0;
  while (currentIndex < abilityKeys.length) {
    let count = 0;
    while (count < 4) {
      let currentRoll = faker.number.int({ min: 0, max: 6 });
      rolls.push(currentRoll);
      count++;
    }

    let score = rolls
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, b) => a + b, 0);

    rollScores.push(score);
    rolls = [];
    currentIndex++;
  }
  console.log('rollScores returned:', rollScores);
  return rollScores;
};

function calculateHitPoints(characterObj) {
  // check character class
  // add your characters constitution modifier + character.hitdie
}

const adjustCharacterOptionsForSelectedClass = async (character, classType) => {
  try {
    const { data } = await axios.get(APIURL + `/api/classes/${classType}`);
    console.log('the data for the class:', data);

    for (option in data) {
    }
  } catch (error) {
    console.error('error', error.message);
  }
};

adjustCharacterOptionsForSelectedClass({}, 'barbarian');

const discoverAPIendpoints = async (endpoint) => {
  try {
    const { data } = await axios.get(APIURL + endpoint);

    const apiEndpoints = [];
    const apiKeys = [];

    for (key in data) {
      apiKeys.push(key);
      apiEndpoints.push(data[key]);
    }
    console.log('classResponse keys:', apiKeys, 'endpoints', apiEndpoints);
  } catch (error) {
    console.error('error', error.message);
  }
};

// discoverAPIendpoints('/api/classes');
