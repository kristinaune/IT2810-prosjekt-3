import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import CONFIG from './CONFIG';
import movies from './routes/movies';
import users from './routes/users';

// Import and assigns config variables
const PORT = CONFIG.PORT;
const SERVER_ADDRESS = CONFIG.SERVER_ADDRESS;

// Movie route
//const movies = require('./routes/movies');
//const users = require('./routes/users');

/**
 * Initialize express server as 'app' with express' body-parser as middleware.
 * This allows us to parse the request body and extract parameters.
 */
const app = express();
app.use(express.json(), cors());

/**
 * Connects mongoose to the MongoDB database.
 */
mongoose
  .connect('mongodb://' + SERVER_ADDRESS + '/movies', {
    useNewUrlParser: true,
    useCreateIndex: true, //get rid of error
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => console.log('Error connecting to MongoDB: ' + e));

/**
 * Use the api routes
 */
app.use('/api/movies', movies);
app.use('/api/users', users);

/**
 * Listen for incoming requests at port 4000.
 */
app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
