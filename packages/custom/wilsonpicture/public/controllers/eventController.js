'use strict';

/**
 * Event show controller
 * @template : view.html
 */
angular.module('mean.wilsonpicture').controller('EventsViewController', ['$scope', '$stateParams', 'Global', 'Events', 'Pictures', 'MeanUser',
    function ($scope, $stateParams, Global, Events, Pictures, MeanUser) {
        $scope.global = Global;
        $scope.package = {
            name: 'wilsonpicture'
        };
        $scope.user = MeanUser.user;

        Events.get({
            eventId: $stateParams.eventId
        }, function (event) {
            $scope.event = event;
        });

        Pictures.query({eventId: $stateParams.eventId}, function (pictures) {
            $scope.pictures = pictures;
        });


        $scope.deletePicture = function (picture_id, index) {
            var picture = new Pictures({_id: picture_id});
            picture.$remove(function(success) {
                $scope.pictures.splice(index, 1);
            },function(error) {
                alert(error);
            });
        };
    }
]);

/**
 * Event list controller
 * @template: events.html
 */
angular.module('mean.wilsonpicture').controller('EventsController', ['$scope', 'Global', 'Events', 'MeanUser',
    function ($scope, Global, Events, MeanUser) {
        $scope.global = Global;
        $scope.package = {
            name: 'wilsonpicture'
        };
        $scope.user = MeanUser.user;

        Events.query(function (events) {
            $scope.events = events;
        });

        $scope.deleteEvent = function (event_id, index) {
            var event = new Events({_id: event_id});
            event.$remove(function(success) {
                $scope.events.splice(index, 1);
            },function(error) {
                alert(error);
            });
        };
    }
]);

