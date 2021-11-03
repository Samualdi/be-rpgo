const mongoose = require("mongoose");
const express = require("express");
const apiRouter = require("./routers/apiRouter");
const { getNoPathMessage } = require("./controllers/miscControllers");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.all("*", getNoPathMessage);

mongoose.connect(process.env.SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(process.env.PORT || 3500, () => {
    console.log("app listening on 3500");
});

module.exports = app;
