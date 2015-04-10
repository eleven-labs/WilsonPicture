'use strict';

/* jshint -W098 */
angular.module('mean.wilsonpicture').controller('WilsonpictureController', ['$scope', 'Global', 'Wilsonpicture',
  function($scope, Global, Wilsonpicture) {
    $scope.global = Global;
    $scope.package = {
      name: 'wilsonpicture'
    };
  }
]);
