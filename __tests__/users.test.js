const app = require("../server.js");
const User = require("../schemas/userSchema");
const request = require("supertest");
const mongoose = require("mongoose");

afterAll(async () => {
    await mongoose.connection.close();
});

describe("GET /api/users", () => {
    test("200 : Responds wtih object with key - users : value - array of user objects ", async () => {
        const response = await request(app).get("/api/users").expect(200);
        expect(response.body.hasOwnProperty("users")).toBe(true);
        expect(typeof response.body).toBe("object");
        expect(Array.isArray(response.body.users)).toBe(true);
        expect(response.body.users.length).toBe(5);
        console.log(response.body);
        expect(response.body.users).toEqual([
            {
                _id: expect.any(String),
                username: "Jayne Doe",
                password: "Password1",
                sprite: "temp.png",
                xp: 20,
                trophies: [],
                bio: "Jayne Doe Bio",
                total_distance_covered: 100,
                total_steps: 10000,
                total_elevation_gain: 200,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Mitch Jones",
                password: "Password1",
                sprite: "temp.png",
                xp: 50,
                trophies: [],
                bio: "Mitch Jones Bio",
                total_distance_covered: 500,
                total_steps: 50000,
                total_elevation_gain: 800,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Shaggy Rogers",
                password: "Password1",
                sprite: "temp.png",
                xp: 2000,
                trophies: [],
                bio: "Shaggy Rogers Bio",
                total_distance_covered: 50000,
                total_steps: 500000,
                total_elevation_gain: 10000,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Velma Dinkley",
                password: "Password1",
                sprite: "temp.png",
                xp: 2000,
                trophies: [],
                bio: "Velma Dinkley Bio",
                total_distance_covered: 40000,
                total_steps: 400000,
                total_elevation_gain: 9000,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Marvin Martian",
                password: "Password1",
                sprite: "temp.png",
                xp: 1600,
                trophies: [],
                bio: "Marvin Martian Bio",
                total_distance_covered: 30000,
                total_steps: 300000,
                total_elevation_gain: 6000,
                current_challenge: { name: "challenge 1" },
            },
        ]);
    });
});

describe("GET /api/users/:username", () => {
    test("200 : Responds wtih object with key - user : value - user object", async () => {
        const response = await request(app)
            .get("/api/users/Velma Dinkley")
            .expect(200);
        expect(response.body.hasOwnProperty("user")).toBe(true);
        expect(typeof response.body).toBe("object");
        expect(Array.isArray(response.body.user)).toBe(false);
        expect(response.body.user).toEqual({
            _id: expect.any(String),
            username: "Velma Dinkley",
            password: "Password1",
            sprite: "temp.png",
            xp: 2000,
            trophies: [],
            bio: "Velma Dinkley Bio",
            total_distance_covered: 40000,
            total_steps: 400000,
            total_elevation_gain: 9000,
            current_challenge: { name: "challenge 1" },
        });
    });
});

describe("Patch /api/users", () => {
    test("200 : Responds wtih object with key - user : value - updated user object", async () => {
        const inputObj = {
            amount_to_increase: 50,
            property_to_change: "total_elevation_gain",
        };
        const response = await request(app)
            .patch("/api/users/Velma Dinkley")
            .send(inputObj)
            .expect(200);
        expect(response.body.hasOwnProperty("user")).toBe(true);
        expect(typeof response.body).toBe("object");
        expect(Array.isArray(response.body.user)).toBe(false);
        expect(response.body.user).toEqual({
            _id: expect.any(String),
            username: "Velma Dinkley",
            password: "Password1",
            sprite: "temp.png",
            xp: 2000,
            trophies: [],
            bio: "Velma Dinkley Bio",
            total_distance_covered: 40000,
            total_steps: 400000,
            total_elevation_gain: 9050,
            current_challenge: { name: "challenge 1" },
        });
        const response2 = await request(app)
            .get("/api/users/Velma Dinkley")
            .expect(200);
        expect(response2.body.hasOwnProperty("user")).toBe(true);
        expect(typeof response2.body).toBe("object");
        expect(Array.isArray(response2.body.user)).toBe(false);
        expect(response2.body.user).toEqual({
            _id: expect.any(String),
            username: "Velma Dinkley",
            password: "Password1",
            sprite: "temp.png",
            xp: 2000,
            trophies: [],
            bio: "Velma Dinkley Bio",
            total_distance_covered: 40000,
            total_steps: 400000,
            total_elevation_gain: 9050,
            current_challenge: { name: "challenge 1" },
        });
    });

    test("200 : Responds wtih object with key - user : value - user object unchanged if tried to change a value that is not a number", async () => {
        const incorrectInputObj = {
            amount_to_increase: 50,
            property_to_change: "username",
        };
        const response = await request(app)
            .patch("/api/users/Velma Dinkley")
            .send(incorrectInputObj)
            .expect(200);
        expect(response.body.hasOwnProperty("user")).toBe(true);
        expect(typeof response.body).toBe("object");
        expect(Array.isArray(response.body.user)).toBe(false);
        expect(response.body.user).toEqual({
            _id: expect.any(String),
            username: "Velma Dinkley",
            password: "Password1",
            sprite: "temp.png",
            xp: 2000,
            trophies: [],
            bio: "Velma Dinkley Bio",
            total_distance_covered: 40000,
            total_steps: 400000,
            total_elevation_gain: 9050,
            current_challenge: { name: "challenge 1" },
        });
        const response2 = await request(app)
            .get("/api/users/Velma Dinkley")
            .expect(200);
        expect(response2.body.hasOwnProperty("user")).toBe(true);
        expect(typeof response2.body).toBe("object");
        expect(Array.isArray(response2.body.user)).toBe(false);
        expect(response2.body.user).toEqual({
            _id: expect.any(String),
            username: "Velma Dinkley",
            password: "Password1",
            sprite: "temp.png",
            xp: 2000,
            trophies: [],
            bio: "Velma Dinkley Bio",
            total_distance_covered: 40000,
            total_steps: 400000,
            total_elevation_gain: 9050,
            current_challenge: { name: "challenge 1" },
        });
    });
});

