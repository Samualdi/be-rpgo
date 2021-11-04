const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reward: {
        type: String,
        required: true,
    },
    activity_type: {
        type: String,
        required: true,
    },
    timed_challenge: {
        type: Object,
    },
    activity_value: {
        type: Number,
        required: true,
    },
    xp: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Challenge", challengeSchema);
