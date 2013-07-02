(function (navigator, window, document) {
    'use strict';

    function setName(name, touch) {
        window.isTouch = !! touch;
        return name + (window.isTouch ? '-touch' : '');
    }

    var ua = navigator.userAgent.toString(),
        stylesheet = '';
    if (ua.match('MSIE 9')) stylesheet = setName('msie9', !! ua.match('IEMobile'));
    else if (ua.match('MSIE 8')) stylesheet = setName('msie8', !! ua.match('IEMobile'));
    else if (ua.match('MSIE 7')) stylesheet = setName('msie7', !! ua.match('IEMobile'));
    else if (ua.match('WebKit')) stylesheet = setName('webkit', !! ua.match(/(Android|iP(ad|od|hone)|Mobile|Tablet)/));
    else if (ua.match('Firefox')) stylesheet = setName('mozilla', !! ua.match(/(Android|iP(ad|od|hone)|Mobile|Tablet)/));
    else if (ua.match('Opera')) stylesheet = setName('opera', !! ua.match(/(Mobile|Mini)/));
    // If nothing else then we include the IE10 stylesheet.
    // IE10 is has no vendor prefixes and adheres to standards,
    // so it's perfect for a 'general' stylesheet
    else stylesheet = setName('msie10', !! ua.match(/(Touch|Mobile|Phone|Tablet|Android|iP(ad|od|hone))/));

    document.write('<link rel="stylesheet" type="text/css" href="css/' + stylesheet + '.css" />');
})(navigator, window, document);