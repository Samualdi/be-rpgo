const MongoClient = require("mongodb").MongoClient;
const express = require("express");

const app = express();
app.use(express.json());

MongoClient.connect(
    "mongodb+srv://gitpushgitpaid:gpgp2021@cluster0.j8dax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
).then((client) => {
    console.log("DB Connected");
    const db = client.db("RPGo-DB");
    const usersCollection = db.collection("users");
    app.post("/users", (req, res) => {
        // console.log(req);
        usersCollection
            .insertOne(req.body)
            .then((response) => {
                console.log("sucess");
                res.status(201).send({ message: "Added User" });
            })
            .catch((error) => {
                console.log(error);
            });
    });

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
