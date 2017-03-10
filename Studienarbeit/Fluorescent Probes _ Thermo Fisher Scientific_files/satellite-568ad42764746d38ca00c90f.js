_satellite.pushAsyncScript(function(event, target, $variables){
  /*
    PCI Compliance POC
    - Makes request to image on secure TLS1.1/1.2 website
    - If successful, log "Y" to cookie and omni var otherwise, log "N"
    - Original thought was to use iFrame but many browsers fire 'onload' instead of 'onerror' for iFrames
    - In the event of navigation away from current page, do not log any event
    - Ensure that we preload image to help avoid DNS lookup, SSL negotiation delays
*/
(function(){
    // If Omni not present on the page, skip and try on next page load
    if ( !window.s ) return false;

    // Which omni variable should we send results to?
    var omniVariable = 'eVar46';
    
    // Which cookie should we use for tracking this?
    var cookieVariable = 'pciChecked2';
    var cookieDomain = '.thermofisher.com';
    
    // Where is our test image to load? This should live on a domain that ONLY supports TLS 1.2.
    // Note: DEV5 is an example URL. I do not have a good resource that only supports TLS 1.2
    var testImageEndpoint = 'https://secure.thermofisher.com/check.jpg';

    /* SETTINGS ABOVE - DO NOT MODIFY ANYTHING BELOW THIS LINE */

    var version = '20160312';
    var windowUnloaded = false;

    // Failure handler
    window.certCheckIframeFail = function(e){
        logResult('N');
    };
    // Success handler
    window.certCheckIframeSuccess = function(e){
        logResult('Y');
    };

    // Unload tracking - we do not want to log 'N' if user navigates awaay from page before check fires
    $(window).unload(function(){
        windowUnloaded = true;
    });

    function logDebug(text){
        if ( window.console && window.console.log ) window.console.log('[PCI]'+text);
    }

    // Generic function for sending omni data, setting cookie
    function logResult(which){

        if ( !windowUnloaded ) {
            // Generic log information
            logDebug('Check result: '+which);

            // Clear out commerce, events
            delete s.events;
            delete s.products;
            // Sends Omni
            s.linkTrackVars += ','+omniVariable;
            s[omniVariable] = which;
            s.t();

            // Clear out this variable
            delete s[omniVariable];

            // Logs Cookie
            setCookie(cookieVariable,which);
        }
    }
    // Utility function: setCookie from global.js
    function setCookie(name, value){
        // Sets on session now
        document.cookie = name+ '=' + escape(value) + '; path=/; domain='+cookieDomain+';';
    }
    // Utility function: getCookie from global.js
    function getCookie(name){
        var cname = name + '=';
        var dc = document.cookie;
        if (dc === null) return '';
        if (dc.length > 0)
        {
            var begin = dc.indexOf(cname);
            if (begin != -1)
            {
                begin += cname.length;
                var end = dc.indexOf(';', begin);
                if (end == -1) end = dc.length;
                return unescape(dc.substring(begin, end));
            }
        }
        return '';
    }

    function placeImage(successCallback, failCallback){
         // Create img element and assign src / handlers
        var $el = $('<img/>');
        if ( failCallback ) $el.error(failCallback);
        if ( successCallback ) $el.load(successCallback);
        $el.attr('src',testImageEndpoint);
        $el.css('display','none'); // tells image not to display but should still attempt to load
        $('body').append($el);
    }

    var currentCookieStatus = getCookie(cookieVariable);
    if ( currentCookieStatus == 'P' ) {
        // image preloaded. go to town
        placeImage(certCheckIframeSuccess,certCheckIframeFail);
        logDebug('Checking');

    } else if ( !currentCookieStatus ) {
        // preload the image
        placeImage();
        setCookie(cookieVariable,'P');
        logDebug('Preloading image');
    }

}());
});
