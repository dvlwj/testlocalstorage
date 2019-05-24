var uid;
try {
    uid = new Date;
    localStorage.setItem("uid", uid);
    localStorage.removeItem("uid");
    console.log("Local storage is enabled in this browser.")
    window.location.href("http://fwd.com.sg/travel-insurance/online-quote/quickQuestions");
} catch (exception) {
    console.log("Local storage is disabled in this browser.")
    var osDetect = navigator.appVersion.toLowerCase()
    var OSName = "Unknown OS";
    console.log(navigator.appVersion + "<br>")
    // document.write(navigator.appVersion.indexOf("Win") + "<br>")
    if (osDetect.indexOf("win") != -1) {
        OSName = "Windows"
    } else if (osDetect.indexOf("mac") != -1) {
        try {
            if (osDetect.indexOf("iphone") != -1) { OSName = "iOS" }
            if (osDetect.indexOf("ipad") != -1) { OSName = "iOS" }
            if (osDetect.indexOf("ipod") != -1) { OSName = "iOS" }
        } catch (exception) {
            OSName = "MacOS"
        }
    } else if (osDetect.indexOf("x11") != -1) {
        OSName = "UNIX"
    } else if (osDetect.indexOf("linux") != -1) {
        if (osDetect.indexOf("android") != -1) {
            OSName = "Android"
        } else {
            OSName = "Linux"
        }
    } else if (osDetect.indexOf("android") != -1) {
        OSName = "Android"
    } else {
        OSName = navigator.appVersion
    }
    console.log('Your OS: ' + OSName);
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    if (OSName == "Android") {
        // <a href="intent://#Intent;scheme=http;package=com.example.myapp;end"> 
        var urlAndroid = "intent://www.fwd.com.sg/travel-insurance/online-quote/quickQuestions#Intent;scheme=http;package=com.android.chrome;end"
        document.getElementById("aClick").href = urlAndroid
        modal.style.display = "block";
    } else if (OSName == "iOS"){
        var urlIOS = "googlechrome://fwd.com.sg/travel-insurance/online-quote/quickQuestions"
        document.getElementById("aClick").href = urlIOS
        modal.style.display = "block";
    }
    // When the user clicks on the button, open the modal 
    // btn.onclick = function () {
        // modal.style.display = "block";
    // }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function launchiOSApp(url) {
        var appleAppStoreLink = 'https://itunes.apple.com/us/app/google-chrome/id535886823';
        var now = new Date().valueOf();
        setTimeout(function () {
            if (new Date().valueOf() - now > 500) return;
            window.location = appleAppStoreLink;
        }, 100);
        window.location = url;
    }

}
