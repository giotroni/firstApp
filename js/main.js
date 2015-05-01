// MEssaggi device dependent
showAlert: function (message, title) {
    if (navigator.notification) {
        navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
    }
}

// codice principale
var app = {

    initialize: function() {
        this.bind();
    },
    bind: function(){
        document.addEventListener('deviceready', deviceready, false);
//        $("#btnEntra").on("click", app.entra);
        $("#lblDesc").html("<h1>Ecco!</h1>")
    },
    deviceready: function() {
    },
    entra: function(){
        showAlert('App partita', 'Nota:');
    }
};

// inizializza phonegap
app.initialize();