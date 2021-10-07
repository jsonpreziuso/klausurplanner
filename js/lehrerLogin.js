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

      if(email.trim() == "" || passwort.trim() == ""){
        alert("Bitte geben Sie Ihre E-Mail und Ihr Passwort ein");
      }else if (passwort != "admin" /*HERE WE HAVE TO CHECK IF THE EMAIL EXISTS IN THE DATABASE, AND IF THE PASSWORD IS THE CORRECT PASSWORD FOR THE EMAIL*/) {
        window.location.href='lehrerKlausur.html'; //HERE WE HAVE TO DIRECT THE LEHRER TO THEIR OWN VERWALTUNG WITH THEIR OWN DETAILS ALREADY INSIDE
      }else if (passwort == "admin"){
        //SQL QUERY HERE TO SEE IF USER WITH THIS EMAIL AND PASSWORD HAS ADMIN STATUS
        //IF YES
        window.location.href='admin.html';
        //IF NO
        //alert("Zugriff verweigert, Sie sind kein Administrator")
      }else{
        alert("Ungültige Zugangsdaten");
      }

    });
});
