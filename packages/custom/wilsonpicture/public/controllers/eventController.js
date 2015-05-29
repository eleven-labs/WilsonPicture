'use strict';

/**
 * Event show controller
 * @template : view.html
 */
angular.module('mean.wilsonpicture').controller('EventsViewController', ['$scope', '$stateParams', 'Global', 'Events', 'Pictures',
    function ($scope, $stateParams, Global, Events, Pictures) {
        $scope.global = Global;
        $scope.package = {
            name: 'wilsonpicture'
        };

        Events.get({
            eventId: $stateParams.eventId
        }, function (event) {
            $scope.event = event;
        });

        Pictures.query({eventId: $stateParams.eventId}, function (pictures) {
            $scope.pictures = pictures;

        });

    }
]);

/**
 * Event list controller
 * @template: events.html
 */
angular.module('mean.wilsonpicture').controller('EventsController', ['$scope', 'Global', 'Events',
    function ($scope, Global, Events) {
        $scope.global = Global;
        $scope.package = {
            name: 'wilsonpicture'
        };

        Events.query(function (events) {
            $scope.events = events;
        });


    }
]);

