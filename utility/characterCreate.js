const { faker } = require('@faker-js/faker');

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

function calculateArmorClassRating() {}
