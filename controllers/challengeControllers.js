const { fetchChallenges, fetchChallengeById } = require("../models/challengeModels");

exports.getChallenges = async (req, res, next) => {
    try {
        const challenges = await fetchChallenges()
        res.status(200).send({ challenges });
    } catch (error) {
        next(error);
    }
};

exports.getChallengeById = async (req, res, next) => {
    try {
        const { challenge_id } = req.params;
        console.log(challenge_id)
        const challenge = await fetchChallengeById(challenge_id)
        res.status(200).send({ challenge });
    } catch (error) {
        next(error);
    }
};

exports.patchChallengeById = async (req, res, next) => {
    try {
        // Function Goes Here
        res.status(200).send();
    } catch (error) {
        next(error);
    }
};

exports.postChallenge = async (req, res, next) => {
    try {
        // Function Goes Here
        res.status(201).send();
    } catch (error) {
        next(error);
    }
};
