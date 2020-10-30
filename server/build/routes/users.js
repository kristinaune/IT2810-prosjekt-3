"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const router = express_1.default.Router();
/**
 * @route   POST api/users/register
 * @desc    Register new user
 * @param   req.body.email User email
 * @param   req.body.name Name of user
 * @access  Public
 */
router.post('/register', (req, res) => {
    const { email, name } = req.body;
    //Validate the inputs
    if (!name || !email) {
        return res.status(400).json({ msg: 'Enter both name and email' });
    }
    // Check if the name is registred
    User_1.default.findOne({ email: email }).then((user) => {
        // If yes, return error
        if (user)
            return res.status(400).json({ msg: 'User already exists' });
        // If no, create new user
        const newUser = new User_1.default({
            name: name,
            email: email,
            movieList: [],
        });
        newUser.save().then((user) => {
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
router.post('/login', (req, res) => {
    const { email } = req.body;
    //Validate the inputs
    if (!email) {
        return res.status(400).json({ msg: 'Enter email' });
    }
    // Check if the name is registred
    User_1.default.findOne({ email: email }).then((user) => {
        if (!user)
            return res.status(400).json({ msg: 'User does not exist' });
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
router.delete('/deleteUser/:email', (req, res) => {
    User_1.default.findOneAndDelete({ email: req.params.email })
        .then((user) => {
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
        .catch((error) => {
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
router.post('/addMovie', (req, res) => {
    const { email, imdbId } = req.body;
    //Validate the inputs
    if (!(email && imdbId)) {
        return res.status(400).json({ msg: 'User email or imdbId missing' });
    }
    // Add movie to list
    User_1.default.findOneAndUpdate({ email: email }, { $addToSet: { movieList: imdbId } }, { new: true } // Option for returning the new object insted of original
    )
        .then((user) => {
        if (!user)
            return res.status(400).json({ msg: 'Could not find user' });
        res.status(200).json({
            user: {
                uid: user.uid,
                name: user.name,
                email: user.email,
                movieList: user.movieList,
            },
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
 * @route   DELETE api/users/deleteMove/:email/:imdbId
 * @desc    Deletes movie from My List
 * @param   req.body.email User email
 * @param   req.body.imdbId IMDb-id of movie to be deleted
 * @access  Public
 */
router.delete('/deleteMovie/:email/:imdbId', (req, res) => {
    const { email, imdbId } = req.params;
    // Validate the inputs
    if (!(email && imdbId)) {
        return res.status(400).json({ msg: 'User email or imdbId missing' });
    }
    // Delete movie from list
    User_1.default.findOneAndUpdate({ email: req.params.email }, { $pull: { movieList: req.params.imdbId } }, { new: true } // Return new object insted of original
    )
        .then((user) => {
        // Check if user exists
        if (!user)
            return res.status(400).json({ msg: 'Could not find user' });
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
        .catch((error) => {
        console.log('Error: ' + error);
        res.status(400).json({
            msg: 'Error: ' + error,
        });
    });
});
router.get('/', (req, res) => {
    User_1.default.find()
        .then((user) => res.json(user))
        .catch((e) => res.status(404).json({ success: false }));
});
exports.default = router;
