'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Picture Schema
 */
var PictureSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    event: {
        type: String,
        required: true
    }
});

/**
 * Statics
 *
ArticleSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};
*/
mongoose.model('Picture', PictureSchema);
