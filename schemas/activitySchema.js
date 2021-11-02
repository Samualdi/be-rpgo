const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    map: {
        type: String,
        required: true,
    },
    steps: {
        type: Number,
    },
    distance: {
        type: Number,
        required: true,
    },
    elevation: {
        type: Number,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    activityType: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
    }, 
})

module.exports = mongoose.model('Activity', activitySchema);