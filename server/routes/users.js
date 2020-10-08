/**
 * TODO: Make route for users
 */
const express = require('express');
const router = express.Router();

// Imports the User-model
const User = require('../models/User');

/**
 * @route   POST api/users/register
 * @desc    Register new user
 * @access  Public
 */
router.post('/register', (req, res) => {
  const { name, email } = req.body;

  //Validate the inputs
  if (!name || !email) {
    return res.status(400).json({ msg: 'Enter both name og email' });
  }
  // Check if the name is registred
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: 'User already exists' });
    const newUser = new User({
      name: name,
      email: email,
    });
    newUser.save().then((user) => {
      res.json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    });
  });
});

/**
 * @route   POST api/users/login
 * @desc    Login user
 * @access  Public
 */
router.post('/login', (req, res) => {
  const { email } = req.body;

  //Validate the inputs
  if (!email) {
    return res.status(400).json({ msg: 'Enter email' });
  }
  // Check if the name is registred
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: 'User does not exist' });
    res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  });
});

router.get('/user', (req, res) => {
  User.find({ name: req.name }).then((user) => res.json(user));
});

router.get('/', (req, res) => {
  User.find().then((user) => res.json(user));
});
module.exports = router;
