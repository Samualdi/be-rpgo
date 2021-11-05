const testActivities = [
    {
        username: "Marvin Martian",
        date: "2021-10-29T23:00:00.000Z",
        distanceTravelled: 22,
        metersClimbed: 0.06950537816285873,
        stepCount: 29,
        timeElapsed: 156000,
        activityType: "distanceTravelled",
        comment: "Felt pretty good",
        challenge_ID: "One does not simply...",
        polylineArray: [
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931709000.971,
            },
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931724001.3394,
            },
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931740001.7312,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931755002.0986,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931770002.4663,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931785002.8352,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931800003.2014,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931815003.569,
            },
            {
                latitude: 53.81448163849362,
                longitude: -1.6649656670919026,
                timeStamp: 1635931830003.9368,
            },
            {
                latitude: 53.814443614437245,
                longitude: -1.6648536231324937,
                timeStamp: 1635931845004.3042,
            },
            {
                latitude: 53.81448751333303,
                longitude: -1.6647627165908851,
                timeStamp: 1635931861004.6965,
            },
        ],
    },

    {
        username: "Marvin Martian",
        date: "2021-10-27T23:00:00.000Z",
        distanceTravelled: 156000,
        metersClimbed: 0.06950537816285873,
        stepCount: 29,
        timeElapsed: "00;02;37",
        activityType: "distanceTravelled",
        comment: "Very tired, not my best",
        challenge_ID: "Help the Grey Mage",
        polylineArray: [
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931709000.971,
            },
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931724001.3394,
            },
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931740001.7312,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931755002.0986,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931770002.4663,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931785002.8352,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931800003.2014,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931815003.569,
            },
            {
                latitude: 53.81448163849362,
                longitude: -1.6649656670919026,
                timeStamp: 1635931830003.9368,
            },
            {
                latitude: 53.814443614437245,
                longitude: -1.6648536231324937,
                timeStamp: 1635931845004.3042,
            },
            {
                latitude: 53.81448751333303,
                longitude: -1.6647627165908851,
                timeStamp: 1635931861004.6965,
            },
        ],
    },

    {
        username: "Jayne Doe",
        date: "2021-09-15T23:00:00.000Z",
        distanceTravelled: 22,
        metersClimbed: 0.06950537816285873,
        stepCount: 29,
        timeElapsed: 156000,
        activityType: "stepCount",
        comment: "Lovely walk with a friend",
        challenge_ID: "Run From the Dragon",
        polylineArray: [
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931709000.971,
            },
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931724001.3394,
            },
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931740001.7312,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931755002.0986,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931770002.4663,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931785002.8352,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931800003.2014,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931815003.569,
            },
            {
                latitude: 53.81448163849362,
                longitude: -1.6649656670919026,
                timeStamp: 1635931830003.9368,
            },
            {
                latitude: 53.814443614437245,
                longitude: -1.6648536231324937,
                timeStamp: 1635931845004.3042,
            },
            {
                latitude: 53.81448751333303,
                longitude: -1.6647627165908851,
                timeStamp: 1635931861004.6965,
            },
        ],
    },
    {
        username: "Jayne Doe",
        date: "2021-10-14T23:00:00.000Z",
        distanceTravelled: 22,
        metersClimbed: 0.06950537816285873,
        stepCount: 29,
        timeElapsed: 156000,
        activityType: "distanceTravelled",
        comment: "Long walk in the sun",
        challenge_ID: "Help the Grey Mage",
        polylineArray: [
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931709000.971,
            },
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931724001.3394,
            },
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931740001.7312,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931755002.0986,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931770002.4663,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931785002.8352,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931800003.2014,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931815003.569,
            },
            {
                latitude: 53.81448163849362,
                longitude: -1.6649656670919026,
                timeStamp: 1635931830003.9368,
            },
            {
                latitude: 53.814443614437245,
                longitude: -1.6648536231324937,
                timeStamp: 1635931845004.3042,
            },
            {
                latitude: 53.81448751333303,
                longitude: -1.6647627165908851,
                timeStamp: 1635931861004.6965,
            },
        ],
    },
    {
        username: "Mitch Jones",
        date: "2021-08-12T23:00:00.000Z",
        distanceTravelled: 22,
        metersClimbed: 50.06950537816285873,
        stepCount: 29,
        timeElapsed: 156000,
        activityType: "metersClimbed",
        comment: "Abbey dash - not quite a PB",
        challenge_ID: "Climb the Tower",
        polylineArray: [
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931709000.971,
            },
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931724001.3394,
            },
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931740001.7312,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931755002.0986,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931770002.4663,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931785002.8352,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931800003.2014,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931815003.569,
            },
            {
                latitude: 53.81448163849362,
                longitude: -1.6649656670919026,
                timeStamp: 1635931830003.9368,
            },
            {
                latitude: 53.814443614437245,
                longitude: -1.6648536231324937,
                timeStamp: 1635931845004.3042,
            },
            {
                latitude: 53.81448751333303,
                longitude: -1.6647627165908851,
                timeStamp: 1635931861004.6965,
            },
        ],
    },
    {
        username: "Shaggy Rogers",
        date: "2021-09-14T23:00:00.000Z",
        distanceTravelled: 22,
        metersClimbed: 0.06950537816285873,
        stepCount: 29,
        timeElapsed: 156000,
        activityType: "distanceTravelled",
        comment: "My first marathon",
        challenge_ID: "One does not simply...",
        polylineArray: [
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931709000.971,
            },
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931724001.3394,
            },
            {
                latitude: 53.814451536192024,
                longitude: -1.6649007540445564,
                timeStamp: 1635931740001.7312,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931755002.0986,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931770002.4663,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931785002.8352,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931800003.2014,
            },
            {
                latitude: 53.81447025601228,
                longitude: -1.664943297476718,
                timeStamp: 1635931815003.569,
            },
            {
                latitude: 53.81448163849362,
                longitude: -1.6649656670919026,
                timeStamp: 1635931830003.9368,
            },
            {
                latitude: 53.814443614437245,
                longitude: -1.6648536231324937,
                timeStamp: 1635931845004.3042,
            },
            {
                latitude: 53.81448751333303,
                longitude: -1.6647627165908851,
                timeStamp: 1635931861004.6965,
            },
        ],
    },
];

module.exports = testActivities;