'use strict';

/* jshint -W098 */
angular.module('mean.wilsonuser').controller('WilsonuserController', ['$scope', 'Global', 'Wilsonuser',
  function($scope, Global, Wilsonuser) {
    $scope.global = Global;
    $scope.package = {
      name: 'wilsonuser'
    };
  }
]);
