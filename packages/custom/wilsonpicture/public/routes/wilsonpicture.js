'use strict';

angular.module('mean.wilsonpicture').config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider.state('wilsonpicture example page', {
            url: '/wilsonpicture/example',
            templateUrl: 'wilsonpicture/views/index.html'
        });

        $stateProvider.state('upload_picture', {
            url: '/wilsonpicture/upload',
            templateUrl: 'wilsonpicture/views/upload.html'
        });


    }
]);