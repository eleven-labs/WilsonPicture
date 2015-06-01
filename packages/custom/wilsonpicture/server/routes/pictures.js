'use strict';

var pictures = require('../controllers/pictures');


module.exports = function (Pictures, app, auth) {


    app.route('/api/pictures')
        .get(pictures.all)
        .post(auth.requiresLogin, pictures.create);
    app.route('/api/pictures/:pictureId').delete(auth.requiresLogin, pictures.remove);


};
