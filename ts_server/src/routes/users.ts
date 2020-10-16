import { HttpRequest, HttpResponse, UserType } from "../types";
import express from 'express'
import User from '../models/User'

const router = express.Router();

/**
 * @route   POST api/users/register
 * @desc    Register new user
 * @access  Public
 */
router.post('/register', (req : HttpRequest, res: HttpResponse) => {
  const { name, email } = req.body;

  //Validate the inputs
  if (!name || !email) {
    return res.status(400).json({ msg: 'Enter both name and email' });
  }
  // Check if the name is registred
  User.findOne({ email }).then((user: UserType) => {
    // If yes, return error
    if (user) return res.status(400).json({ msg: 'User already exists' });
    // If no, create new user
    const newUser = new User({
      name: name,
      email: email,
      movieList: [],
    });
    newUser.save().then((user: UserType) => {
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
router.post('/login', (req : HttpRequest, res: HttpResponse) => {
  const { email } = req.body;

  //Validate the inputs
  if (!email) {
    return res.status(400).json({ msg: 'Enter email' });
  }
  // Check if the name is registred
  User.findOne({ email }).then((user: UserType) => {
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

// router.post('/addmovie', (req : HttpRequest, res: HttpResponse) => {
//   const { movie, id } = req.body;

//   if (!movie) {
//     return res.status(400).json({msg: 'Unvalid movie'});
//   }
//   User.findById(id).then((user) => {
//     if (!user) return res.status(400).json({msg: 'Cannot find user with the id'});
//     res.status(200).json({
//       user: {
//         id: user.id,
//         name: user.name,
//         email:user.email,
//         mymovielist: user.mymovielist+movie
//       }
//     })
//   }

//   }
// })

router.get('/user', (req : HttpRequest, res: HttpResponse) => {
  // TODO: Er det ikke en req.body.name?
  User.find({ name: req.body.name }).then((user: UserType) => res.json(user));
});

router.get('/', (req : HttpRequest, res: HttpResponse) => {
  User.find().then((user: UserType) => res.json(user));
});

/**
 * @route   POST api/users/addMovie
 * @desc    Add movie to My List
 * @access  Public
 */
router.post('/addMovie', (req : HttpRequest, res: HttpResponse) => {
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
    .then((user: UserType) => {
      res.status(200).json({
        user: {
          id: user.id,
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
 * @access  Public
 */
router.delete('/deleteMovie', (req : HttpRequest, res: HttpResponse) => {
  const { email, imdbId } = req.body;

  //Validate the inputs
  if (!(email && imdbId)) {
    return res.status(400).json({ msg: 'User email or imdbId missing' });
  }
  // Check if the user exist
  User.findOne({ email }).then((user: UserType) => {
    if (!user) return res.status(400).json({ msg: 'User does not exist' });
  });

  // Delete movie from list
  User.findOneAndUpdate(
    { email },
    { $pull: { movieList: imdbId } },
    { new: true } // Return new object insted of original
  )
    .then((user: UserType) => {
      // Return the updated user
      res.status(200).json({
        user: {
          id: user.id,
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
