const express = require("express");
const apiRouter = express.Router();

const app = require("../server.js");
const { activityRouter, challengeRouter, userRouter } = require("./index.js");

apiRouter.use("/activities", activityRouter);
apiRouter.use("/challenges", challengeRouter);
apiRouter.use("/users", userRouter);

module.exports = apiRouter;
