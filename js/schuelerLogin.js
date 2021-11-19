/*
Jason Preziuso
12ITa
09.09.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/
$(document).ready(function() {
  //GET LOGIN INFO FROM CLASSES
  $.get("http://localhost:8080/api/classes", function( data ) {

    //LOGIN FUNCTION
    $("#btnLogin").click(function() {

      //SAVE USER INPUT
      var klasse = $("#klasseFeld").val();
      var passwort = $("#passwortFeld").val();
      var correctLogin = false;

      //VALIDATE USER INPUT
      for(i of data){
        if(klasse == i.name && passwort == i.passwort){
          correctLogin = true;
          localStorage.setItem('klasse', klasse);
        }
      }

      //VALIDATE USER INPUT
      if(klasse.trim() == "" || passwort.trim() == ""){
        alert("Bitte geben Sie den Klassennamen und das Passwort ein");
      }else if (correctLogin) {
        window.location.href='klausurTermine.html';
      }else{
        alert("Ungültige Zugangsdaten");
      }
    });
  });
});
