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
        $("#btnFoto").show();

    },
    capturePhoto: function(){
        app.showAlert("Fotografa","msg");
        $("#btnFoto").hide();
        navigator.camera.getPicture(
            function(imgData){
                app.showAlert("Ok!","msg");
                $('#imgFoto').src = "data:image/jpeg;base64," + imageData;
            },
            function fail(error){
                app.showAlert("failed : " + error.code,"msg");
            }
        );
    }
};



app.initialize();