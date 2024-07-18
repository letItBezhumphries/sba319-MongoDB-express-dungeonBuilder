const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');
// need to require in any auth middleware

/* pre-db users data */
const users = require('../data/users');
const dungeons = require('../data/dungeons');
const characters = require('../data/characters');

// @route    GET /api/users
// @desc     get all users
// @access   Public
router.get('/', (req, res) => {
  console.log('GET all users:', users);
  res.status(200).render('users', {
    page_title: 'Users',
    url: req.url,
    users: users,
  });
});

// @route    GET /api/users/profile/:id
// @desc     get users profile by id
// @access   Public
router.get('/profile/:id', (req, res) => {
  let { id } = req.params;
  console.log('in GET profile by id:', id);
  // get the user by id
  const user = users.filter((user) => user.id === id)[0];

  console.log('in GET user by id:', user);

  // get all the characters the user has created utilizing the userId on each character
  let usersCharacters = characters.filter((ch, i) => ch.userId === id);

  console.log('in GET user by id -> characters by user:', usersCharacters);

  let usersDungeons = dungeons.filter((dun, i) => dun.userId === id);

  console.log('in GET user by id -> dungeons by user:', usersDungeons);
  if (user) {
    // res.status(200).json(user[0]);
    res.status(200).render('users', {
      page_title: `${user.username}'s Profile`,
      users: { ...user, characters: usersCharacters, dungeons: usersDungeons },
      authenticated: true,
      // characters: usersCharacters,
      // dungeons: usersDungeons,
    });
  } else {
    throw new Error({
      message: 'No user with this id exists',
    });
  }
});

// @route    POST /api/users
// @desc     creates a new user
// @access   should be private
router.post('/', (req, res, next) => {
  console.log('req.body:', req.body);

  const { username, email, password } = req.body;

  let newUser = {
    id: faker.string.uuid().split('-').join(''),
    username: username,
    email: email,
    avatar: faker.image.avatar(),
    password: password,
  };

  users.push(newUser);

  res.status(201).render('users', {
    page_title: `Welcome ${newUser.username}`,
    users: newUser,
    authenticated: true,
  });
  // res.status(201).redirect(`/users/:${newUser.id}`);
});

// Update route - update a user by id
// @route    PUT api/users/:id
// @desc     update a users username or password
// @access   Private
router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  function isTarget(user, index) {
    if (user.id === id) {
      for (const key in req.body) {
        users[index][key] = req.body[key];
      }
      return true;
    }
  }

  const user = users.find((user, i) => {
    return isTarget(user, i);
  });

  // if (user) res.status(203).json(user);
  // else next();
  if (user) {
    res.status(203).render('users', {
      page_title: `${user.username} your profile has been updated!`,
      users: user,
      authenticated: true,
    });
  } else {
    next();
  }
});

// Delete route - delete a user by id
// @route    DELETE /api/users/:id
// @desc     Delete user and characters and dungeons
// @access   Private
router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  // testing function to pass to user find
  function isTargetUser(user, index, users) {
    if (user.id === id) {
      users.splice(index, 1);
      return true;
    }
  }

  //testing function to pass and find the first character and dungeon with userId
  function isUserResource(resource, index, resourceArr, count) {
    if (resource.userId === id) {
      resourceArr.splice(index, count);
      return true;
    }
  }

  const user = users.find((user, i, users) => {
    return isTargetUser(user, i, users);
  });

  const usersCharactersCount = characters.filter((ch) => ch.userId === id);
  const usersDungeonsCount = dungeons.filter((dun) => dun.userId === id);

  // to splice away the characters with userId equal to id
  characters.find((ch, i, characters) => {
    return isUserResource(ch, i, characters, usersCharactersCount);
  });

  // to splice away the dungeons with userId equal to id
  dungeons.find((d, i, dungeons) => {
    return isUserResource(d, i, dungeons, usersDungeonsCount);
  });

  // need to remove dungeons with userId
  // if (user) res.status(204).json(user);
  // else next();
  console.log('in DELETE user:', user, characters);
  if (user) {
    res.status(203).render('users', {
      page_title: `${user.username}'s profile has been deleted!`,
      users: user,
      authenticated: true,
    });
  } else {
    next();
  }
});

module.exports = router;
