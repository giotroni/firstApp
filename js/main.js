var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    initialize: function() {
        app.showAlert("Chiamata al lancio","msg");
        this.bindEvents();
    },
    bindEvents: function(){
        document.addEventListener("deviceready", app.onDeviceReady, false)
    },
    onDeviceReady: function(){
        app.showAlert("Chiamata alla fine del caricamento","msg");
    }
};


app.initialize();