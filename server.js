const MongoClient = require("mongodb").MongoClient;
const express = require("express");

const app = express();

MongoClient.connect(
    "mongodb+srv://gitpushgitpaid:gpgp2021@cluster0.j8dax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
).then((client) => {
    console.log("DB Connected");
    const db = client.db("RPGo-DB");
    const usersCollection = db.collection("users");
    app.post("/users", (req, res) => {
        usersCollection.insertOne({ username: "John Smith" }).then((res) => {
            console.log(res);
        });
    });

    app.use(express.json());

    app.get("/users", (req, res) => {
        db.collection("users")
            .find()
            .toArray()
            .then((response) => {
                console.log("response received");
                res.send(response);
            });
    });

    app.get("/", (req, res) => {
        res.send("Recieved and returned");
    });

    app.listen(3500, () => {
        console.log("app listening on 3500");
    });
});
