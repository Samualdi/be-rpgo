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
        res.body.challenges.forEach((challenge) => {
            expect(challenge).toMatchObject({
                title: expect.any(String),
                description: expect.any(String),
                reward: expect.any(String),
                activity_type: expect.any(String),
                timed_challenge: expect.any(Object),
                activity_value: expect.any(Number),
                xp: expect.any(Number),
            });
        });
        expect(res.body.challenges).toHaveLength(5);
    }, 60000);
});

describe("GET/api/challenges/:challenge_id.", () => {
    test("200: returns a challenge based on its id", async () => {
        const res = await request(app)
            .get("/api/challenges/6183c6c451d6ec1527e0398f")
            .expect(200);
        expect(res.body.challenge.title).toBe("Run From the Dragon");
        expect(res.body.challenge).toMatchObject({
            title: expect.any(String),
            description: expect.any(String),
            reward: expect.any(String),
            activity_type: expect.any(String),
            timed_challenge: expect.any(Object),
            activity_value: expect.any(Number),
            xp: expect.any(Number),
        });
    });
});

describe("POST/api/challenges/", () => {
    test("201: adds new challenge to the activities collection", async () => {
        const res = await request(app)
            .post("/api/challenges/")
            .send({
                title: "A Spooky Challenge",
                description:
                    "There are spoooooky fantasy ghosts, run 1km away!",
                reward: "ghost.png",
                activity_type: "distance",
                timed_challenge: { time_limit: 30 },
                activity_value: 1000,
                xp: 150,
            })
            .expect(201);
            expect(res2.body.updatedChallenge).toMatchObject({
                title: "Edited!",
                description: "Edited again",
                reward: "edited.png",
                activity_type: "elevation",
                timed_challenge: {},
                activity_value: 200,
                xp: 50,
            });
        expect(res.body.createdChallenge.title).toBe("A Spooky Challenge");
        expect(res.body.createdChallenge.description).toBe(
            "There are spoooooky fantasy ghosts, run 1km away!"
        );
    }, 15000);
});

describe("PATCH/api/challenges/:challenge_id.", () => {
    test("200: update parameter on challenge object and return updated challenge", async () => {
        const res = await request(app)
            .patch("/api/challenges/6183b2d2b58ef40bf8c84195")
            .send({
                title: "Edited!",
                description: "Also edited",
                reward: "edited.png",
                activity_type: "steps",
                timed_challenge: {},
                activity_value: 200,
                xp: 50,
            })
            .expect(200);
        expect(res.body.updatedChallenge).toMatchObject({
            title: "Edited!",
            description: "Also edited",
            reward: "edited.png",
            activity_type: "steps",
            timed_challenge: {},
            activity_value: 200,
            xp: 50,
        });
        const res2 = await request(app)
            .patch("/api/challenges/6183b2d2b58ef40bf8c84195")
            .send({
                description: "Edited again",
                activity_type: "elevation",
            })
            .expect(200);
        expect(res2.body.updatedChallenge).toMatchObject({
            title: "Edited!",
            description: "Edited again",
            reward: "edited.png",
            activity_type: "elevation",
            timed_challenge: {},
            activity_value: 200,
            xp: 50,
        });
    });
});


