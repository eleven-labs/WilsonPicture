'use strict';

//Events service used for events REST endpoint
angular.module('mean.wilsonpicture').factory('Events', ['$resource',
    function ($resource) {
        return $resource('api/events/:eventId', {
            eventId: '@_id'
        }, {
            update: { method: 'PUT' },
            count: {params: {count: true}}
        });
    }
]);
