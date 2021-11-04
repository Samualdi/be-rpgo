const MongoClient = require("mongodb").MongoClient;

const testUsers = require("../data/test-users");
const testActivities = require("../data/test-activities");
const testChallenges = require("../data/test-challenges");
require("dotenv").config();

async function seedUsers() {
    const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const userCollection = client.db("RPGO-DB-Test").collection("users");
        userCollection.drop();

        await userCollection.insertMany(testUsers);
        console.log("Users seeded! :)");

        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

async function seedActivities() {
    const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const activitiesCollection = client
            .db("RPGO-DB-Test")
            .collection("activities");
        activitiesCollection.drop();

        await activitiesCollection.insertMany(testActivities);
        console.log("Activities seeded! :)");

        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

async function seedChallenges() {
    const client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const challengesCollection = client
            .db("RPGO-DB-Test")
            .collection("challenges");
        challengesCollection.drop();

        await challengesCollection.insertMany(testChallenges);
        console.log("Challenges seeded! :)");

        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedUsers();
seedActivities();
seedChallenges();

module.exports = { seedUsers, seedChallenges, seedActivities };
