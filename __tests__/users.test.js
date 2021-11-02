const request = require("supertest");
const app = require("../server.js");
const { seedUsers } = require("../Seeds/seed.js");
const MongoClient = require("mongodb").MongoClient;

beforeEach(() => seedUsers());

describe.only("GET /api/users", () => {
    test("200 : Responds wtih object with key - users : value - array of user objects ", async () => {
        const response = await request(app)
            .get("http://localhost:3500/api/users/Shaggy Rogers")
            .expect(200);
        expect(response.body.hasOwnProperty("users")).toBe(true);
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
                current_challenge: {},
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
                current_challenge: {},
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
                current_challenge: {},
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
                current_challenge: {},
            },
            {
                _id: expect.any(String),
                username: "Marvin Martian",
                password: "Password1",
                sprite: "temp.png",
                xp: 1600,
                trophies: [],
                bio: "Marvin Martian Bio - hello there your seeding may have worked!",
                total_distance_covered: 30000,
                total_steps: 300000,
                total_elevation_gain: 6000,
                current_challenge: {},
            },
        ]);
    });
});
