Creata un nuovo repository in github
ad es: firstApp

Da GitHub per win si clona il repository
<b>ESENMPIO BASE</b>

<b>config.xml</b>
<?xml version="1.0" encoding="UTF-8"?>
<widget xmlns     = "http://www.w3.org/ns/widgets"
        xmlns:gap = "http://phonegap.com/ns/1.0"
        id        = "it.troni.firstapp"
        versionCode="10"
        version   = "1.1.0">

    <name>firstApp</name>

    <description>
        Una prova
    </description>

    <author href="http://www.troni.it" email="giorgio@troni.it">
        Girogio Troni
    </author>
 
    <gap:platform name="android" />
    
    <icon src="img/icon.jpg" />
    
    <feature name="http://api.phonegap.com/1.0/camera"/>
    <feature name="http://api.phonegap.com/1.0/contacts"/>
    <feature name="http://api.phonegap.com/1.0/file"/>
    <feature name="http://api.phonegap.com/1.0/geolocation"/>
    <feature name="http://api.phonegap.com/1.0/media"/>
    <feature name="http://api.phonegap.com/1.0/network"/>
    <feature name="http://api.phonegap.com/1.0/notification"/>

</widget>

<b>index.html</b>

<!DOCTYPE html> 
<html>
<head>
    <title>firstAppa</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
	
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.css">
    
    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="http://code.jquery.com/mobile/1.4.4/jquery.mobile-1.4.4.min.js"></script>
    
    <script src="phonegap.js"></script>
    
    <script src="js/main.js"></script>


</head>

<body>
    <div data-role="page" id="page-home" class="copertina">
        <div data-role="header">
            <h2>first Appa</h2>
        </div>
        <div role="main" class="ui-content" id="content-home">
	    <div id="lblDesc"></div>
        </div>
        <div data-role="footer" data-position="fixed">
            <a href="#" data-role="button" id="btnEntra" data-icon="arrow-r">Entra</a>
        </div>

    </div><!-- /page-home -->
</body>
</html>

<b>main.js</b>
var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    initialize: function() {
        app.showAlert("Ecco","qua");
        this.bindEvents();
    },
    bindEvents: function(){
        document.addEventListener("deviceready", app.onDeviceReady, false)
    },
    onDeviceReady: function(){
        app.showAlert("anche qua","qua");
    }
};


app.initialize();

