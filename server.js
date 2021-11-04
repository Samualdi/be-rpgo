const mongoose = require("mongoose");
const express = require("express");
const apiRouter = require("./routers/apiRouter");
const { getNoPathMessage } = require("./controllers/miscControllers");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.all("*", getNoPathMessage);

const ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
    path: `${__dirname}.env.${ENV}`,
});

const config =
    ENV === "production"
        ? {
              connectionString: process.env.MONGODB_URI,
              ssl: {
                  rejectUnauthorized: false,
              },
          }
        : {};

if (!process.env.MONGODB_URI) {
    throw new Error("Datbase not set");
}

db = mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {})
    .catch((err) => console.log(err));


module.exports = app;
