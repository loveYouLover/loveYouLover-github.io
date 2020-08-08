~function(){
    var baseUrl = "http://www.suxiaokun.com";
    var fullUrl = window.location.href;

    if(fullUrl){
        baseUrl = fullUrl.substr(0,fullUrl.indexOf("\/",7))
    }

    var os = function (){
        var ua = navigator.userAgent,
            isWindowsPhone = /(?:Windows Phone)/.test(ua),
            isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
            isAndroid = /(?:Android)/.test(ua),
            isFireFox = /(?:Firefox)/.test(ua),
            isChrome = /(?:Chrome|CriOS)/.test(ua),
            isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
            isPhone = /(?:iPhone)/.test(ua) && !isTablet,
            isPc = !isPhone && !isAndroid && !isSymbian;
        return {
            isTablet: isTablet,
            isPhone: isPhone,
            isAndroid: isAndroid,
            isPc: isPc
        };
    }();

    if (os.isAndroid || os.isPhone) {
        if(fullUrl.indexOf("mobile") == -1){
            location.href = baseUrl+"/mobile/index.html"
        }
    } else if (os.isTablet) {
        if(fullUrl.indexOf("tablet") == -1){
            location.href = baseUrl+"/tablet/index.html"
        }
    } else if(os.isPc) {
        if(fullUrl.indexOf("pc") == -1){
            location.href = baseUrl+"/pc/index.html"
        }
    }

}()