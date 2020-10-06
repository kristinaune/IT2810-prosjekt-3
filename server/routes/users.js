/**
 * TODO: Make route for users
 */
const express = require('express');
const router = express.Router();

// Imports the User-model
const User = require('../models/User');

/**
 * @route   POST api/users
 * @desc    Register new user
 * @access  Public
 */
router.post('/', (req, res) => {
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

  // TODO: Make get requ est for user. Is it in the db? log in. If not: create
});

router.get('/user' , (req, res) => {
  User.findById(req.user.id).then((user) => res.json(user));
});

module.exports = router;
