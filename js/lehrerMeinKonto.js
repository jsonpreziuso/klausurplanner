/*
Jason Preziuso
12ITa
15.10.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/
$(document).ready(function() {

  //INSERTION OF LEHRERNAME IN HEADER
  $("#lehrerTitelName").text("TearTable - " + localStorage.getItem('lehrerVorname') + " " + localStorage.getItem('lehrerNachname'));

  //LOGOUT FUNCTIONALITY
  $("#logout").click(function(){
    localStorage.setItem('lehrerVorname',"");
    localStorage.setItem('lehrerNachname',"");
    localStorage.setItem('lehrerEmail',"");
    localStorage.setItem('lehrerId',"");
    localStorage.setItem('lehrerAdmin',"");
  });

  //AUTO FILL FIELDS WITH LEHRER DATA
  $("#vornameFeld").val(localStorage.getItem('lehrerVorname'));
  $("#nachnameFeld").val(localStorage.getItem('lehrerNachname'));
  $("#emailFeld").val(localStorage.getItem('lehrerEmail'));

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
    var duplicateData = false;

    //VALIDATE INPUTTED DATA
    $.get("http://localhost:8080/api/teachers", function( data ) {
      for(i of data){
        if(vorname.trim() == i.vorname && nachname.trim() == i.nachname && email == i.email && passwort == i.passwort)
        var duplicateData = true;
      }

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
      }else if(passwort.trim() == ""){
        alert("Ungültiges Passwort");
        $("#passwortFeld").css("background-color","lightcoral");
      }else if(wiederholenPasswort != passwort){
        alert("Ihre Passwörter stimmen nicht überein");
        $("#passwortFeld").css("background-color","lightcoral");
        $("#wiederholenPasswortFeld").css("background-color","lightcoral");

        //CHECK FOR DUPLICATE ENTRIES
      }else if(duplicateData){
        alert("Die ausgewählten Kontodaten sind bereits vorhanden");

        //UPDATE ACCOUNT DATA
      }else{
        $.ajax({
          type: "PUT",
          dataType:'json',
          url: "http://localhost:8080/api/teachers",
          data: {"action": "lehrerMeinKonto", "idlehrer" : localStorage.getItem('lehrerId'), "vorname": vorname.trim(), "nachname": nachname.trim(), "email": email, "passwort": passwort.trim()}
        });

        //UPDATE LOCALSTORAGE VARIABLES
        localStorage.setItem('lehrerVorname',vorname.trim());
        localStorage.setItem('lehrerNachname',nachname.trim());
        localStorage.setItem('lehrerEmail',email);

        alert("Ihre Zugangsdaten wurden erfolgreich aktualisiert");
        $("#lehrerTitelName").text("TearTable - " + localStorage.getItem('lehrerVorname') + " " + localStorage.getItem('lehrerNachname'));
      }
    });
  });
});
