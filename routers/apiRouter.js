const express = require("express");
const apiRouter = express.Router();
const { registerUser, loginUser } = require('../controllers/api-controllers.js');

const app = require("../server.js");
const { activityRouter, challengeRouter, userRouter } = require("./index.js");

apiRouter.use("/activities", activityRouter);
apiRouter.use("/challenges", challengeRouter);
apiRouter.use("/users", userRouter);

apiRouter.post("/register", registerUser);
apiRouter.post("/login", loginUser);

module.exports = apiRouter;
