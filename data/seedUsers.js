const fs = require('fs');
const { faker } = require('@faker-js/faker');

const userCount = 10;

function createRandomUsers(count) {
  let users = [];

  while (count > 0) {
    users.push({
      id: faker.string.uuid().split('-').join(''),
      name: faker.person.fullName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
    });

    count--;
  }
  return users;
}

const createdUsersData = createRandomUsers(userCount);

fs.writeFileSync(
  './data/users.js',
  'const users = ' +
    JSON.stringify(createdUsersData) +
    '\n\nmodule.exports = users;',
  (err) => {
    if (err) {
      console.error('Error occured');
    }
  }
);
