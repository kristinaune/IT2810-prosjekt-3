import { HttpRequest, HttpResponse, UserDoc } from '../types';
import express from 'express';
import User from '../models/User';

const router = express.Router();

/**
 * @route   GET api/users/:email
 * @desc    Get one user
 * @param   req.body.email User email
 * @access  Public
 */
router.get('/:email', (req: HttpRequest, res: HttpResponse) => {
  const email = req.params.email;
  if (!email) {
    return res.status(400).json({ msg: 'User email missing' });
  }
  User.findOne({ email: email }).then((user: UserDoc | null) => {
    if (!user) return res.status(400).json({ msg: 'User does not exist' });
    res.status(200).json({
      user: {
        uid: user.uid,
        name: user.name,
        email: user.email,
        movieList: user.movieList,
      },
    });
  });
});
/**
 * @route   GET api/users/
 * @desc    Get all users
 * @access  Public
 */
router.get('/', (req: HttpRequest, res: HttpResponse) => {
  User.find()
    .then((user) => res.json(user))
    .catch((e) => res.status(404).json({ success: false }));
});

/**
 * @route   POST api/users/register
 * @desc    Register new user
 * @param   req.body.email User email
 * @param   req.body.name Name of user
 * @access  Public
 */
router.post('/register', (req: HttpRequest, res: HttpResponse) => {
  const { email, name } = req.body;

  //Validate the inputs
  if (!name || !email) {
    return res.status(400).json({ msg: 'Enter both name and email' });
  }
  // Check if the name is registred
  User.findOne({ email: email }).then((user: UserDoc | null) => {
    // If yes, return error
    if (user) return res.status(400).json({ msg: 'User already exists' });
    // If no, create new user
    const newUser = new User({
      name: name,
      email: email,
      movieList: [],
    });
    newUser.save().then((user: UserDoc) => {
      res.json({
        user: {
          uid: user.uid,
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
 * @param   req.body.email User email
 * @access  Public
 */
router.post('/login', (req: HttpRequest, res: HttpResponse) => {
  const { email } = req.body;

  //Validate the inputs
  if (!email) {
    return res.status(400).json({ msg: 'Enter email' });
  }

  // Check if the name is registred
  User.findOne({ email: email }).then((user: UserDoc | null) => {
    if (!user) return res.status(400).json({ msg: 'User does not exist' });
    res.status(200).json({
      user: {
        uid: user.uid,
        name: user.name,
        email: user.email,
        movieList: user.movieList,
      },
    });
  });
});

/**
 * @route DELETE api/deleteUser/:email
 * @desc Deletes a user from database, used to clean up after registration testing
 * @param email Email of user to be deleted
 * @access Public
 */
router.delete('/deleteUser/:email', (req: HttpRequest, res: HttpResponse) => {
  User.findOneAndDelete({ email: req.params.email })
    .then((user: UserDoc | null) => {
      // Check if user exists
      if (!user)
        return res.status(400).json({ msg: 'No such user in database' });
      // Return info about the deleted user
      res.status(200).json({
        user: {
          name: user.name,
          email: user.email,
        },
      });
    })
    .catch((error: string) => {
      console.log('Error: ' + error);
      res.status(400).json({
        msg: 'Error: ' + error,
      });
    });
});

/**
 * @route   POST api/users/addMovie
 * @desc    Add movie to My List
 * @param   req.body.email User email
 * @param   req.body.imdbId IMDb-id of movie to be added
 * @access  Public
 */
router.post('/addMovie', (req: HttpRequest, res: HttpResponse) => {
  const { email, imdbId } = req.body;

  //Validate the inputs
  if (!(email && imdbId)) {
    return res.status(400).json({ msg: 'User email or imdbId missing' });
  }

  // Add movie to list
  User.findOneAndUpdate(
    { email: email },
    { $addToSet: { movieList: imdbId } },
    { new: true } // Option for returning the new object insted of original
  )
    .then((user: UserDoc | null) => {
      if (!user) return res.status(400).json({ msg: 'Could not find user' });
      res.status(200).json({
        user: {
          uid: user.uid,
          name: user.name,
          email: user.email,
          movieList: user.movieList,
        },
      });
    })
    .catch((error: string) => {
      console.log('Error: ' + error);
      res.status(400).json({
        msg: 'Error: ' + error,
      });
    });
});

/**
 * @route   POST api/users/deleteMovie
 * @desc    Deletes movie from My List
 * @param   req.body.email User email
 * @param   req.body.imdbId IMDb-id of movie to be deleted
 * @access  Public
 */
router.delete('/deleteMovie', (req: HttpRequest, res: HttpResponse) => {
  const { email, imdbId } = req.body;

  // Validate the inputs
  if (!(email && imdbId)) {
    return res.status(400).json({ msg: 'User email or imdbId missing' });
  }

  // Delete movie from list
  User.findOneAndUpdate(
    { email },
    { $pull: { movieList: imdbId } },
    { new: true } // Return new object insted of original
  )
    .then((user: UserDoc | null) => {
      // Check if user exists
      if (!user) return res.status(400).json({ msg: 'Could not find user' });
      // Return the updated user
      res.status(200).json({
        user: {
          uid: user.uid,
          name: user.name,
          email: user.email,
          movieList: user.movieList,
        },
      });
    })
    .catch((error: string) => {
      console.log('Error: ' + error);
      res.status(400).json({
        msg: 'Error: ' + error,
      });
    });
});

export default router;
