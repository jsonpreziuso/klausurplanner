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

      if(klasse.trim() == "" || passwort.trim() == ""){
        alert("Bitte geben Sie den Klassennamen und das Passwort ein");
      }else if (true) {  //DATABANK QUERIES HERE
        window.location.href='klausurTermine.html';
      }else{
        alert("Ungültige Zugangsdaten");
      }
    });
});
