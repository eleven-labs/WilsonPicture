'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.wilsonpicture').factory('Pictures', ['$resource', function ($resource) {
    return $resource('api/pictures/:pictureId', {
        pictureId: '@_id'
    }, {
        update: {method: 'PUT'},
        count: {params: {count: true}}
    });
}
]);
