const mongoose = require('mongoose');
const Activity = require('../schemas/activitySchema.js');

exports.fetchActivitiesByUsername = async (username) => {
    const result = await Activity.find({ username: username }).sort({date: -1}).exec();
    return result;
}

exports.fetchActivityById = async (activity_id) => {
    const result = await Activity.findById(activity_id).exec();
    if (!result) return Promise.reject({ status: 404, msg: "Not found." });
    return result;

}

exports.addActivity = async (activityData) => {
    const activityToPost = new Activity(activityData);
    const result = await activityToPost.save();
    return result;  
}

exports.updateActivityById = async (activity_id, activityUpdate) => {
    const result = await Activity.findByIdAndUpdate(
        activity_id,
        activityUpdate,
        { new: true }
    ).exec();

    console.log(result);
    return result;
}