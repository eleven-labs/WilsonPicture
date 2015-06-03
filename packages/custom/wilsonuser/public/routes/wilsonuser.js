'use strict';

angular.module('mean.wilsonuser')
    .config(['$viewPathProvider', function($viewPathProvider) {
        $viewPathProvider.override('users/views/register.html', 'wilsonuser/views/register.html');
    }]);
