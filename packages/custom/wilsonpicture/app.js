'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Wilsonpicture = new Module('wilsonpicture');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Wilsonpicture.register(function (app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Wilsonpicture.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Wilsonpicture.menus.add({
            title: 'wilsonpicture example page',
            link: 'wilsonpicture example page',
            roles: ['authenticated'],
            menu: 'main'
        }
    );

    Wilsonpicture.menus.add(
        {
            title: 'Uploader une photo',
            link: 'upload_picture',
            roles: ['authenticated'],
            menu: 'main'
        });

    Wilsonpicture.aggregateAsset('css', 'wilsonpicture.css');

    /**
     //Uncomment to use. Requires meanio@0.3.7 or above
     // Save settings with callback
     // Use this for saving data from administration pages
     Wilsonpicture.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

     // Another save settings example this time with no callback
     // This writes over the last settings.
     Wilsonpicture.settings({
        'anotherSettings': 'some value'
    });

     // Get settings. Retrieves latest saved settigns
     Wilsonpicture.settings(function(err, settings) {
        //you now have the settings object
    });
     */

    return Wilsonpicture;
});
