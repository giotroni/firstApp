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
    var self = this;
        self.showAlert('App partita', 'Nota:');
    }
};

// inizializza phonegap
app.initialize();