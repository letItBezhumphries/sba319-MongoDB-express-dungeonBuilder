const axios = require('axios');
const fs = require('fs');
const API2URL = 'https://api.open5e.com/monsters/?limit=2487';
const API2BASEURL = 'https://api.open5e.com/monsters/';
const APIURL = 'https://www.dnd5eapi.co/api/monsters';
const APIBASEURL = 'https://www.dnd5eapi.co';

const monsters = require('./monsters2');

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
    './data/monsters2.js',
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
    // getEnvironmentsList(response.data.results);
    console.log('monsters response:', response.data.results);
    getMonstersWithImages(response.data.results, list);
  } catch (error) {
    console.log('error', error);
  }
};

// getMonsters(monstersList);
// getMonsters(monstersList);

console.log('monsters2:', monsters.length);
/**
 *
 * Below are functions I used to scrape only monsters that had images from both api's
 */

// const collectMonstersFromApi = async function (list) {
//   const monstersRes = await axios.get(APIBASEURL + '/api/monsters');

//   console.log('monstersRes:', monstersRes.data.results);

//   fs.writeFileSync(
//     './data/monstersAPIListFromDAndD.js',
//     'const monstersList = ' +
//       JSON.stringify(monstersRes.data.results) +
//       '\n\nmodule.exports = monstersList;',
//     (err) => {
//       if (err) {
//         console.error('Error occured');
//       }
//     }
//   );
// };

// const getMonsterListFrom5e = async function (monsters, list) {
//   try {
//     for (let i = 0; i < monsters.length; i++) {
//       let currentUrl = APIBASEURL + `${monsters[i].url}`;
//       let { data } = await axios.get(currentUrl);
//       list.push(data);
//     }

//     if (list.length > 0) {
//       fs.writeFileSync(
//         './data/finalD5Monsters.js',
//         'const d5Monsters = ' +
//           JSON.stringify(list) +
//           '\n\nmodule.exports = d5Monsters;',
//         (err) => {
//           if (err) {
//             console.error('Error occured');
//           }
//         }
//       );
//     }
//   } catch (error) {
//     console.log('error', error);
//   }
// };

// const dd5emonsters = getMonsterListFrom5e(monstersDDeList, monstersList);
// getMonsterListFrom5e(monstersDDeList, monstersList);

// console.log('list:', dd5emonsters);

// const getDD5eMonstersWithImages = function (monsters) {
//   let monstersWithImagesList = [];

//   monsters.forEach((monster) => {
//     if (monster.image) {
//       monstersWithImagesList.push(monster);
//     }
//   });

//   fs.writeFileSync(
//     './data/finalD5MonstersWithImages.js',
//     'const d5Monsters = ' +
//       JSON.stringify(monstersWithImagesList) +
//       '\n\nmodule.exports = d5Monsters;',
//     (err) => {
//       if (err) {
//         console.error('Error occured');
//       }
//     }
//   );
// };

// getDD5eMonstersWithImages(monstersDDeList);

// console.log('monsters with images:', monsters.length);

// const formatD5MonsterObjects = function (monsters, d5Monsters) {
//   d5Monsters.forEach((monster) => {
//     let formattedMonster = {
//       slug: monster.index,
//       desc: monster.desc,
//       name: monster.name,
//       size: monster.size,
//       type: monster.type,
//       alignment: monster.alignment,
//       armor_class: monster.armor_class[0].value,
//       armor_desc: monster.armor_class[0].type,
//       hit_points: monster.hit_points,
//       hit_dice: monster.hit_dice,
//       speed: monster.speed,
//       strength: monster.strength,
//       dexterity: monster.dexterity,
//       constitution: monster.constitution,
//       intelligence: monster.intelligence,
//       wisdom: monster.wisdom,
//       charisma: monster.charisma,
//       perception: monster.perception || null,
//       skills: {},
//       senses: monster.senses,
//       languages: monster.languages,
//       challenge_rating: monster.challenge_rating,
//       actions: monster.actions,
//       bonus_actions: monster.bonus_actions || [],
//       reactions: monster.reactions || [],
//       legendary_desc: monster.legendary_desc || '',
//       legendary_actions: monster.legendary_actions || [],
//       special_abilities: monster.special_abilities || [],
//       spell_list: monster.spell_list || [],
//       environments: monster.environments || '',
//       img_main: monster.image,
//     };

//     monster.proficiencies.forEach((prof) => {
//       let profType = prof.proficiency.name.split(':')[0];
//       let profName = prof.proficiency.name.split(':')[1].toLowerCase();
//       if (profType.toLowerCase() === 'skll') {
//         formattedMonster.skills[profName] = prof.proficiency.value;
//       }
//     });

//     monsters.push(formattedMonster);
//   });

//   console.log('monsters length', monsters.length);

//   if (monsters.length > 11) {
//     fs.writeFileSync(
//       './data/finalD5MonstersWithImages2.js',
//       'const monsters = ' +
//         JSON.stringify(monsters) +
//         '\n\nmodule.exports = monsters;',
//       (err) => {
//         if (err) {
//           console.error('Error occured');
//         }
//       }
//     );
//   }
// };

// formatD5MonsterObjects(monsters, d5Monsters);

// const createMonsterSeed = function (monsters, otherFields) {
//   // if (!otherFields) {
//   //   monsters.map((monster) => {
//   //     return {
//   //       slug: monster.slug,
//   //       desc: monster.desc,
//   //       name: monster.name,
//   //       size: monster.size,
//   //       type: monster.type,
//   //       alignment: monster.alignment,
//   //       img_main: monster.img_main,
//   //       challenge_rating: monster.challenge_rating,
//   //     };
//   //   });
//   // }
//   let formattedMonsters = [];

//   monsters.forEach((monster) => {
//     let imgUrl;
//     let challengeRating;
//     if (monster.img_main.startsWith('http:') === false) {
//       imgUrl = APIBASEURL + monster.img_main;
//     } else {
//       imgUrl = monster.img_main;
//     }

//     if (typeof monster.challenge_rating === 'string') {
//       challengeRating = parseInt(monster.challenge_rating);
//     } else {
//       challengeRating = monster.challenge_rating;
//     }

//     formattedMonsters.push({
//       slug: monster.slug,
//       desc: monster.desc,
//       name: monster.name,
//       size: monster.size,
//       type: monster.type,
//       alignment: monster.alignment,
//       img_main: imgUrl,
//       challenge_rating: challengeRating,
//     });
//   });

//   fs.writeFileSync(
//     './data/monsterSeed.js',
//     'const monsters = ' +
//       JSON.stringify(formattedMonsters) +
//       '\n\nmodule.exports = monsters;',
//     (err) => {
//       if (err) {
//         console.error('Error occured');
//       }
//     }
//   );
// };

// createMonsterSeed(d5Monsters);
