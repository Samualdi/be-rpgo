const mongoose = require('mongoose');
const Activity = require('../schemas/activitySchema.js');

exports.fetchActivitiesByUsername = async (username) => {
    const result = await Activity.find({username: username}).exec();
    return result;
}

exports.fetchActivityById = async (activity_id) => {
    const result = await Activity.findById(activity_id).exec();
    return result;

}

exports.addActivity = async (activityData) => {
    console.log(activityData);
    const activityToPost = new Activity({

    });
    const result = await activityToPost.save(err => {console.log(err)});
    return result;
    

    
}