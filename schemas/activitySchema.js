const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    distanceTravelled: {
        type: Number,
        required: true,
    },
    metersClimbed: {
        type: Number,
        required: true,
    },
    stepCount: {
        type: Number,
        required: true,
    },
    timeElapsed: {
        type: String,
        required: true,
    },
    activityType: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
    },
    challenge_ID: {
        type: String,
        required: true,
    },
    polylineArray: {
        type: Array,
        required: true,
    } 
    
})

module.exports = mongoose.model('Activity', activitySchema);