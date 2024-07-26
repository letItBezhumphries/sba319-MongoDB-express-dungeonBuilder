const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generateToken = require('../utility/generateToken');
require('dotenv').config();
const { validationResult } = require('express-validator');

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
      // res.status(200).render('users', {
      //   page_title: 'Users',
      //   url: req.url,
      //   users: users,
      // });
      res.status(200).json(users);
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
      res.status(200).json({
        ...user,
        characters: usersCharacters,
        dungeons: usersDungeons,
      });
      // res.status(200).render('users', {
      //   page_title: `${user.username}'s Profile`,
      //   users: {
      //     ...user,
      //     characters: usersCharacters,
      //     dungeons: usersDungeons,
      //   },
      //   authenticated: true,
      //   // characters: usersCharacters,
      //   // dungeons: usersDungeons,
      // });
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
const createNewUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, username, email, password } = req.body;

  try {
    // make sure user doesn't already exist
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    // create and store default avatar for the new user
    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm',
    });

    // create a new user instance
    const newUser = new User({
      name: name,
      username: username,
      email: email,
      avatar: avatar,
      password: password,
    });

    // generate and store a new salt
    const salt = await bcrypt.genSalt(10);

    // assign the newUser.password to the result of passing the password along with the salt to brcypt.hash method
    newUser.password = await bcrypt.hash(password, salt);

    // save newUser to the db
    const createdUser = newUser.save();

    // create a payload to send
    const payload = {
      user: {
        id: newUser.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

    // if (createdUser) {
    //   res.status(201).render('user', {
    //     page_title: `${createdUser.username}'s Profile`,
    //     user: {
    //       username: newUser.username,
    //       email: newUser.email,
    //       avatar: newUser.avatar,
    //     },
    //     authenticated: true,
    //   });
    // } else {
    //   next();
    // }
  } catch (error) {
    console.error('error', error.message);
    res.status(500).send('Server error');
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
