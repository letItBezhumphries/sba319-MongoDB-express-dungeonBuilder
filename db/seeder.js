const { faker } = require('@faker-js/faker');
require('dotenv').config();
// require in the connect db function
const connectDB = require('./index');

// require in each of the necessary data files for each of the models
// const characters = require('../data/characters');
// const dungeons = require('../data/dungeons');
const monsters = require('../data/monsterSeed');
const users = require('../data/users');
const { characterClasses } = require('../data/selects');

// bring in the mongoose models
const Character = require('../models/Character');
const Dungeon = require('../models/Dungeon');
const User = require('../models/User');
const Monster = require('../models/Monster');

// seeding functions brought in to help with creating dungeons
const { createDungeonForInsertedUser } = require('../data/seedDungeons');

// connect the db
connectDB();

// create a function that imports all the data into the corresponding collection and uses insertMany
const insertDocuments = async function () {
  try {
    await Monster.deleteMany();
    await User.deleteMany();
    await Character.deleteMany();
    await Dungeon.deleteMany();

    // store our inserted monsters and users in variables in order to add their ids to the Dungeon and Character Models
    const insertedMonsters = await Monster.insertMany(monsters);
    console.log('monsters:', insertedMonsters);
    const insertedUsers = await User.insertMany(users);

    let charactersToInsert = [];
    let dungeonsToInsert = [];

    // iterate over each user inserted into db
    insertedUsers.forEach((user, index) => {
      // store counts for how many characters and dungeons to randomly create for each user
      let charactersCreatedTotal = faker.number.int({ min: 1, max: 3 });
      let dungeonsCreatedCount = faker.number.int({ min: 1, max: 3 });

      // loop over the character count and push a created character to the charactersToInsert array
      while (charactersCreatedTotal > 0) {
        let tmpIdx = faker.number.int({
          min: 0,
          max: characterClasses.length - 1,
        });
        let randomClass = characterClasses[tmpIdx].index;

        charactersToInsert.push({
          img: faker.image.urlLoremFlickr({ category: randomClass }),
          userId: user._id,
          name: faker.person.firstName() + ' ' + faker.person.lastName(),
          gender: index % 2 !== 0 ? faker.person.sex() : faker.person.gender(),
          class_type: randomClass,
          age: faker.number.int({ min: 15, max: 160 }),
          hit_points: faker.number.int({ min: 12, max: 34 }),
        });
        charactersCreatedTotal--;
      }

      // loop over the dungeons to create count and push a new dungeon into the dungeonsToInsert array
      while (dungeonsCreatedCount > 0) {
        dungeonsToInsert.push(
          createDungeonForInsertedUser(user, insertedMonsters)
        );
        dungeonsCreatedCount--;
      }
    });

    const insertedCharacters = await Character.insertMany(charactersToInsert);
    const insertedDungeons = await Dungeon.insertMany(dungeonsToInsert);

    // console.log('insertedMonsters:', insertedMonsters);
    // console.log('insertedUsers:', insertedUsers);
    // console.log('insertedCharacters:', insertedCharacters);
    // console.log('insertedDungeons:', insertedDungeons);
    console.log('Data inserted!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

//create a function that destroys all the collections from mongodb atlas
const destroyDocuments = async () => {
  try {
    await Dungeon.deleteMany();
    await Character.deleteMany();
    await Monster.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

// check to see if the process.argv flag was '-d' or not, if '-d' run the destroy function otherwise run the import command
if (process.argv[2] === '-d') {
  destroyDocuments();
} else {
  insertDocuments();
}
