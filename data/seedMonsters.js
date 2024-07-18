const axios = require('axios');
const fs = require('fs');
const API2URL = 'https://api.open5e.com/monsters/?limit=2000';
const API2BASEURL = 'https://api.open5e.com/monsters/';
const monsters = require('./monsters');

axios.default.defaults.headers.common = {
  Accept: 'application/json',
};

const monstersList = [];

const getMonstersWithImages = function (monsters, list) {
  monsters.forEach((monster) => {
    if (
      monster.img_main !== null &&
      monster.img_main !== 'http://api.open5e.com/'
    ) {
      console.log('true', monster);
      list.push(monster);
    }
  });

  fs.writeFileSync(
    './data/monsters.js',
    'const monsters = ' +
      JSON.stringify(list) +
      '\n\nmodule.exports = monsters;',
    (err) => {
      if (err) {
        console.error('Error occured');
      }
    }
  );
};

const getEnvironmentsList = function (monsters) {
  let environments = [];

  monsters.forEach((monster) => {
    if (monster.environments.length > 0) {
      monster.environments.forEach((env) => {
        // if it doesn't exist on the array then add it
        if (environments.indexOf(env) === -1) {
          environments.push(env);
        }
      });
    }
  });

  fs.writeFileSync(
    './data/environments.js',
    'const environments = ' +
      JSON.stringify(environments) +
      '\n\nmodule.exports = environments;',
    (err) => {
      if (err) {
        console.error('Error occured');
      }
    }
  );
};

// getEnvironmentsList(monsters);

const getMonsters = async function (list) {
  try {
    const response = await axios.get(API2URL);
    getEnvironmentsList(response.data.results);
    // console.log('monsters response:', response.data.results);
    // getMonstersWithImages(response.data.results, list);
  } catch (error) {
    console.log('error', error);
  }
};

// getMonsters(monstersList);
getMonsters();
