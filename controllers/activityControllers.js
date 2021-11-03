const { fetchActivitiesByUsername, fetchActivityById, addActivity } = require('../models/activity-models.js');

exports.getActivitiesByUsername = async (req, res, next) => {
    try {
        const { username } = req.params;
        const activities = await fetchActivitiesByUsername(username);
        res.status(200).send({activities: activities});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.getActivityById = async (req, res, next) => {
    try {
        const { activity_id } = req.params;
        const activity = await fetchActivityById(activity_id)
        res.status(200).send({activity: activity});
    } catch (error) {
        next(error);
    }
};

// exports.patchActivityById = async (req, res, next) => {
//     try {
//         // Function Goes Here
//         res.status(200).send();
//     } catch (error) {
//         next(error);
//     }
// }; DO WE NEED THIS???

exports.postActivity = async (req, res, next) => {
    try {
        const activityData = req.body;
        const postedActivity = await addActivity(activityData);
        res.status(201).send({postedActivity: postedActivity });
    } catch (error) {
        next(error);
    }
};
