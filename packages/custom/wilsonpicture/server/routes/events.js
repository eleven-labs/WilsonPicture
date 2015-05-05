'use strict';

var events = require('../controllers/events');


module.exports = function (Events, app, auth) {

    app.route('/events')
        .get(events.all)
        .post(auth.requiresLogin, events.create);

    app.route('/events/:eventId')
        .get(auth.isMongoId, events.show)
        .put(auth.isMongoId, auth.requiresLogin, events.update)


    app.param('eventId', events.event);
};
