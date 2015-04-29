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

angular.module('mean.wilsonpicture').controller('WilsonpictureUploadController', ['$scope', 'Global', 'Wilsonpicture', 'Pictures',
    function ($scope, Global, Wilsonpicture, Pictures) {
        $scope.global = Global;
        $scope.package = {
            name: 'wilsonpicture'
        };
        $scope.images = [];

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
            console.log("Uploads OK");
        };


        $scope.submitFiles = function () {
            $scope.images.forEach(function (file) {
                    //On save la picture dans mongo
                    console.log(file);

                    var picture = new Pictures({
                        name: file.name,
                        url: file.src,
                        created: file.created
                    });
                    picture.$save(function(response) {
                        console.log("Upload ok vers serveur");
                    });


                 /*   var picture = new Picture();
                    // picture.user = req.user;
                    picture.name = file.name;
                    picture.src = file.src;
                    picture.created = file.created;


                    picture.save(function (err) {
                        if (err) {
                            console.log('Cannot save the article');
                        }
                    });

*/
                }
            );


        }

    }
]);


