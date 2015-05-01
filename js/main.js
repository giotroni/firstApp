var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    initialize: function() {
    }
};

$(document).ready(function() {
    app.initialize();
    app.showAlert("Ecco","qua");
}