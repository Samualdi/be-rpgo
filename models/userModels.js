const app = require("../server");
const MongoClient = require("mongodb").MongoClient;

exports.fetchUsers = async () => {
    const client = await MongoClient.connect(
        "mongodb+srv://gitpushgitpaid:gpgp2021@cluster0.j8dax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    const usersCollection = client.db("RPGo-DB").collection("users");

    const users = await usersCollection.find().toArray();

    client.close;

    return users;
};

exports.fetchUserByUsername = async (userName) => {
    const client = await MongoClient.connect(
        "mongodb+srv://gitpushgitpaid:gpgp2021@cluster0.j8dax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    const usersCollection = client.db("RPGo-DB").collection("users");

    const user = await usersCollection.find({ username: userName }).toArray();

    if (user.length === 0) {
        return Promise.reject({
            status: 404,
            msg: `Could not find that user`,
        });
    }

    client.close;

    return user;
};
