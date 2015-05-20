'use strict';

angular.module('mean.wilsonpicture').config(['$stateProvider',
    function ($stateProvider) {

        $stateProvider.state('events', {
            url: '/wilsonpicture/events',
            templateUrl: 'wilsonpicture/views/events.html'
        });

        $stateProvider.state('upload_picture', {
            url: '/wilsonpicture/upload',
            templateUrl: 'wilsonpicture/views/upload.html'
        });

        $stateProvider.state('show_event', {
            url: '/wilsonpicture/events/:eventId',
            templateUrl: 'wilsonpicture/views/view.html'
//            resolve: {
  //              loggedin: checkLoggedin
   //         }
        });
    }
]);