describe("Post /api/users", () => {
    test("201 : Responds wtih object with key - user : value - posted user object", async () => {
        const inputObj = {
            username: "Scooby Doo",
            password: "Password1",
            sprite: "temp.png",
            xp: 2500,
            trophies: [],
            bio: "Scooby Doo Bio",
            total_distance_covered: 30000,
            total_steps: 500000,
            total_elevation_gain: 5000,
            current_challenge: { name: "challenge 1" },
        };
        const response = await request(app)
            .post("/api/users")
            .send(inputObj)
            .expect(201);
        expect(response.body.hasOwnProperty("user")).toBe(true);
        expect(typeof response.body).toBe("object");
        expect(Array.isArray(response.body.user)).toBe(false);
        expect(response.body.user).toEqual({
            _id: expect.any(String),
            username: "Scooby Doo",
            password: "Password1",
            sprite: "temp.png",
            xp: 2500,
            trophies: [],
            bio: "Scooby Doo Bio",
            total_distance_covered: 30000,
            total_steps: 500000,
            total_elevation_gain: 5000,
            current_challenge: { name: "challenge 1" },
            __v: 0,
        });
        const response2 = await request(app).get("/api/users").expect(200);
        expect(response2.body.users).toEqual([
            {
                _id: expect.any(String),
                username: "Jayne Doe",
                password: "Password1",
                sprite: "temp.png",
                xp: 20,
                trophies: [],
                bio: "Jayne Doe Bio",
                total_distance_covered: 100,
                total_steps: 10000,
                total_elevation_gain: 200,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Mitch Jones",
                password: "Password1",
                sprite: "temp.png",
                xp: 50,
                trophies: [],
                bio: "Mitch Jones Bio",
                total_distance_covered: 500,
                total_steps: 50000,
                total_elevation_gain: 800,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Shaggy Rogers",
                password: "Password1",
                sprite: "temp.png",
                xp: 2000,
                trophies: [],
                bio: "Shaggy Rogers Bio",
                total_distance_covered: 50000,
                total_steps: 500000,
                total_elevation_gain: 10000,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Velma Dinkley",
                password: "Password1",
                sprite: "temp.png",
                xp: 2000,
                trophies: [],
                bio: "Velma Dinkley Bio",
                total_distance_covered: 40000,
                total_steps: 400000,
                total_elevation_gain: 9050,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Marvin Martian",
                password: "Password1",
                sprite: "temp.png",
                xp: 1600,
                trophies: [],
                bio: "Marvin Martian Bio",
                total_distance_covered: 30000,
                total_steps: 300000,
                total_elevation_gain: 6000,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Scooby Doo",
                password: "Password1",
                sprite: "temp.png",
                xp: 2500,
                trophies: [],
                bio: "Scooby Doo Bio",
                total_distance_covered: 30000,
                total_steps: 500000,
                total_elevation_gain: 5000,
                current_challenge: { name: "challenge 1" },
                __v: expect.any(Number),
            },
        ]);
    });

    test("201 : Responds wtih object with key - user : value - 'unable to Add User'", async () => {
        const incorrectInputObj = {
            username: "Scooby Doo",
            password: "Password1",
            pic: "temp.png",
            xp: 2500,
            awards: [],
            bio: "Scooby Doo Bio",
            total_distance_covered: 30000,
            total_steps: 500000,
            total_elevation_gain: 5000,
            current_challenge: { name: "challenge 1" },
        };
        const response = await request(app)
            .post("/api/users")
            .send(incorrectInputObj)
            .expect(201);
        expect(response.body.hasOwnProperty("user")).toBe(true);
        expect(typeof response.body).toBe("object");
        expect(Array.isArray(response.body.user)).toBe(false);
        expect(response.body.user).toBe("Unable to Add User");
        const response2 = await request(app).get("/api/users").expect(200);
        expect(response2.body.users).toEqual([
            {
                _id: expect.any(String),
                username: "Jayne Doe",
                password: "Password1",
                sprite: "temp.png",
                xp: 20,
                trophies: [],
                bio: "Jayne Doe Bio",
                total_distance_covered: 100,
                total_steps: 10000,
                total_elevation_gain: 200,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Mitch Jones",
                password: "Password1",
                sprite: "temp.png",
                xp: 50,
                trophies: [],
                bio: "Mitch Jones Bio",
                total_distance_covered: 500,
                total_steps: 50000,
                total_elevation_gain: 800,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Shaggy Rogers",
                password: "Password1",
                sprite: "temp.png",
                xp: 2000,
                trophies: [],
                bio: "Shaggy Rogers Bio",
                total_distance_covered: 50000,
                total_steps: 500000,
                total_elevation_gain: 10000,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Velma Dinkley",
                password: "Password1",
                sprite: "temp.png",
                xp: 2000,
                trophies: [],
                bio: "Velma Dinkley Bio",
                total_distance_covered: 40000,
                total_steps: 400000,
                total_elevation_gain: 9050,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Marvin Martian",
                password: "Password1",
                sprite: "temp.png",
                xp: 1600,
                trophies: [],
                bio: "Marvin Martian Bio",
                total_distance_covered: 30000,
                total_steps: 300000,
                total_elevation_gain: 6000,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Scooby Doo",
                password: "Password1",
                sprite: "temp.png",
                xp: 2500,
                trophies: [],
                bio: "Scooby Doo Bio",
                total_distance_covered: 30000,
                total_steps: 500000,
                total_elevation_gain: 5000,
                current_challenge: { name: "challenge 1" },
                __v: expect.any(Number),
            },
        ]);

        const incorrectInputObj2 = {
            username: "Scooby Doo",
            password: "Password1",
            sprite: "temp.png",
            trophies: [],
            bio: "Scooby Doo Bio",
            total_steps: 500000,
            total_elevation_gain: 5000,
            current_challenge: { name: "challenge 1" },
        };
        const response3 = await request(app)
            .post("/api/users")
            .send(incorrectInputObj2)
            .expect(201);
        expect(response3.body.hasOwnProperty("user")).toBe(true);
        expect(typeof response3.body).toBe("object");
        expect(Array.isArray(response3.body.user)).toBe(false);
        expect(response3.body.user).toBe("Unable to Add User");
        const response4 = await request(app).get("/api/users").expect(200);
        expect(response4.body.users).toEqual([
            {
                _id: expect.any(String),
                username: "Jayne Doe",
                password: "Password1",
                sprite: "temp.png",
                xp: 20,
                trophies: [],
                bio: "Jayne Doe Bio",
                total_distance_covered: 100,
                total_steps: 10000,
                total_elevation_gain: 200,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Mitch Jones",
                password: "Password1",
                sprite: "temp.png",
                xp: 50,
                trophies: [],
                bio: "Mitch Jones Bio",
                total_distance_covered: 500,
                total_steps: 50000,
                total_elevation_gain: 800,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Shaggy Rogers",
                password: "Password1",
                sprite: "temp.png",
                xp: 2000,
                trophies: [],
                bio: "Shaggy Rogers Bio",
                total_distance_covered: 50000,
                total_steps: 500000,
                total_elevation_gain: 10000,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Velma Dinkley",
                password: "Password1",
                sprite: "temp.png",
                xp: 2000,
                trophies: [],
                bio: "Velma Dinkley Bio",
                total_distance_covered: 40000,
                total_steps: 400000,
                total_elevation_gain: 9050,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Marvin Martian",
                password: "Password1",
                sprite: "temp.png",
                xp: 1600,
                trophies: [],
                bio: "Marvin Martian Bio",
                total_distance_covered: 30000,
                total_steps: 300000,
                total_elevation_gain: 6000,
                current_challenge: { name: "challenge 1" },
            },
            {
                _id: expect.any(String),
                username: "Scooby Doo",
                password: "Password1",
                sprite: "temp.png",
                xp: 2500,
                trophies: [],
                bio: "Scooby Doo Bio",
                total_distance_covered: 30000,
                total_steps: 500000,
                total_elevation_gain: 5000,
                current_challenge: { name: "challenge 1" },
                __v: expect.any(Number),
            },
        ]);
    });
});
