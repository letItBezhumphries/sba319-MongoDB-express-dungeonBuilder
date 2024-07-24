const { faker } = require('@faker-js/faker');
const fs = require('fs');
const axios = require('axios');

const DD5CLASSESURL = 'https://www.dnd5eapi.co/api/classes';
const DD5RACESURL = 'https://www.dnd5eapi.co/api/races';
const OPEN5ECLASSURL = 'https://api.open5e.com/classes';
const OPEN5ERACEURL = 'https://api.open5e.com/races';

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

// adjustCharacterOptionsForSelectedClass({}, 'barbarian');

// const discoverAPIendpoints = async (endpoint) => {
//   try {
//     const { data } = await axios.get(APIURL + endpoint);

//     const apiEndpoints = [];
//     const apiKeys = [];

//     for (key in data) {
//       apiKeys.push(key);
//       apiEndpoints.push(data[key]);
//     }
//     console.log('classResponse keys:', apiKeys, 'endpoints', apiEndpoints);
//   } catch (error) {
//     console.error('error', error.message);
//   }
// };

// // discoverAPIendpoints('/api/classes');

const getCharacterAbilityBonus = async (charObj, abilitiesArray) => {
  abilitiesArray.forEach((ability) => {
    const { ability_score, bonus } = ability;
    // console.log('ability_score:', ability_score, 'bonus:', bonus);
    if (ability_score.index === 'dex') {
      charObj.dexterity = bonus;
    }
    if (ability_score.index === 'con') {
      charObj.constitution = bonus;
    }
    if (ability_score.index === 'int') {
      charObj.intelligence = bonus;
    }
    if (ability_score.index === 'wis') {
      charObj.wisdom = bonus;
    }
    if (ability_score.index === 'str') {
      charObj.strength = bonus;
    }
    if (ability_score.index === 'cha') {
      charObj.charisma = bonus;
    }
  });
  // console.log('charObj in getAbilityBonus:', charObj);
  return charObj;
};

const getCharacterLanguages = function (languagesArray) {
  let languages = [];
  languagesArray.forEach((lang) => {
    languages.push(lang.index);
  });
  return languages;
};

const getStartingProficiency = async (proficiency) => {
  try {
    const res = await axios(APIURL + proficiency.url);
    // console.log('res:', res.data);
  } catch (error) {
    console.log('error:', error);
  }
};

const getRaceTraitDescription = async (trait) => {
  try {
    const res = await axios.get(APIURL + trait.url);
    return res.data.desc;
  } catch (error) {
    console.log('error:', error);
  }
};

const setRandomStartingAge = function (ageDescription, race) {
  // the following regex matches any successive numbers in description string
  let ageRange = ageDescription.match(/-?\d(?:[,\d]*\.\d+|[,\d]*)/g);

  if (race === 'human' || race === 'tiefling' || 'dragonborn') {
    return faker.number.int({ min: 16, max: 80 });
  } else {
    return faker.number.int({
      min: ageRange[0],
      max: race === 'halfling' ? 250 : ageRange[1],
    });
  }
};

const getStartingProficiencies = (proficiencies) => {
  let charProficiencies = [];

  proficiencies.forEach((prof) => {
    getStartingProficiency(prof);
  });

  return charProficiencies;
};

const setStartingProficiencyFromOption = async (charObj, optionsObj) => {
  try {
    const {
      desc,
      choose,
      type,
      from: { option_set_type, options },
    } = optionsObj;

    let count = choose;
    while (count > 0) {
      let randomOptionIndex = faker.number.int({
        min: 0,
        max: options.length,
      });
      let randomOption = options[randomOptionIndex];
      charObj.proficiencies.push(randomOption.item);
      count--;
    }
  } catch (error) {
    console.log('error:', error);
  }
};

const addSelectedProficiencyChoice = async (charObj, proficiency) => {
  try {
    console.log('proficiency;', proficiency);
    const proficiencyResponse = await axios.get(APIURL + proficiency.item.url);
    charObj.proficiencies.push();
    console.log('proficiencyResponse:', proficiencyResponse.data);
  } catch (error) {
    console.log('error:', error);
  }
};

const selectRandomProficiencyChoices = async (charObj, optionsObj) => {
  try {
    const { desc, choose, type, from } = optionsObj;
    if (from.option_set_type === 'options_array') {
      let options = from.options.slice();

      let count = choose;
      while (count > 0) {
        // get a randomIndex from options
        let randomOptionIndex = faker.number.int({
          min: 0,
          max: options.length,
        });
        // store the random option choice
        let randomOption = options[randomOptionIndex];

        // check if the randomOption exists on the charObj.proficiencies array
        // charObj.proficiencies.forEach((prof) => {
        //   console.log('proficiency;', prof);
        // });
        console.log('charObj:', charObj);
        console.log('randomOption:', randomOption.item);

        // push the random option choice into the charObj.proficiencies array

        // addSelectedProficiencyChoice(charObj, randomOption);
        // console.log(
        //   'randomOption:',
        //   randomOption.item,
        //   'options:',
        //   options.length,
        //   'index:',
        //   randomOptionIndex
        // );
        // splice away the random option
        options.splice(randomOptionIndex, 1);
        count--;
      }
    }
  } catch (error) {
    console.log('error:', error);
  }
};

const modifyCharacterForSelectedRace = async (charObj, race, subrace) => {
  try {
    const { data } = await axios.get(DD5RACESURL + `/${race}`);
    const open5eRace = await axios.get(OPEN5ERACEURL + `/${race}`);

    const dataKeys = Object.keys(data);
    // console.log('DD5 race response data', data);
    // console.log('open5erace response:', open5eRace.data);

    charObj.race = data.index;
    charObj.speed = { walk: data.speed };
    charObj.age = setRandomStartingAge(data.age, race);
    charObj.size = data.size;
    charObj.traits = data.traits;
    charObj.proficiencies = data.starting_proficiencies;
    charObj.languages = getCharacterLanguages(data.languages);
    if (dataKeys.indexOf('starting_proficiency_options') !== -1) {
      // console.log('it found the option');
      setStartingProficiencyFromOption(
        charObj,
        data.starting_proficiency_options
      );
    }

    getCharacterAbilityBonus(charObj, data.ability_bonuses);
    console.log('charObj at end:', charObj);
    return charObj;
  } catch (error) {
    console.error('error', error);
  }
};

const joe = modifyCharacterForSelectedRace({ name: 'joe' }, 'elf');

/* Function that modifies the character object  based on the selected class */
const modifyCharacterForSelectedClass = async (
  charObj,
  classType,
  subclass
) => {
  try {
    const { data } = await axios.get(DD5CLASSESURL + `/${classType}`);

    const dataKeys = Object.keys(data);

    if (dataKeys.indexOf('proficiency_choices') !== -1) {
      console.log(
        'it found the option',
        data.proficiency_choices[0].from.options
      );
      selectRandomProficiencyChoices(charObj, data.proficiency_choices[0]);
    }

    // const open5eRace = await axios.get(OPEN5ERACEURL + `/${race}`);
    // console.log('data:', data);
    // console.log('charObj at end:', charObj);
  } catch (error) {
    console.error('error', error);
  }
};

// modifyCharacterForSelectedClass(joe, 'barbarian');
