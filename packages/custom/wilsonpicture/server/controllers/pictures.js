'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Picture = mongoose.model('Picture'),
  _ = require('lodash');


/**
 * Create an article
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
