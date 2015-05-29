'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;




/**
 * Event Schema
 */
var EventSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    location: {
      type: String
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    mainPicture: {
        type: String
    }
});

/**
 * Statics
 */
EventSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('Event', EventSchema);
