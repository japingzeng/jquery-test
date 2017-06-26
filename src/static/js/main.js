/**
 * Created by Administrator on 2017/6/22.
 */
'use strict';
requirejs.config({
    baseUrl: 'static/js',
    waitSeconds: 200,
    paths: {
        'jquery': 'jquery/jquery-1.11.1.min',
        'bootstrap': 'bootstrap/bootstrap.min'
    },
    shim: {
        'jquery': {exports: '$'},
        'bootstrap': {deps: ['jquery']}
    },
    //prevent require cache
    //urlArgs: Date.now()
});

require(["app", "test1"], function(app, test1) {
    app.click1buton();
    test1.f();
});