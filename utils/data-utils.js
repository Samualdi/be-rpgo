const mongoose = require("mongoose");
const User = require("../schemas/userSchema.js");
const Activity = require('../schemas/activitySchema.js');

exports.checkUserExists = async (username) => {
    const result = await User.findOne({ username: username });
    if (!result) return Promise.reject({ status: 404, msg: "Not found." });
};

exports.checkActivityExists = async (activity_id) => {
    const result = await Activity.findById(activity_id).exec();
    console.log(result);
    if(!result) return Promise.reject({ status: 404, msg: "Not found." });
}
