const testChallenges = [
    {
        title: "Run From the Dragon",
        description:
            "You are being chased by a dragon, cover 1000 steps to escape",
        reward: "blueTrophy.png",
        activity_type: "steps",
        timed_challenge: [true, new Date("December 17, 2021 03:24:00")],
        activity_value: 1000,
        xp: 250
    },
    {
        title: "Climb the Tower",
        description:
            "You find a deserted guard tower, gain 50 elevationto search it",
        reward: "redTrophy.png",
        activity_type: "elevation",
        timed_challenge: [false, null],
        activity_value: 50,
        xp: 150
    },
    {
        title: "One does not simply...",
        description: "Cover 5km to enter a new area",
        reward: "theOneTrophy.png",
        activity_type: "distance",
        timed_challenge: [false, null],
        activity_value: 5000,
        xp: 400
    },
    {
        title: "Help the Grey Mage",
        description: "Explore an area of 2km to find plants for a mage",
        reward: "greyTrophy.png",
        activity_type: "distance",
        timed_challenge: [false, null],
        activity_value: 2000,
        xp: 200
    },
    {
        title: "Break the curse",
        description:
            "you've been cursed, walk a mile in someone else's shoes to break the curse",
        reward: "purpleMedal.png",
        activity_type: "distance",
        timed_challenge: [false, null],
        activity_value: 1000,
        xp: 120
    },
];

module.exports = testChallenges;
