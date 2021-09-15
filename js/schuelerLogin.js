/*
Jason Preziuso
12ITa
09.09.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/
$(document).ready(function() {

    $("#btnLogin").click(function() {

      var klasse = $("#klasseFeld").val();
      var passwort = $("#passwortFeld").val();

      if(klasse == "" || passwort == ""){
        alert("Bitte geben Sie den Klassennamen und das Passwort ein");
      }else if (true /*HERE WE HAVE TO CHECK IF THE KLASSE EXISTS IN THE DATABASE, AND IF THE PASSWORD IS THE CORRECT PASSWORD FOR THE KLASSE*/) {
        window.location.href='klausurTermine.html';
      }else{
        alert("Ungültige Zugangsdaten");
      }
    });
});
