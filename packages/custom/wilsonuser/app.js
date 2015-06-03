'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Wilsonuser = new Module('wilsonuser');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Wilsonuser.register(function(app, auth, users, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Wilsonuser.routes(app, auth, users, database);

  //We are adding a link to the main menu for all authenticated users
    /*
  Wilsonuser.menus.add({
    title: 'wilsonuser example page',
    link: 'wilsonuser example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  */
  
  Wilsonuser.aggregateAsset('css', 'wilsonuser.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Wilsonuser.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Wilsonuser.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Wilsonuser.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Wilsonuser;
});
