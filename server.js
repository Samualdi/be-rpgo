const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const apiRouter = require("./routers/apiRouter");
const { getNoPathMessage } = require("./controllers/miscControllers");
const { handleCustomErrors, handleServerErrors } = require("./errors/index");

const app = express();
app.use(express.json());

MongoClient.connect(
    "mongodb+srv://gitpushgitpaid:gpgp2021@cluster0.j8dax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
).then((client) => {
    console.log("DB Connected");
    const db = client.db("RPGo-DB");
    const usersCollection = db.collection("users");

    app.use("/api", apiRouter);

    app.all("*", getNoPathMessage);

    app.listen(3500, () => {
        console.log("app listening on 3500");
    });
});

module.exports = app;
