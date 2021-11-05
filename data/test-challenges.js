const testChallenges = [
    {
      title: "Run From the Dragon",
      description: "You are being chased by a dragon, cover 1000 steps to escape",
      reward: "Dragon_Scale",
      activity_type: "stepCount",
      timed_challenge: { timed: true, time_limit: 3600000 },
      activity_value: 1000,
      xp: 250,
    },
    {
      title: "Climb the Tower",
      description:
        "You find a deserted guard tower, gain 50 elevation to search it",
      reward: "Gold_Armour",
      activity_type: "metersClimbed",
      timed_challenge: { timed: false },
      activity_value: 50,
      xp: 150,
    },
    {
      title: "One does not simply...",
      description: "Cover 5km to enter a new area",
      reward: "Gold_Ring",
      activity_type: "distanceTravelled",
      timed_challenge: { timed: false },
      activity_value: 5000,
      xp: 400,
    },
    {
      title: "Help the Grey Mage",
      description: "Explore an area of 2km to find plants for a mage",
      reward: "Mage-Potion",
      activity_type: "distanceTravelled",
      timed_challenge: { timed: false },
      activity_value: 2000,
      xp: 200,
    },
    {
      title: "Break the curse",
      description:
        "you've been cursed, walk a mile in someone else's shoes to break the curse",
      reward: "Sacred-Scroll",
      activity_type: "distanceTravelled",
      timed_challenge: { timed: false },
      activity_value: 1000,
      xp: 120,
    },
  ];

module.exports = testChallenges;
