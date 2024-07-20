const monsters = require('./monsterSeed');
const environments = require('./environments');
const users = require('./users');
const fs = require('fs');
const { faker } = require('@faker-js/faker');

const createMonsterList = function (count) {
  let monsterList = [];

  while (count > 0) {
    let randomMonsterIndex = faker.number.int({
      min: 0,
      max: monsters.length - 1,
    });
    monsterList.push(monsters[randomMonsterIndex]);
    count--;
  }

  return monsterList;
};

const createMonsterListFromInsertedMonsters = function (count, monstersArray) {
  let monsterList = [];

  while (count > 0) {
    let randomMonsterIndex = faker.number.int({
      min: 0,
      max: monstersArray.length - 1,
    });
    monsterList.push(monstersArray[randomMonsterIndex]._id);
    count--;
  }

  return monsterList;
};

const createDungeonForInsertedUser = function (user, insertedMonsters) {
  const randomEnvironmentsIndex = faker.number.int({
    min: 0,
    max: environments.length - 1,
  });

  const randomGridSize = faker.number.int({ min: 8, max: 20 });

  let randomMonsterCount = faker.number.int({
    min: 2,
    max: Math.floor(randomGridSize / 3),
  });

  const dungeonMonsters = createMonsterListFromInsertedMonsters(
    randomMonsterCount,
    insertedMonsters
  );

  return {
    userId: user._id,
    size: randomGridSize,
    dungeon_name: environments[randomEnvironmentsIndex],
    monsters: dungeonMonsters,
  };
};

// const createDefaultDungeonGrid = function (size, monsters, obstacles) {
//   let defaultGrid = new Array(size).fill(new Array(size).fill({}));
//   console.log('defaultGrid:', defaultGrid);

//   for (let i = 0; i < defaultGrid.length; i++) {

//     for (let j = 0; j < defaultGrid[i].length; j++) {

//     }
//   }
// };

const createDungeonForUser = function (user) {
  const randomEnvironmentsIndex = faker.number.int({
    min: 0,
    max: environments.length - 1,
  });

  const randomGridSize = faker.number.int({ min: 8, max: 20 });

  let randomMonsterCount = faker.number.int({
    min: 2,
    max: Math.floor(randomGridSize / 3),
  });

  const dungeonMonsters = createMonsterList(randomMonsterCount);

  return {
    id: faker.string.uuid().split('-').join(''), // this is the dungeons id
    userId: user.userId,
    size: randomGridSize,
    dungeon_name: environments[randomEnvironmentsIndex],
    monsters: dungeonMonsters,
  };
};

const createDungeonsForEachUser = function () {
  let dungeons = [];

  // iterate over the users array
  let userIds = users.map((user) => {
    return {
      userId: user.id,
    };
  });

  // for each user
  userIds.forEach((usr) => {
    let userCreatedDungeonCount = faker.number.int({ min: 1, max: 3 });

    while (userCreatedDungeonCount > 0) {
      dungeons.push(createDungeonForUser(usr));
      userCreatedDungeonCount--;
    }
  });

  return dungeons;
};

const dungeonsCreated = createDungeonsForEachUser();

fs.writeFileSync(
  './data/dungeons.js',
  'const dungeons = ' +
    JSON.stringify(dungeonsCreated) +
    '\n\nmodule.exports = dungeons;',
  (err) => {
    if (err) {
      console.error('Error occured');
    }
  }
);

module.exports = {
  createMonsterListFromInsertedMonsters,
  createDungeonForInsertedUser,
};
