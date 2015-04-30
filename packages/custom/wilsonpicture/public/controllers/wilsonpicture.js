'use strict';


/* jshint -W098 */
angular.module('mean.wilsonpicture').controller('WilsonpictureController', ['$scope', 'Global', 'Wilsonpicture',
    function ($scope, Global, Wilsonpicture) {
        $scope.global = Global;
        $scope.package = {
            name: 'wilsonpicture'
        };

    }
]);

angular.module('mean.wilsonpicture').controller('WilsonpictureUploadController', ['$scope', 'Global', 'Wilsonpicture', 'Pictures', 'Events',
    function ($scope, Global, Wilsonpicture, Pictures, Events) {
        $scope.global = Global;
        $scope.package = {
            name: 'wilsonpicture'
        };
        $scope.images = [];
        $scope.event = {
            name: "",
            date: null,
            location: null
        };

        $scope.selectedEvent = null;

        Events.query(function(events) {
            $scope.events = events;
        });


        $scope.uploadCallback= function(file) {
             console.log(file);
        };

        $scope.uploadFileCallback = function (file) {
            if (file.type.indexOf('image') !== -1) {

                //Randomize filename
                console.log(file);
                $scope.images.push(file);

            }
            else {
                $scope.files.push(file);
            }
        };

        $scope.uploadFinished = function (files) {
            console.log("Uploads OK");
        };


       $scope.submitEvent = function () {
           var newEvent = new Events({
               name: $scope.event.name,
               date: $scope.event.date,
               location: $scope.event.location
           });



           newEvent.$save(function(response) {
               console.log("Event save");
               Events.query(function(events) {
                   $scope.events = events;
               });
           });
       };

        $scope.submitFiles = function () {
            $scope.images.forEach(function (file) {

                    console.log(file);

                    var picture = new Pictures({
                        name: file.name,
                        url: file.src,
                        created: file.created,
                        event: $scope.selectedEvent
                    });

                    picture.$save(function(response) {
                        console.log("Upload ok vers serveur");
                    });

                }
            );


        }

    }
]);


