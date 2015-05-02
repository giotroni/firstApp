var destinationType; // sets the format of returned value

var app = {
    
    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function(){
        document.addEventListener("deviceready", app.onDeviceReady, false);
    },
    onDeviceReady: function(){
        app.showAlert("Chiamata alla fine del caricamento","msg");
        destinationType=navigator.camera.DestinationType;
        $("#btnEntra").on("click", app.nextPage);
        $("#btnFoto").on("click", app.capturePhoto);
        $("#btnFoto1").on("click", app.capturePhoto1);
    },
    nextPage: function(){
        app.showAlert("Altra pagina","msg");
        $("#btnFoto").show();
        var smallImage = document.getElementById('imgFoto');
        smallImage.src = "img/rugby.jpg";
    },
    capturePhoto: function(){
        app.showAlert("Fotografa","msg");
        $("#btnFoto").hide();
        navigator.camera.getPicture(
            function(imgData){
                var smallImage = document.getElementById('smallImage');
                // Unhide image elements
                //
                smallImage.style.display = 'block';
                // Show the captured photo
                // The inline CSS rules are used to resize the image
                //
                smallImage.src = imageData;

                app.showAlert("Ok!","msg");
            },
            function fail(error){
                app.showAlert("failed : " + error.code,"msg");
            },
            {
                quality: 50 }
        );
    },
    capturePhoto: function(){
        app.showAlert("Fotografa","msg");
        $("#btnFoto").hide();
        navigator.camera.getPicture(
            function(imgData){
                // Get image handle
                //
                var largeImage = document.getElementById('largeImage');
                // Unhide image elements
                //
                largeImage.style.display = 'block';
                // Show the captured photo
                // The inline CSS rules are used to resize the image
                //
                largeImage.src = imageURI;
                          
                app.showAlert("Ok!","msg");
            },
            function fail(error){
                app.showAlert("failed : " + error.code,"msg");
            },
            {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI
            }
        );
    }
};



app.initialize();