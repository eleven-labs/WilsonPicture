'use strict';

angular.module('mean.wilsonpicture').controller('WilsonpictureUploadController', ['$scope', 'Global', 'Pictures', 'Events',
    function ($scope, Global, Pictures, Events) {
        $scope.global = Global;
        $scope.package = {
            name: 'wilsonpicture'
        };
        $scope.images = [];
        $scope.uploadStatus = 0;
        $scope.event = {
            name: "",
            date: null,
            location: null
        };

        $scope.selectedEvent = null;
        $scope.etape1 = 1;

        Events.query(function (events) {
            $scope.events = events;
        });

        $scope.uploadCallback = function (file) {
            $scope.uploadStatus = 0;
        };

        $scope.uploadFileCallback = function (file) {
            if (file.type.indexOf('image') !== -1) {
                //Randomize filename
                $scope.images.push(file);
            }
            else {
                $scope.files.push(file);
            }
        };

        $scope.uploadFinished = function (files) {

        };

        $scope.submitEvent = function () {
            var newEvent = new Events({
                name: $scope.event.name,
                date: $scope.event.date,
                location: $scope.event.location,
                mainPicture: null
            });

            newEvent.$save(function (response) {
                console.log("Event saved");
                Events.query(function (events) {
                    $scope.events = events;
                });
            });
        };

        $scope.submitFiles = function () {
            var preview = false;

            $scope.uploadStatus = 1;
            $scope.images.forEach(function (file) {
                var picture = new Pictures({
                    name: file.name,
                    url: file.src,
                    created: file.created,
                    event: $scope.selectedEvent
                });

                picture.$save(function (response) {
                    console.log("Picture Saved");
                    //Si pas de photo par defaut dans l'event, on ajoute la premiere uploadée
                    Events.get({
                        eventId: $scope.selectedEvent
                    }, function (updatedEvent) {
                        if (!updatedEvent.mainPicture && !preview) {
                            preview = true;
                            updatedEvent.mainPicture = file.src;

                            updatedEvent.$update(function (response) {
                                console.log("event updated");
                            });
                        }
                    });
                });
            });
            $scope.images = [];
        }
    }
]);
