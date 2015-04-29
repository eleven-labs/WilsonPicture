'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.wilsonpicture').factory('Pictures', ['$resource',
  function($resource) {
    return $resource('pictures/:pictureId', {
      pictureId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
