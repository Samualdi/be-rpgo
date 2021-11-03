const express = require("express");
const {
    getActivitiesByUsername,
    getActivityById,
    patchActivityById,
    postActivity,
} = require("../controllers/activityControllers.js");
const activityRouter = express.Router();

activityRouter.get("/:username", getActivitiesByUsername);
activityRouter.get("/activity/:activity_id", getActivityById);

//activityRouter.patch("/:activity_id", patchActivityById);

activityRouter.post("/", postActivity);

module.exports = activityRouter;
