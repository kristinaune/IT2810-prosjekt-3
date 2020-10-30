"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
/**
 * Defines the UserModel with a Schema
 */
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    movieList: {
        type: [String],
        required: true,
    },
});
// Exports User as a mongoose model
exports.default = mongoose_1.default.model('User', UserSchema);
