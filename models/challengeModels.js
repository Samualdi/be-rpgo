const mongoose = require("mongoose");
const Challenge = require("../schemas/challengeSchema.js");

exports.fetchChallenges = async () => {
    const result = await Challenge.find().exec();
    return result;
};

exports.fetchChallengeById = async (challenge_id) => {
    console.log(challenge_id)
    const result = await Challenge.findById(challenge_id).exec();
    return result;
};

exports.editChallengeById = async (challenge_id) => {};

exports.addChallenge = async (newChallenge) => {
    let challengeToPost = new Challenge(newChallenge);
    const result = await challengeToPost.save()
    console.log(result)
    return result;
};
