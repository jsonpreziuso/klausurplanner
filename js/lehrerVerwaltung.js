/*
Jason Preziuso
12ITa
15.09.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/

$(document).ready(function() {
  //INSERTION OF LEHRERNAME
  //$("#lehrerName").val() == USE BACKEND SESSION VARIABLE TO GET THE LEHRERNAME AND SET IT HERE

  //TABS
  $("#btnMeinKonto").click(function() {
    window.location.href='lehrerMeinKonto.html';
  });
  $("#btnKlasse").click(function() {
    window.location.href='lehrerKlasse.html';
  });
  $("#btnKlausur").click(function() {
    window.location.href='lehrerKlausur.html';
  });

  //SET LEHRER NAME IN THE NAVBAR
  //HERE THE SIGNED IN LEHRER'S NAME MUST BE TAKEN FROM DATABASE AND SET IN $("#lehrerTitelName")
  $("#lehrerTitelName").text("LEHRER NAME")

  //LOGOUT FUNCTIONALITY
  $("#logout").click(function(){
    //HERE WE NEED TO END THE SESSION VARIABLE ON THE BACKEND
  });

//KLAUSUR VERWALTUNG SEITE

  //SET DEFAULT DATE TO TODAY'S DATE
  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var year = now.getFullYear();
  var today = (year)+"-"+(month)+"-"+(day);
  $('#datum').val(today);

  //CAPTURE USER INPUTTED DATE AND CONVERT TO DATE OBJECT
  $('#datum').change(function(){
    var datum = $("#datum").val();
    datum = new Date(datum);
    var datumDay = ("0" + datum.getDate()).slice(-2);
    var datumMonth = ("0" + (datum.getMonth() + 1)).slice(-2);
    var datumYear = datum.getFullYear();
    datum = (datumYear)+"-"+(datumMonth)+"-"+(datumDay);

    //DATE INPUT VALIDATION
    if(datumYear > year+5){
      alert("Klausuren, die länger als 5 Jahre in der Zukunft stattfinden sollen, können nicht erstellt werden");
      $("#datum").css("background-color","lightcoral");
      $('#datum').val(today);
    }
  });

  $("#btnKlausurEintragen").click(function() {

    //RESET BACKGROUND COLOURS BACK TO WHITE
    $("#klausurKlasse").css("background-color","white");
    $("#fachFeld").css("background-color","white");
    $("#datum").css("background-color","white");
    $("#schulStunde").css("background-color","white");
    $("#raumNrFeld").css("background-color","white");
    $("#themenFeld").css("background-color","white");

    //SAVE ALL USER INPUT INTO VARIABLES
    var klausurKlasse = $("#klausurklasse").val();
    var fach = $("#fachFeld").val();
    var datum = $("#datum").val();
    var schulStunde = $("#schulStunde").val();
    var raumNr = $("#raumNrFeld").val();
    var themen = $("#themenFeld").val();

    //VALIDATE USER INPUT
    if(fach.trim() == ""){
      alert("Bitte geben Sie ein Fach ein");
      $("#fachFeld").css("background-color","lightcoral");
    }else if(datum < today){
      alert("Ihr ausgewähltes Datum darf nicht in der Vergangenheit liegen");
      $("#datum").css("background-color","lightcoral");
    }else if(raumNr.trim() == ""){
      alert("Bitte geben Sie eine Raumnummer ein");
      $("#raumNrFeld").css("background-color","lightcoral");
    }else if(themen.trim() == ""){
      alert("Bitte geben Sie das Prüfungsthema ein");
      $("#themenFeld").css("background-color","lightcoral");
    }else if(false/* SQL QUERY TO CHECK IF THIS KLAUSUR ALREADY EXISTS IN THE DATABASE*/){
      alert("Diese Klausur existiert bereits");
    }else{
      alert("Ihre Klausur wurde erfolgreich hinzugefügt");
      $("#klausurKlasse").css("background-color","lightgreen");
      $("#fachFeld").css("background-color","lightgreen");
      $("#datum").css("background-color","lightgreen");
      $("#schulStunde").css("background-color","lightgreen");
      $("#raumNrFeld").css("background-color","lightgreen");
      $("#themenFeld").css("background-color","lightgreen");
      //HERE UPDATE THE DATABASE WITH THE NEWLY ENTERED DATA
      //LEHRER NACHNAME ALSO HAS TO BE TAKEN FROM THE BACKEND AND ADDED TO THE DATABASE ENTRY
    }
  });

//KLASSE VERWALTUNG SEITE
  $("#btnEintragen").click(function() {
    var klasse = $("#klasseFeld").val();
    var passwort = $("#passwortFeld").val();

    if(klasse.trim() == "" || passwort.trim() == ""){
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
