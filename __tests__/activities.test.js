const app = require('../server.js');
const Activity = require('../schemas/activitySchema.js');
const request = require('supertest');
const mongoose = require('mongoose');

afterAll(async () => {
    await mongoose.connection.close();
})

describe("GET/api/activities/:username", () => {
    test("200: returns all activities for a given user", async () => {
        const res = await request(app)
            .get("/api/activities/Marvin Martian")
            .expect(200);
        expect(res.body.activities).toHaveLength(2);
        console.log(res.body.activities);
        expect(res.body.activities[0].username).toBe('Marvin Martian');
    });

});

describe('GET/api/activities/:activity_id', () => {
    test('200: returns a single activity based on its id', async () => {
        const res = await request(app)
            .get("/api/activities/activity/618278da9e1712a7d8fb7bd1")
            .expect(200);
        expect(res.body.activity.username).toEqual("Marvin Martian");
        console.log(res.body.activity);
        expect(res.body.activity.comment).toEqual("Felt pretty good");
    });
    
});

describe('POST/api/activities', () => {
    test("201: adds activity to the activities collection", async () => {
        const res = await request(app)
            .post("/api/activities")
            .send({
                username: "Shaggy Rogers",
                date: "2021/09/11",
                distanceTravelled: 22,
                metersClimbed: 0.06950537816285873,
                stepCount: 29,
                timeElapsed: "00;02;37",
                activityType: "run",
                comment: "Very busy day, glad I managed to get out for a run",
                challenge_ID: "somekindofID",
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
            })
            .expect(201);
        expect(res.body.postedActivity.username).toBe("Shaggy Rogers");
        expect(res.body.postedActivity.comment).toBe("Very busy day, glad I managed to get out for a run");
    });
})

        