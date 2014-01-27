
define('lib/core/mediator',['require'],function ( require ) {
    //mediator
});


define('lib/core/app',['require','lib/core/mediator'],function ( require ) {

    //app.js
    var mediator = require( 'lib/core/mediator' );
    return {};
});

define('module/a/dep_a1',['require','lib/core/mediator'],function ( require ) {

    //dep_a1.js
    var mediator = require( 'lib/core/mediator' );
    return {};
});

define('module/a/main',['require','lib/core/mediator','module/a/dep_a1'],function ( require ) {

    // a/main
    var mediator = require( 'lib/core/mediator' );
    var internalDeps = require('module/a/dep_a1');
    return {};
});


//------------------------------------------------------------->
// The regular main start here !
//------------------------------------------------------------->

// RequireJS configuration.
requirejs.config({
  // aliases
  paths: {
    "jquery": 'lib/vendor/jquery',
    "backbone": 'lib/vendor/backbone-1.0.0',
    "underscore": 'lib/vendor/underscore-1.4.4',
  },

  // modules
  packages: [
      'module/a',
      'module/b',
      'module/c'
    ],

  shim: {
    "backbone": { deps: [ 'underscore', 'jquery' ]},
  },

  deps: [
      "underscore",
      "backbone",
    ],

  waitSeconds: 15
});

define('main',['require','lib/core/app','module/a/main'],function bootstrap ( require ) {

    var App      = require( 'lib/core/app' ),
        A        = require('module/a/main');

});
