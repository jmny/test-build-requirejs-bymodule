
define('module/c/dep_c1',['require'],function ( require ) {

    //dep_a1.js
    return {};
});


define('module/c/main',['require','module/c/dep_c1'],function ( require ) {

    // c/main
    var mediator = require('module/c/dep_c1');
    return {};
});


define('module/c', ['module/c/main'], function (main) { return main; });
