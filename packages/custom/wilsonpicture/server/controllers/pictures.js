'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Picture = mongoose.model('Picture'),
  _ = require('lodash');


/**
 * Create a picture
 */
exports.create = function(req, res) {
  var picture = new Picture(req.body);
    picture.user = req.user;

    picture.save(function(err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot save the picture'+err
      });
    }
    res.json(picture);

  });
};


/**
 * List of Pictures
 */
exports.all = function (req, res) {

    if (req.query.eventId) {
        Picture.find({event: req.query.eventId}).sort('-created').exec(function (err, pictures) {
            if (err) {
                return res.status(500).json({
                    error: 'Cannot list the pictures ' + err
                });
            }

            res.json(pictures);

        });
    } else {

        Picture.find().sort('-created').exec(function (err, pictures) {
            if (err) {
                return res.status(500).json({
                    error: 'Cannot list the pictures ' + err
                });
            }
            res.json(pictures);

        });
    }
};