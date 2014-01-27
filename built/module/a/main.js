
define('module/a/dep_a1',['require','lib-core'],function ( require ) {

    //dep_a1.js
    var mediator = require( 'lib-core' ).core.mediator;
    return {};
});

define('module/a/main',['require','lib-core','module/a/dep_a1'],function ( require ) {

    // a/main
    var mediator = require( 'lib-core' ).core.mediator;
    var internalDeps = require('module/a/dep_a1');
    return {};
});


define('module/a', ['module/a/main'], function (main) { return main; });
