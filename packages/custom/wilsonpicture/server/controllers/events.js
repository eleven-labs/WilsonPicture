'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Event = mongoose.model('Event'),
    _ = require('lodash');


/**
 * Find event by id
 */
exports.event = function(req, res, next, id) {
    Event.load(id, function(err, event) {
        if (err) return next(err);
        if (!event) return next(new Error('Failed to load event ' + id));
        req.event = event;
        next();
    });
};


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
};

/**
 * Show an event
 */
exports.show = function(req, res) {
    res.json(req.event);
};


/**
 * Update an event
 */
exports.update = function(req, res) {
    var event = req.event;
    event = _.extend(event, req.body);

    event.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot update the event'
            });
        }
        res.json(event);
    });
};

/**
 * Delete an event
 */
exports.remove = function(req, res) {
    Event.findOne({_id: req.params.eventId}).sort('-created').exec(function (err, event) {
        if (err) {
            return res.status(500).json({
                error: 'An error occurred while fetching event : ' + event
            });
        }

        if (req.user._id == event.user) {
            event.remove();
            res.status(200).json({
                msg: 'Event deleted'
            });
        } else {
            res.status(403).json({
                msg: 'You can\'t delete this event'
            });
        }
    });
};

/**
 * List of Events
 */
exports.all = function (req, res) {
    if (req.query.count) {
        Event.count().exec(function(err, nb) {
            if (err) {
                return res.status(500).json({
                    error: 'Cannot list the event ' + err
                });
            }
            res.json({count: nb});
        })
    } else {
        Event.find().sort('-created').exec(function (err, events) {
            if (err) {
                return res.status(500).json({
                    error: 'Cannot list the events ' + err
                });
            }
            res.json(events);
        });
    }
};
