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
                var smallImage = document.getElementById('imgFoto');
                smallImage.src = "data:image/jpeg;base64," + imageData;
                app.showAlert("Ok!","msg");
            },
            function fail(error){
                app.showAlert("failed : " + error.code,"msg");
            },
            {
                quality: 50,
                destinationType: destinationType.DATA_URL
            }
        );
    }
};



app.initialize();