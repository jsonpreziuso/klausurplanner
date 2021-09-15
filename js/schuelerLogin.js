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
        alert("Please enter the class name and passwort"); //Translate to german
      }else if (true) {  //DATABANK QUERIES HERE
        window.location.href='klausurTermine.html';
      }else{
        alert("Invalid Credentials"); //Translate to german
      }
    });
});
