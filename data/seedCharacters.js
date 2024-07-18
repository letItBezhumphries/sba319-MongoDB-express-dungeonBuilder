const fs = require('fs');
const { faker } = require('@faker-js/faker');
const users = require('./users');

const { characterClasses } = require('./selects');

const defaultAbilityScoresArray = [15, 14, 13, 12, 10, 8];

function roll4ForAbility(characterObj, ability) {
  let rolls = [];

  let count = 0;
  while (count < 5) {
    let currentRoll = faker.number.int({ min: 0, max: 6 });
    rolls.push(currentRoll);
    count++;
  }

  console.log('rolls', rolls);
  let score = rolls.sort((a, b) => a - b);

  characterObj[ability] = score;
}

// modified users array to return shape needed for characters which at moment will use the user avatar for the img
const createMockCharacters = function (users) {
  let characters = [];

  // iterate over the users array
  let userIds = users.map((user) => {
    return {
      userId: user.id,
    };
  });

  userIds.forEach((user, index) => {
    let charactersCreatedTotal = faker.number.int({ min: 1, max: 3 });

    while (charactersCreatedTotal > 0) {
      let tmpIdx = faker.number.int({
        min: 0,
        max: characterClasses.length - 1,
      });
      let randomClass = characterClasses[tmpIdx].index;
      console.log('characterClasses[index]:', randomClass);
      characters.push({
        id: faker.string.uuid().split('-').join(''),
        img: faker.image.urlLoremFlickr({ category: randomClass }),
        userId: user.userId,
        name: faker.person.firstName() + ' ' + faker.person.lastName(),
        gender: index % 2 !== 0 ? faker.person.sex() : faker.person.gender(),
        class_type: randomClass,
        age: faker.number.int({ min: 15, max: 160 }),
        hit_points: faker.number.int({ min: 12, max: 34 }),
      });
      charactersCreatedTotal--;
    }
  });

  return characters;
};

const characters = createMockCharacters(users);

fs.writeFileSync(
  './data/characters.js',
  'const characters = ' +
    JSON.stringify(characters) +
    '\n\nmodule.exports = characters;',
  (err) => {
    if (err) {
      console.error('Error occured');
    }
  }
);
