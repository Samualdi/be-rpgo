const { fetchChallenges, fetchChallengeById, fetchUserChallengesToDo, editChallengeById, addChallenge } = require("../models/challengeModels");

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

exports.getUserChallengesToDo = async (req, res, next) => {
    try {
        const { username } = req.params;
        const challenges = await fetchUserChallengesToDo(username)
        res.status(200).send({ challenges });
    } catch (error) {
        next(error);
    }
};

exports.patchChallengeById = async (req, res, next) => {
    try {
        const { challenge_id } = req.params;
        const challengeUpdates = req.body;
        console.log(challenge_id)
        console.log(challengeUpdates)
        const updatedChallenge = await editChallengeById(challenge_id,challengeUpdates)
        res.status(200).send({updatedChallenge});
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
