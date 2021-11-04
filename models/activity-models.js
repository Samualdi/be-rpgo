const mongoose = require('mongoose');
const Activity = require('../schemas/activitySchema.js');

exports.fetchActivitiesByUsername = async (username) => {
    const result = await Activity.find({ username: username }).sort({date: -1}).exec();
    return result;
}

exports.fetchActivityById = async (activity_id) => {
    const result = await Activity.findById(activity_id).exec();
    return result;

}

exports.addActivity = async (activityData) => {
    let activityToPost = new Activity(activityData);
    const result = await activityToPost.save();
    return result;  
}