/*
Jason Preziuso
12ITa
15.09.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/

$(document).ready(function() {
  //NAVIGATION TABS
  $("#btnMeinKonto").click(function() {
    window.location.href='lehrerMeinKonto.html';
  });
  $("#btnKlasse").click(function() {
    window.location.href='lehrerKlasse.html';
  });

  //LOGOUT FUNCTIONALITY
  $("#logout").click(function(){
    //HERE WE NEED TO END THE SESSION VARIABLE ON THE BACKEND
  });

  //KLASSE VERWALTUNG SEITE
  $("#btnEintragen").click(function() {
    var klasse = $("#klasseFeld").val();
    var passwort = $("#passwortFeld").val();

    if(klasse == "" || passwort == ""){
      alert("Bitte geben Sie einen Klassennamen und ein Passwort ein");
    }else if(true/*ADD SQL QUERIES HERE TO CHECK IF A CLASS WITH THIS NAME ALREADY EXISTS IN THE DATABASE*/){
      alert("Eine Klasse mit diesem Namen existiert bereits");
    }else{
      //ADD THE NEW CLASS AND PASSWORD TO THE DATABASE IF DOES NOT ALREADY EXIST
      //RELOAD TABLE TO DISPLAY THE NEW ENTRIES
      alert("Ihre neue Klasse wurde erfolgreich erstellt");
    }
  });

  $("#btnLoeschen").click(function() {
  //var klasse = KLASSE FROM ENTRY SELECTED IN TABLE
  //var passwort = PASSWORD FROM ENTRY SELECTED IN TABLE

  /* TABLE FUNCTION READY FOR WHEN TABLE HAS BEEN IMPLEMENTED IN HTML
    var table = $('#example').DataTable();
    if (!table.rows( '.selected' ).any()){
      alert("Bitte wählen Sie eine zu löschende Klasse aus");
    }else{
      //ADD SQL QUERIES HERE TO DELETE THE SELECTED CLASS AND PASSWORD FROM THE DATABASE
      //RELOAD TABLE TO DISPLAY THE NEW ENTRIES
      alert("Ihre ausgewählte Klasse wurde erfolgreich gelöscht");
    }
  */
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
    }else if(true/* SQL QUERY TO CHECK IF A USER WITH THE SAME LOGIN DATA ALREADY EXISTS IN THE DATABASE*/){
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
