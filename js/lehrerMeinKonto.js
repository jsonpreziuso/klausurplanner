/*
Jason Preziuso
12ITa
15.10.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/
$(document).ready(function() {
  //INSERTION OF LEHRERNAME
  //$("#lehrerName").val() == USE BACKEND SESSION VARIABLE TO GET THE LEHRERNAME AND SET IT HERE

  //SET LEHRER NAME IN THE NAVBAR
  //HERE THE SIGNED IN LEHRER'S NAME MUST BE TAKEN FROM DATABASE AND SET IN $("#lehrerTitelName")
  $("#lehrerTitelName").text("TearTable - " + "LEHRER NAME")

  //LOGOUT FUNCTIONALITY
  $("#logout").click(function(){
    //HERE WE NEED TO END THE SESSION VARIABLE ON THE BACKEND
  });

//MEIN-KONTO VERWALTUNG SEITE
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
    if(vorname.trim() == ""){
      alert("Bitte geben Sie Ihre Vorname ein");
      $("#vornameFeld").css("background-color","lightcoral");
    }else if(nachname.trim() == ""){
      alert("Bitte geben Sie Ihre Nachname ein");
      $("#nachnameFeld").css("background-color","lightcoral");
    }else if(email == "" || !emailReg.test(email)){
      alert("Bitte geben Sie eine gültige Email-Adresse ein");
      $("#emailFeld").css("background-color","lightcoral");
    }else if(passwort.trim() == "" || passwort.trim() == "admin"){
      alert("Ungültiges Passwort");
      $("#passwortFeld").css("background-color","lightcoral");
    }else if(wiederholenPasswort != passwort){
      alert("Ihre Passwörter stimmen nicht überein");
      $("#passwortFeld").css("background-color","lightcoral");
      $("#wiederholenPasswortFeld").css("background-color","lightcoral");
    }else if(false/* SQL QUERY TO CHECK IF A USER WITH THE SAME LOGIN DATA ALREADY EXISTS IN THE DATABASE*/){
      alert("Ihre ausgewählten Zugangsdaten sind nicht verfügbar");
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
