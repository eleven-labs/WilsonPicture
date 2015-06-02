'use strict';

var events = require('../controllers/events');


module.exports = function (Events, app, auth) {

    app.route('/api/events')
        .get(events.all)
        .post(auth.requiresLogin, events.create);

    app.route('/api/events/:eventId')
        .get(auth.isMongoId, events.show)
        .put(auth.isMongoId, auth.requiresLogin, events.update)
        .delete(auth.requiresLogin, events.remove);

    app.param('eventId', events.event);
};
