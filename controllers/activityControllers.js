const { fetchActivities } = require('../models/activity-models.js');

exports.getActivities = async (req, res, next) => {
    try {
        const activities = await fetchActivities()
        res.status(200).send({activities: activities});
    } catch (error) {
        next(error);
    }
};

exports.getActivityById = async (req, res, next) => {
    try {
        // Function Goes Here
        res.status(200).send();
    } catch (error) {
        next(error);
    }
};

exports.patchActivityById = async (req, res, next) => {
    try {
        // Function Goes Here
        res.status(200).send();
    } catch (error) {
        next(error);
    }
};

exports.postActivity = async (req, res, next) => {
    try {
        // Function Goes Here
        res.status(201).send();
    } catch (error) {
        next(error);
    }
};