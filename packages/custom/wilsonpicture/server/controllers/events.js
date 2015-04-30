'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Event = mongoose.model('Event'),
    _ = require('lodash');


/**
 * Create an event
 */
exports.create = function (req, res) {
    var event = new Event(req.body);
    event.user = req.user;

    event.save(function (err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot save the event ' + err
            });
        }
        res.json(event);

    });
}

/**
 * List of Events
 */
exports.all = function (req, res) {
    Event.find().sort('-created').exec(function (err, events) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot list the events ' + err
            });
        }
        res.json(events);

    });
};
