const mongoose = require('mongoose');
const Activity = require('../schemas/activitySchema.js');

exports.fetchActivities = async () => {
    const result = await Activity.find({});
    return result;
}