const mongoose = require("mongoose");
const Challenge = require("../schemas/challengeSchema.js");
const Activity = require("../schemas/activitySchema.js");

exports.fetchChallenges = async () => {
    const result = await Challenge.find().exec();
    return result;
};

exports.fetchChallengeById = async (challenge_id) => {
    console.log(challenge_id);
    const result = await Challenge.findById(challenge_id).exec();
    return result;
};

exports.fetchUserChallengesToDo = async (username) => {
    console.log(username);

    const completedActivityIds = await Activity.find(
        { username: username },
        "challenge_ID"
    ).exec();

    // console.log(completedActivityIds);

    const allChallenges = await Challenge.find().exec();

    // console.log(allChallenges)

    const allChallengesFiltered = allChallenges.filter((el) => {
        // console.log('hello?')
      
        console.log( el._id)
        return completedActivityIds.map((f) => {
        //     // console.log( el._id.includes(f.challenge_ID));
        //     console.log( el._id, f.challenge_ID);
            console.log( f.challenge_ID);
            // return f.challenge_ID !== el._id;
        });
    });

    // console.log(allChallengesFiltered);

    // const result = await Challenge.findById(username).exec();
    // return result;
};

exports.editChallengeById = async (challenge_id, challengeUpdates) => {
    console.log(challenge_id);
    console.log(challengeUpdates);
    const result = await Challenge.findByIdAndUpdate(
        challenge_id,
        challengeUpdates,
        { new: true }
    ).exec();
    console.log(result);
    return result;
};

exports.addChallenge = async (newChallenge) => {
    let challengeToPost = new Challenge(newChallenge);
    const result = await challengeToPost.save();
    console.log(result);
    return result;
};
