const { fetchActivitiesByUsername, fetchActivityById, addActivity, updateActivityById } = require('../models/activity-models.js');
const {checkUserExists, checkActivityExists} = require('../utils/data-utils')
exports.getActivitiesByUsername = async (req, res, next) => {
    try {
        const { username } = req.params;
        await checkUserExists(username);
        const activities = await fetchActivitiesByUsername(username);
        res.status(200).send({activities});
    } catch (err) {
        console.log(err);
        next(err);
    }
};

exports.getActivityById = async (req, res, next) => {
    try {
        const { activity_id } = req.params;
        const activity = await fetchActivityById(activity_id)
        res.status(200).send({activity});
    } catch (error) {
        next(error);
    }
};

exports.patchActivityById = async (req, res, next) => {
    try {
        const { activity_id } = req.params;
        await checkActivityExists(activity_id);
        const activityUpdate = req.body;
        const updatedActivity = await updateActivityById(
            activity_id,
            activityUpdate
        );
        res.status(200).send({ updatedActivity });
    } catch (error) {
        console.log(error);
        next(error);
    }
}; 

exports.postActivity = async (req, res, next) => {
    try {
        const activityData = req.body;
        const postedActivity = await addActivity(activityData);
        res.status(201).send({postedActivity: postedActivity });
    } catch (error) {
        console.log(error);
        next(error);
    }
};
