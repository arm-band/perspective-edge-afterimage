$(() => {
    const browser = bowser.getParser(window.navigator.userAgent);
    const $body = $("body");
    if (browser.getBrowserName().indexOf('Edge') > -1) {
        //Edgeならば
        $body.addClass("msEdge");
    }
});
