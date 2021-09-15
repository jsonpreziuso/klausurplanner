/*
Jason Preziuso
12ITa
15.09.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/
$(document).ready(function() {

    $("#btnLogin").click(function() {

      var email = $("#emailFeld").val();
      var passwort = $("#passwortFeld").val();

      if(email == "" || passwort == ""){
        alert("Please enter your email and passwort"); //Translate to german
      }else if (true) {  //DATABANK QUERIES HERE
        window.location.href='lehrerVerwaltung.html';
      }else{
        alert("Invalid Credentials"); //Translate to german
      }
    });
});
