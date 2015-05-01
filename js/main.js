
// codice principale
var app = {

    initialize: function() {
        this.bind();
    },
    bind: function(){
        document.addEventListener('deviceready', this.deviceready, false);

    },
    deviceready: function() {
        alert("Altra ... Partita");
    }
};
// inizializza phonegap

$(document).ready(function() {
    app.initialize();
    alert("Partita");
}
