/*
Jason Preziuso
12ITa
15.09.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/
$(document).ready(function() {

    $("#btnChange").click(function() {

      //RESET BACKGROUND COLOURS BACK TO WHITE
      $("#vornameFeld").css("background-color","white");
      $("#nachnameFeld").css("background-color","white");
      $("#emailFeld").css("background-color","white");
      $("#passwortFeld").css("background-color","white");
      $("#wiederholenPasswortFeld").css("background-color","white");

      //SAVE ALL INPUTED DATA INTO VARIABLES
      var vorname = $("#vornameFeld").val();
      var nachname = $("#nachnameFeld").val();
      var email = $("#emailFeld").val();
      var passwort = $("#passwortFeld").val();
      var wiederholenPasswort = $("#wiederholenPasswortFeld").val();
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

      //VALIDATE INPUTTED DATA
      if(vorname == ""){
        alert("Bitte geben Sie Ihre Vorname ein");
        $("#vornameFeld").css("background-color","lightcoral");
      }else if(nachname == ""){
        alert("Bitte geben Sie Ihre Nachname ein");
        $("#nachnameFeld").css("background-color","lightcoral");
      }else if(email == "" || !emailReg.test(email)){
        alert("Bitte geben Sie eine gültige Email-Adresse ein");
        $("#emailFeld").css("background-color","lightcoral");
      }else if(passwort == "" || wiederholenPasswort != passwort){
        alert("Ihre Passwörter stimmen nicht überein");
        $("#passwortFeld").css("background-color","lightcoral");
        $("#wiederholenPasswortFeld").css("background-color","lightcoral");
      }else{
        alert("Ihre Zugangsdaten wurden erfolgreich aktualisiert");
        $("#vornameFeld").css("background-color","lightgreen");
        $("#nachnameFeld").css("background-color","lightgreen");
        $("#emailFeld").css("background-color","lightgreen");
        $("#passwortFeld").css("background-color","lightgreen");
        $("#wiederholenPasswortFeld").css("background-color","lightgreen");
        //HERE UPDATE THE DATABASE WITH THE NEWLY ENTERED DATA
      }
      
    });
});
