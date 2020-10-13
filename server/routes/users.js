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
    // If yes, return error
    if (user) return res.status(400).json({ msg: 'User already exists' });
    // If no, create new user
    const newUser = new User({
      name: name,
      email: email,
      movieList: [],
    });
    newUser.save().then((user) => {
      res.json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          movieList: user.movieList,
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
        movieList: user.movieList,
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

/**
 * @route   POST api/users/addMovie
 * @desc    Add movie to My List
 * @access  Public
 */
router.post('/addMovie', (req, res) => {
  const { email, imdbId } = req.body;

  //Validate the inputs
  if (!(email && imdbId)) {
    return res.status(400).json({ msg: 'User email or imdbId missing' });
  }

  // Add movie to list
  User.findOneAndUpdate(
    { email },
    { $addToSet: { movieList: imdbId } },
    { new: true } // Return new object insted of original
  )
    .then((user) => {
      res.status(200).json({
        user: user,
      });
    })
    .catch((error) => {
      console.log('Error: ' + error);
      res.status(400).json({
        msg: 'Error: ' + error,
      });
    });
});

/**
 * @route   POST api/users/deleteMovie
 * @desc    Deletes movie from My List
 * @access  Public
 */
router.delete('/deleteMovie', (req, res) => {
  const { email, imdbId } = req.body;

  //Validate the inputs
  if (!(email && imdbId)) {
    return res.status(400).json({ msg: 'User email or imdbId missing' });
  }
  // Check if the user exist
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: 'User does not exist' });
  });

  // Delete movie from list
  User.findOneAndUpdate(
    { email },
    { $pull: { movieList: imdbId } },
    { new: true } // Return new object insted of original
  )
    .then((user) => {
      res.status(200).json({
        user: user,
      });
    })
    .catch((error) => {
      console.log('Error: ' + error);
      res.status(400).json({
        msg: 'Error: ' + error,
      });
    });
});

module.exports = router;
