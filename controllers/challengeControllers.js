const { fetchChallenges } = require("../models/challengeModels");

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
        // Function Goes Here
        res.status(200).send();
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
