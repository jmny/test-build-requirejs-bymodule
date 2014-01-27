
define('module/b/main',['require','lib-core'],function ( require ) {

    // b/main
    var log = require( 'lib-core' ).util.log;
    return {};
});


define('module/b', ['module/b/main'], function (main) { return main; });
