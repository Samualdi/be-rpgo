const app = require('../server.js');
const Activity = require('../schemas/activitySchema.js');
const request = require('supertest');
const mongoose = require('mongoose');

describe('GET/api/activities', () => {
    test('200: returns all activities', async () => {
                const res = await request(app).get("/api/activities").expect(200);
                expect(res.body.activities).toHaveLength(6);
                });
            });
        