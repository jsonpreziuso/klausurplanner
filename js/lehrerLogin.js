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
        alert("Bitte geben Sie Ihre E-Mail und Ihr Passwort ein");
      }else if (passwort != "admin" /*HERE WE HAVE TO CHECK IF THE EMAIL EXISTS IN THE DATABASE, AND IF THE PASSWORD IS THE CORRECT PASSWORD FOR THE EMAIL*/) { 
        window.location.href='lehrerVerwaltung.html'; //HERE WE HAVE TO DIRECT THE LEHRER TO THEIR OWN VERWALTUNG WITH THEIR OWN DETAILS ALREADY INSIDE
      }else if (passwort == "admin"){
        window.location.href='admin.html';
      }else{
        alert("Ungültige Zugangsdaten");
      }
      
    });
});
