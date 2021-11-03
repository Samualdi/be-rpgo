const app = require('../server.js');
const Activity = require('../schemas/activitySchema.js');
const request = require('supertest');
const mongoose = require('mongoose');

describe("GET/api/activities/:username", () => {
    test("200: returns all activities for a given user", async () => {
        const res = await request(app)
            .get("/api/activities/Shaggy Rogers")
            .expect(200);
        expect(res.body.activities).toHaveLength(1);
        console.log(res.body.activities);
        expect(res.body.activities[0].username).toBe('Shaggy Rogers');
    });

});

describe('GET/api/activities/:activity_id', () => {
    test('200: returns a single activity based on its id', async () => {
        const res = await request(app).get(
            "/api/activities/activity/618199f6e3e4ec099aa8b477"
        )
            .expect(200);
        expect(res.body.activity.username).toEqual("Marvin Martian");
        expect(res.body.activity.distance).toEqual(135);
    });
    
});

// describe('POST/api/activities', () => {
//     test("201: adds activity to the activities collection", async () => {
//         const res = await request(app)
//             .post("/api/activities")
//             .send({
//                 username: "Shaggy Rogers",
//                 date: "2021/09/12",
//                 map: "polyline goes here",
//                 steps: 28000,
//                 distance: 21100,
//                 elevation: 300,
//                 time: 160,
//                 activityType: "run",
//                 comment: "My first half marathon",
//             })
//             .expect(201);
//     });
// })

        