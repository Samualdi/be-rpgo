const express = require("express");
const {
    getActivities,
    getActivityById,
    patchActivityById,
    postActivity,
} = require("../controllers/activityControllers.js");
const activityRouter = express.Router();

activityRouter.get("/", getActivities);
activityRouter.get("/:activity_id", getActivityById);

activityRouter.patch("/:activity_id", patchActivityById);

activityRouter.post("/", postActivity);

module.exports = activityRouter;
