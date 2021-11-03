const { fetchChallenges, fetchChallengeById, editChallengeById, addChallenge } = require("../models/challengeModels");

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
        const challenge = await fetchChallengeById(challenge_id)
        res.status(200).send({ challenge });
    } catch (error) {
        next(error);
    }
};

exports.patchChallengeById = async (req, res, next) => {
    try {
        // const challengeUpdates = req.body;
        // const updatedChallenge = await editChallengeById()
        // Function Goes Here
        res.status(200).send({});
    } catch (error) {
        next(error);
    }
};

exports.postChallenge = async (req, res, next) => {
    try {
        const newChallenge = req.body;
        console.log(newChallenge)
        const createdChallenge = await addChallenge(newChallenge)
        res.status(201).send( {createdChallenge} );
    } catch (error) {
        next(error);
    }
};
