const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const loginUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    hash: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    sprite: {
        type: String,
        required: true,
    },
    xp: {
        type: Number,
        required: true,
    },
    trophies: {
        type: Array,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    total_distance_covered: {
        type: Number,
        required: true,
    },
    total_steps: {
        type: Number,
        required: true,
    },
    total_elevation_gain: {
        type: Number,
        required: true,
    },
    current_challenge: { name: { type: String } },
});

module.exports = mongoose.model("LoginUser", loginUserSchema);
