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
        $("#btnEntra").on("click", app.nextPage);
        $("#btnFoto").on("click", app.capturePhoto);
    },
    nextPage: function(){
        app.showAlert("Altra pagina","msg");
    },
    capturePhoto: function(){
        app.showAlert("Fotografa...","msg");
        navigator.camera.getPicture(app.onCameraSuccess, app.onCameraError);
    },
    onCameraSuccess: function(data){
        // this is where you would send the image file to server
        app.showAlert("Fatta!","msg");
        //output image to screen
        cameraPic.src = "data:image/jpeg;base64," + data;
    },
    onCameraError: function(data){
        // this is where you would send the image file to server
        app.showAlert("Errore...","msg");
    }

};



app.initialize();