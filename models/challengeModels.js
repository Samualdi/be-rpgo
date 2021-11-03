const mongoose = require("mongoose");
const Challenge = require("../schemas/challengeSchema.js");

exports.fetchChallenges = async () => {
    const result = await Challenge.find().exec();
    console.log(result)
    return result;
};

exports.fetchChallengeById = async (challenge_id) => {};
exports.editChallengeById = async (challenge_id) => {};
exports.addChallenge = async (newChallenge) => {};
