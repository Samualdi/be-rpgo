const app = require("../server.js");
const Challenge = require("../schemas/challengeSchema.js");
const request = require("supertest");
const mongoose = require("mongoose");

afterAll(async () => {
    await mongoose.connection.close();
});

describe.only("GET/api/challenges.", () => {
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
        expect(res.body.challenges.length >= 5).toBe(true);
    }, 30000);
});

describe.only("GET/api/challenges/todo/:username", () => {
    test("200: returns only challenges that username has NOT completed", async () => {
        const res = await request(app)
            .get("/api/challenges/todo/Marvin Martian")
            .expect(200);
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
            expect(challenge.title).not.toBe("One does not simply..." || "Help the Grey Mage");
        });
        expect(res.body.challenges.length >= 3).toBe(true);
    }, 30000);
});

describe("GET/api/challenges/:challenge_id.", () => {
    test("200: returns a challenge based on its id", async () => {
        const res = await request(app)
            .get("/api/challenges/61840288d712265add8c967f")
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

describe("PATCH/api/challenges/:challenge_id.", () => {
    test("200: update parameter on challenge object and return updated challenge", async () => {
        const res = await request(app)
            .patch("/api/challenges/618402a99951e5d839c81467")
            .send({
                title: "Edited!",
                description: "Also edited",
                reward: "edited.png",
                activity_type: "stepCount",
                timed_challenge: { timed: false },
                activity_value: 200,
                xp: 50,
            })
            .expect(200);
        expect(res.body.updatedChallenge).toMatchObject({
            title: "Edited!",
            description: "Also edited",
            reward: "edited.png",
            activity_type: "stepCount",
            timed_challenge: { timed: false },
            activity_value: 200,
            xp: 50,
        });
        console.log(res.body.updatedChallenge);
        const res2 = await request(app)
            .patch("/api/challenges/618402a99951e5d839c81467")
            .send({
                description: "Edited again",
                activity_type: "metersClimbed",
            })
            .expect(200);
        expect(res2.body.updatedChallenge).toMatchObject({
            title: "Edited!",
            description: "Edited again",
            reward: "edited.png",
            activity_type: "metersClimbed",
            timed_challenge: { timed: false },
            activity_value: 200,
            xp: 50,
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
                activity_type: "distanceTravelled",
                timed_challenge: { timed: true, time_limit: 30 },
                activity_value: 1000,
                xp: 150,
            })
            .expect(201);
        expect(res.body.createdChallenge).toMatchObject({
            title: "A Spooky Challenge",
            description: "There are spoooooky fantasy ghosts, run 1km away!",
            reward: "ghost.png",
            activity_type: "distanceTravelled",
            timed_challenge: { timed: true, time_limit: 30 },
            activity_value: 1000,
            xp: 150,
        });
    }, 15000);
});
