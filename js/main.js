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
        $("#btnFoto").hide();
        $("#btnEntra").on("click", app.nextPage);
        $("#btnFoto").on("click", app.capturePhoto);
    },
    nextPage: function(){
        app.showAlert("Altra pagina","msg");
        $("#btnFoto").show();
    },
    capturePhoto: function() {
        app.showAlert("Fotografa","msg");
        $("#btnFoto").hide();
        navigator.camera.getPicture(app.onPhotoFileSuccess, app.onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
    },
    onPhotoFileSuccess: function(imageData) {
        // Get image handle
        //
        var smallImage = document.getElementById('smallImage');    
        // Unhide image elements
        //
        smallImage.style.display = 'block';
        // Show the captured photo
        // The inline CSS rules are used to resize the image
        //
        smallImage.src = imageData;
    },
    onFail: function(msg){
        app.showAlert("failed : " + error.code,"msg");
    }
};



app.initialize();