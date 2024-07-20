const { faker } = require('@faker-js/faker');
// need to require in any auth middleware

/* models */
const User = require('../models/User');
const Character = require('../models/Character');
const Monster = require('../models/Monster');
const Dungeon = require('../models/Dungeon');

// @route    GET /api/users
// @desc     get all users
// @access   Public
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});

    console.log('GET all users in user controller:', users);
    if (users) {
      res.status(200).render('users', {
        page_title: 'Users',
        url: req.url,
        users: users,
      });
    } else {
      next();
    }
  } catch (error) {
    console.error('error', error);
  }
};

// @route    GET /api/users/profile/:id
// @desc     get users profile by id
// @access   Public
const getUserById = async (req, res, next) => {
  try {
    console.log('in GET profile by id:', id);
    let { id } = req.params;
    const user = await User.findById(id).select('-password');
    console.log('in GET user by id:', user);
    // get all the characters the user has created utilizing the userId on each character
    let usersCharacters = await Character.find({ userId: id });
    console.log('in GET user by id -> characters by user:', usersCharacters);
    let usersDungeons = await Dungeon.find({ userId: id });
    console.log('in GET user by id -> dungeons by user:', usersDungeons);
    if (user) {
      // res.status(200).json(user[0]);
      res.status(200).render('users', {
        page_title: `${user.username}'s Profile`,
        users: {
          ...user,
          characters: usersCharacters,
          dungeons: usersDungeons,
        },
        authenticated: true,
        // characters: usersCharacters,
        // dungeons: usersDungeons,
      });
    } else {
      next();
    }
  } catch (error) {
    console.error('error', error);
  }
};

// @route    POST /api/users
// @desc     creates a new user
// @access   should be private
const createNewUser = async (req, res, next) => {
  try {
    const { name, username, email, password, avatar } = req.body;

    const newUser = new User({
      name: name,
      username: username,
      email: email,
      avatar: faker.image.avatar(),
      password: password,
    });

    const createdUser = newUser.save();

    if (createdUser) {
      res.status(201).render('user', {
        page_title: `${createdUser.username}'s Profile`,
        user: {
          username: newUser.username,
          email: newUser.email,
          avatar: newUser.avatar,
        },
        authenticated: true,
      });
    } else {
      next();
    }
  } catch (error) {
    console.error('error', error);
  }
};

// Update route - update a user by id
// @route    PUT api/users/:id
// @desc     update a users username or password
// @access   Private
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    // update user
    if (user) {
      user.name = req.body.name || user.name;
      user.username = req.body.username || user.username;
      user.avatar = req.body.avatar || user.avatar;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();

      res.status(203).render('user', {
        page_title: `${updatedUser.username} your profile has been updated!`,
        users: user,
        authenticated: true,
      });
    } else {
      next();
    }
  } catch (error) {
    console.error('error', error);
  }
};

// Delete route - delete a user by id
// @route    DELETE /api/users/:id
// @desc     Delete user and characters and dungeons
// @access   Private
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const usersCharacters = await Character.find({ userId: id });
    const usersDungeons = await Dungeon.find({ userId: id });

    if (user) {
      await user.remove();

      await Character.deleteMany(usersCharacters);
      await Dungeon.deleteMany(usersDungeons);

      // res.json({ message: `user with id: ${id} has been removed` });
      res.status(203).render('users', {
        page_title: `user with ${user.username}'s profile has been deleted!`,
        users: user,
        authenticated: true,
      });
    } else {
      next();
    }
  } catch (error) {
    console.error('error', error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
};
