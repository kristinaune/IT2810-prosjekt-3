"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const CONFIG_1 = __importDefault(require("./CONFIG"));
const movies_1 = __importDefault(require("./routes/movies"));
const users_1 = __importDefault(require("./routes/users"));
// Import and assigns config variables
const { PORT, SERVER_ADDRESS } = CONFIG_1.default;
/**
 * Initialize express server as 'app' with express' body-parser as middleware.
 * This allows us to parse the request body and extract parameters.
 */
const app = express_1.default();
app.use(express_1.default.json(), cors_1.default());
/**
 * Connects mongoose to the MongoDB database.
 */
mongoose_1.default
    .connect('mongodb://' + SERVER_ADDRESS + '/gmdb', {
    user: 'mongooseApi',
    pass: 'password',
    useNewUrlParser: true,
    useCreateIndex: true,
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
app.use('/api/movies', movies_1.default);
app.use('/api/users', users_1.default);
/**
 * Listen for incoming requests at port 4000.
 */
app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
