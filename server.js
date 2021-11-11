const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const apiRouter = require("./routers/apiRouter");
const { getNoPathMessage } = require("./controllers/miscControllers");
const { handleCustomErrors } = require("./errors/index.js");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

app.all("*", getNoPathMessage)

app.use(handleCustomErrors);

const uri = process.env.MONGODB_URI || process.env.SERVER;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {})
    .catch((err) => console.log(err));

module.exports = app;
