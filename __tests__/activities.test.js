const app = require('../server.js');
const Activity = require('../schemas/activitySchema.js');
const request = require('supertest');
const mongoose = require('mongoose');



afterAll(async () => {
    await mongoose.connection.close();
});


describe("GET/api/activities/:username", () => {
    test("200: returns all activities for a given user sorted by date", async () => {
        const res = await request(app)
            .get("/api/activities/Marvin Martian")
            .expect(200);
        console.log(res.body.activities)
        expect(res.body.activities).toHaveLength(2);
        console.log(res.body.activities);
        expect(res.body.activities[0].username).toBe('Marvin Martian');
        res.body.activities.forEach(activity => {
            expect.objectContaining({
                _id: expect.any(String),
                date: expect.any(String),
                distanceTravelled: expect.any(Number),
                metersClimbed: expect.any(Number),
                stepCount: expect.any(Number),
                timeElapsed: expect.any(Number),
                activityType: expect.any(String),
                comment: expect.any(String),
                challenge_ID: expect.any(String),
                polylineArray: expect.any(Array),
            });
        })
        
    }, 30000);

});

describe('GET/api/activities/:activity_id', () => {
    test('200: returns a single activity based on its id', async () => {
        const res = await request(app)
            .get("/api/activities/activity/6184ea7fa9d68aa85788d05b")
            .expect(200);
        expect(res.body.activity.username).toEqual("Marvin Martian");
        console.log(res.body.activity);
        expect(res.body.activity.comment).toEqual("Felt pretty good");
        expect.objectContaining({
            _id: expect.any(String),
            date: expect.any(String),
            distanceTravelled: expect.any(Number),
            metersClimbed: expect.any(Number),
            stepCount: expect.any(Number),
            timeElapsed: expect.any(Number),
            activityType: expect.any(String),
            comment: expect.any(String),
            challenge_ID: expect.any(String),
            polylineArray: expect.any(Array),
        });
    }, 10000);
    
});

describe('POST/api/activities', () => {
    test("201: adds activity to the activities collection", async () => {
        const res = await request(app)
            .post("/api/activities")
            .send({
                username: "Shaggy Rogers",
                date: "2021-09-11T23:00:00.000Z",
                distanceTravelled: 22,
                metersClimbed: 0.06950537816285873,
                stepCount: 29,
                timeElapsed: 156000,
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
        console.log(res.body.postedActivity);
        expect(res.body.postedActivity.username).toEqual("Shaggy Rogers");
        expect(res.body.postedActivity.comment).toBe("Very busy day, glad I managed to get out for a run");
    }, 10000)
})

describe('PATCH/api/activities/:activity_id', () => {
    test('should update the relevant activity data for a previously posted activity', async () => {
        const res = await request(app)
            .patch("/api/activities/6184fcbb983679de00436394")
            .send({
                distanceTravelled: 45,
                metersClimbed: 1.36950537816285873,
                stepCount: 123,
                timeElapsed: 256000,
                polylineArray: [
                    {
                        latitude: 53.814451536192024,
                        longitude: -1.6649007540445564,
                        timeStamp: 1635931709000.971,
                    },
                ],
            })
            .expect(200);
        expect(res.body.updatedActivity).toMatchObject({

            username: "Shaggy Rogers",
            date: "2021-09-10T23:00:00.000Z",
            distanceTravelled: 45,
            metersClimbed: 1.36950537816285873,
            stepCount: 123,
            timeElapsed: 256000,
            activityType: "run",
            comment: "Very busy day, glad I managed to get out for a run",
            challenge_ID: "somekindofID",
            polylineArray: [
                {
                    latitude: 53.814451536192024,
                    longitude: -1.6649007540445564,
                    timeStamp: 1635931709000.971,
                },
            ],
        }

        );
        const res2 = await request(app)
            .patch("/api/activities/6184fcbb983679de00436394")
            .send({
                distanceTravelled: 90,
                metersClimbed: 2.86950537816285873,
                stepCount: 325,
                timeElapsed: 500000,
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
                ],
            })
            .expect(200);
        expect(res2.body.updatedActivity).toMatchObject({
            username: "Shaggy Rogers",
            date: "2021-09-10T23:00:00.000Z",
            distanceTravelled: 90,
            metersClimbed: 2.86950537816285873,
            stepCount: 325,
            timeElapsed: 500000,
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
            ],
        });

        console.log(res.body.updatedActivity);
        console.log(res2.body.updatedActivity);
    }, 25000);
});
        