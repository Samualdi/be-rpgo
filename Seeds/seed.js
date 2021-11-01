
const MongoClient = require("mongodb").MongoClient;
const testUsers = require('../data/testUsers');
const testActivities = require('../data/test-activities');
const testChallenges = require('../data/test-challenges');

async function seedUsers() {
    const uri =
        "mongodb+srv://gitpushgitpaid:gpgp2021@cluster0.j8dax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const userCollection = client
            .db("RPGo-DB")
            .collection("users");
        userCollection.drop();
        
        await userCollection.insertMany(testUsers);
        console.log("Users seeded! :)");

        client.close();

        } catch (err) {
        console.log(err.stack);
    }
}

async function seedActivities() {
    const uri =
        "mongodb+srv://gitpushgitpaid:gpgp2021@cluster0.j8dax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const activitiesCollection = client.db("RPGo-DB").collection("activities");
        activitiesCollection.drop();

        await activitiesCollection.insertMany(testActivities);
        console.log("Activities seeded! :)");

        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

async function seedChallenges() {
    const uri =
        "mongodb+srv://gitpushgitpaid:gpgp2021@cluster0.j8dax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const challengesCollection = client
            .db("RPGo-DB")
            .collection("challenges");
        challengesCollection.drop();

        await challengesCollection.insertMany(testChallenges);
        console.log("Challenges seeded! :)");

        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}
        



        // const activitiesCollection = client.db("RPGo-DB").collection("activities");
        // activitiesCollection.drop();

        // await activitiesCollection.insertMany(testActivities);
        // console.log("Activities seeded! :)");

        // const challengesCollection = client
        //     .db("RPGo-DB")
        //     .collection("challenges");
        // challengesCollection.drop();

        // await challengesCollection.insertMany(testChallenges);
        // console.log("Activities seeded! :)");


        // client.close();
   
seedUsers();
seedActivities();
seedChallenges();