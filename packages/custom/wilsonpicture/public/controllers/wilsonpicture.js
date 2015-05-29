'use strict';


/* jshint -W098 */
angular.module('mean.wilsonpicture').controller('WilsonpictureController', ['$scope', 'Global', 'Pictures', 'Events',
    function ($scope, Global, Pictures, Events) {
        $scope.global = Global;
        $scope.package = {
            name: 'wilsonpicture'
        };

        Pictures.count(function(e) {
            $scope.nbPicture = e.count;
        });

        Events.count(function(e) {
            $scope.nbEvent = e.count;
        });

    }
]);

