const app = require("../server.js");
const Challenge = require("../schemas/challengeSchema.js");
const request = require("supertest");
const mongoose = require("mongoose");

afterAll(async () => {
    await mongoose.connection.close();
});

describe("GET/api/challenges.", () => {
    test("200: returns all challenges", async () => {
        const res = await request(app).get("/api/challenges").expect(200);
        expect(res.body.challenges).toHaveLength(5);
        res.body.challenges.forEach((challenge) => {
            expect(challenge).toMatchObject({
                title: expect.any(String),
                description: expect.any(String),
                reward: expect.any(String),
                activity_type: expect.any(String),
                timed_challenge: expect.any(Array),
                activity_value: expect.any(Number),
                xp: expect.any(Number),
            });
        });
    });
});
