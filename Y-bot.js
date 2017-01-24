/*
*   casperjs Y-bot.js
*/
console.info("Y-combinator bot attempt to start");
// DEPENDENCIES:
const S = require('./settings.json')
    , casper = require('casper').create({
        waitTimeout: 15000,
        stepTimeout: 15000,
        /*clientScripts: [
            'includes/jq.js',      // These two scripts will be injected in remote 
        ],*/
        pageSettings: {
            userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:23.0) Gecko/20130404 Firefox/23.0",
            loadImages: true,        // The WebPage instance used by Casper will
            loadPlugins: true         // use these settings
        },
        logLevel: "debug",              // Only "info" level messages will be logged
        verbose: true                  // log messages will be printed out to the console
    });
//
// BOT INIT:
//



//
//Bot start
//

casper.start(S.channel, function () {
    this.waitForSelector(S.videoUL);
});
/*
casper.start(S.google, function () {
    this.waitForSelector('form[action="/search"]');
});


casper.then(function () {
    this.fill('form[action="/search"]', { q: S.channel }, true);
    this.waitForSelector(S.googleOUTPUT);
});


casper.then(function () {
   // this.click(S.googleOUTPUT);
    //
    // ТУТ ПАДАЕТ
    //
    this.echo("Я щас умруууууууууууу!!" + this.getCurrentUrl());
    this.waitForSelector(S.videoUL);
});
*/
casper.then(function () {
    this.echo("Я ожил!??????????????????" + this.getCurrentUrl());
    this.click('' + S.videoLI + ':nth-child(' + getRandomInt(1, 3) + ') a.yt-uix-sessionlink');
    this.waitForSelector(S.videoPLAYER);
});


casper.then(function () {
    this.echo('SHOW VIDEO! ' + this.getCurrentUrl());
    this.click(S.videoPLAYER);
});
casper.then(function () {
    this.click(S.videoPLAYER);
});
casper.then(function () {
    this.click(S.videoPLAYER);
});
casper.then(function () {
    this.click(S.videoPLAYER);
    this.waitForSelector("div#watch7-sidebar-modules");
});
casper.then(function () {
    this.click("ul.video-list li:nth-child(" + getRandomInt(2, 7) + ") a");
});
casper.then(function () {
    this.click("ul.video-list li:nth-child(" + getRandomInt(2, 7) + ") a");
/*
    var links = this.evaluate(function () {
        var results = [];
        var elts = document.getElementsByClassName("ii");
        for (var i = 0; i < elts.length; i++) {
            var link = elts[i].getElementsByTagName("a")[0].getAttribute("href");
            var headline = elts[i].firstChild.textContent;
            results.push({ link: link, headline: headline });
        }
        return results;
    });
*/




});
casper.then(function () {
    this.echo('Я кончел' + this.getCurrentUrl()).exit();
});
//
// we inside video
//

//
// BOT RUN:
//
casper.run();
//
// utils:
//
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getVideoLinks() {
    return document.querySelectorAll('li.channels-content-item').length;
}