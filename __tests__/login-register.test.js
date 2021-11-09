const app = require("../server.js");
const request = require("supertest");
const mongoose = require("mongoose");

describe('POST/api/register', () => {
    test("201: Registers a new user with a hash and salt saved insted of their password", async () => {
        const res = await request(app)
            .post("/api/register")
            .send({
                username: "SamD",
                password: "Password1",
                sprite: "temp.png",
                xp: 0,
                trophies: [],
                bio: "Scooby Doo Bio",
                total_distance_covered: 0,
                total_steps: 0,
                total_elevation_gain: 0,
                current_challenge: { name: "challenge 1" },
            })
            .expect(201);
        expect.objectContaining({
            _id: expect.any(String),
            username: expect.any(String),
            hash: expect.any(String),
            salt: expect.any(String),
            sprite: expect.any(String),
            xp: expect.any(Number),
            trophies: expect.any(Array),
            bio: expect.any(String),
            total_distance_covered: expect.any(Number),
            total_steps: expect.any(Number),
            total_elevation_gain: expect.any(Number),
            current_challenge: expect.any(Object),
        });

    }, 20000);
    
});

describe('POST /api/login', () => {
    test('201: Logs in a user whn passed a username and password and returns user information', async () => {
        const res = await request(app)
            .post("/api/login")
            .send({
                username: "SamD",
                password: "Password1"
            })
            .expect(201)
        expect.objectContaining({
            _id: expect.any(String),
            username: "SamD",
            hash: expect.any(String),
            salt: expect.any(String),
            sprite: expect.any(String),
            xp: expect.any(Number),
            trophies: expect.any(Array),
            bio: expect.any(String),
            total_distance_covered: expect.any(Number),
            total_steps: expect.any(Number),
            total_elevation_gain: expect.any(Number),
            current_challenge: expect.any(Object),
        });
        
    });
    
});
