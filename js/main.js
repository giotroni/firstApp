
// codice principale
var app = {

    initialize: function() {
        this.bind();
    },
    bind: function(){
        document.addEventListener('deviceready', this.deviceready, false);
        $("#btnEntra").on("click", app.entra);
        $("#lblDesc").html("<h1>Ecco!</h1>")
    },
    deviceready: function() {
    },
    entra: function(){
        alert("Partita");
    }
};
// inizializza phonegap

$(document).ready(function() {
    app.initialize();
}
