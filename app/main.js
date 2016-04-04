$(document).ready(function () {
    $.ajax('user/config.json').then(function (config) {
        var container = $('body')[0];
        var winnieCm = nsGmx.createGmxApplication(container, config);
        winnieCm.create().then(function () {
            console.log('ready');
            window.runUserScript && window.runUserScript.call(this, winnieCm);
        }, function (err) {
            console.log('failed to create gmxApplication');
        })
    }, function () {
        console.error('config not found');
    });
});
