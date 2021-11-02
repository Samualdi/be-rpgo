const express = require("express");
const {
    getUsers,
    getUserByUsername,
    patchUserByUsername,
    postUser,
} = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:user_name", getUserByUsername);

userRouter.patch("/:user_name", patchUserByUsername);

userRouter.post("/", postUser);

module.exports = userRouter;
