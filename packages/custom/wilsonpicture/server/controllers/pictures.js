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
 * Delete a picture
 */
exports.remove = function(req, res) {
    Picture.findOne({_id: req.params.pictureId}).sort('-created').exec(function (err, picture) {
        if (err) {
            return res.status(500).json({
                error: 'An error occurred while fetching picture : ' + picture
            });
        }

        if (req.user._id == picture.user) {
            picture.remove();
            res.status(200).json({
                msg: 'Picture deleted'
            });
        } else {
            res.status(403).json({
                msg: 'You can\'t delete this picture'
            });
        }
    });

};

/**
 * List of Pictures
 */
exports.all = function (req, res) {
    if (req.query.count) {
        Picture.count().exec(function(err, nb) {
            if (err) {
                return res.status(500).json({
                    error: 'Cannot list the pictures ' + err
                });
            }

            res.json({count: nb});
        })

    }
    else if (req.query.eventId) {
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