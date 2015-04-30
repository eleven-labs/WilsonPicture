'use strict';

var events = require('../controllers/events');


module.exports = function (Events, app, auth) {

    app.route('/events')
        .get(events.all)
        .post(auth.requiresLogin, events.create);

};
