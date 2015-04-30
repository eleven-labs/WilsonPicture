'use strict';

//Events service used for events REST endpoint
angular.module('mean.wilsonpicture').factory('Event', ['$resource',
  function($resource) {
    return $resource('events/:eventId', {
      eventId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
