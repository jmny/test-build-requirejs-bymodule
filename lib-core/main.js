define(function ( require ) {
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
