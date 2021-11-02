const express = require("express");
const {
    getUsers,
    getUserById,
    patchUserById,
    postUser,
} = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:user_id", getUserById);

userRouter.patch("/:user_id", patchUserById);

userRouter.post("/", postUser);

module.exports = userRouter;
