'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    extend = require('mongoose-schema-extend'),
    Schema = mongoose.Schema;
var crypto    = require('crypto');

require('MeanUser');
var MeanUserModel = mongoose.model('MeanUser');
var MeanUserSchema = MeanUserModel.schema;

/**
 * User Schema
 */
var UserSchema = MeanUserSchema.extend({
    enabled: {
        type: Boolean,
        default: false,
        required: true
    },
    confirmationToken: {
        type: String,
        required: true
    }
});

UserSchema.methods.isEnabled = function () {
    return this.enabled;
};

UserSchema.methods.generateToken = function () {
    return crypto.randomBytes(30).toString('hex');
};

mongoose.model('User', UserSchema);
