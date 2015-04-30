'use strict';

var pictures = require('../controllers/pictures');


module.exports = function (Pictures, app, auth) {


    app.route('/pictures')
        .post(auth.requiresLogin, pictures.create);


};
