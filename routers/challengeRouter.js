const express = require("express");
const {
    getChallenges,
    getChallengeById,
    getUserChallengesToDo,
    patchChallengeById,
    postChallenge,
} = require("../controllers/challengeControllers");
const challengeRouter = express.Router();

challengeRouter.get("/", getChallenges);
challengeRouter.get("/:challenge_id", getChallengeById);
challengeRouter.get("/todo/:username", getUserChallengesToDo);

challengeRouter.patch("/:challenge_id", patchChallengeById);

challengeRouter.post("/", postChallenge);

module.exports = challengeRouter;
