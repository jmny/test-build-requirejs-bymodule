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

define(function bootstrap ( require ) {

    var App      = require( 'lib/core/app' ),
        A        = require('module/a/main');

});
