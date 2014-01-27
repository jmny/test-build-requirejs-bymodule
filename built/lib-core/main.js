
define('lib-core/util/log',['require'],function ( require ) {

    //util_log.js
    return {};
});


define('lib-core/core/app',['require','lib-core'],function ( require ) {

    //app.js
    var mediator = require( 'lib-core' ).core.mediator;
    return {};
});

define('lib-core/core/mediator',['require'],function ( require ) {
    //mediator
});


define('lib-core/main',['require','lib-core/util/log','lib-core/core/app','lib-core/core/mediator'],function ( require ) {
    return {
        util:{
            log: require('lib-core/util/log'),
        },
        core:{
            app: require( 'lib-core/core/app' ),
            mediator: require('lib-core/core/mediator'),
        }
    };
});

define('lib-core', ['lib-core/main'], function (main) { return main; });
