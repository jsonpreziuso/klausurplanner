/*
Jason Preziuso
12ITa
15.09.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/

$(document).ready(function() {

//AUTOFILL FIELDS WILL BE IMPLEMENTED WHEN SELECTING A USER FROM THE TABLE ONCE THE TABLE IS IMPLEMENTED

//SEARCH FUNCTION WILL BE IMPLEMENTED ONCE TABLE IS IMPLEMENTED

//UPLOAD FILE FUNCTION WILL BE IMPLEMENTED ONCE TABLE IS IMPLEMENTED

//SETTING NEW ADMINS WILL BE IMPLEMENTED ONCE TABLE IS IMPLEMENTED

//ANDEARN BUTTON
  $("#btnAendern").click(function() {

    //RESET BACKGROUND COLOURS BACK TO WHITE
    $("#vornameFeld").css("background-color","white");
    $("#nachnameFeld").css("background-color","white");
    $("#emailFeld").css("background-color","white");

    //SAVE ALL INPUTED DATA INTO VARIABLES
    var vorname = $("#vornameFeld").val();
    var nachname = $("#nachnameFeld").val();
    var email = $("#emailFeld").val();
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
    }else if(false/* SQL QUERY TO CHECK IF A USER WITH THE SAME LOGIN DATA ALREADY EXISTS IN THE DATABASE*/){
      alert("Ihre ausgewählten Zugangsdaten sind nicht verfügbar");
    }else{
      alert("Ihre Zugangsdaten wurden erfolgreich aktualisiert");
      $("#vornameFeld").css("background-color","lightgreen");
      $("#nachnameFeld").css("background-color","lightgreen");
      $("#emailFeld").css("background-color","lightgreen");
      //SQL QUERIES TO UPDATE SELECTED USER'S DATA WITH ALL NEWLY INPUTED DATA
    }
  });

//LOESCH BUTTON
  $("#btnLoeschen").click(function() {
    if(confirm("Möchten Sie " + /*GET VORNAME + NACHNAME FROM SELECTED USER+*/ "wirklich aus der Datenbank löschen?")){

      //var vorname = VORNAME FROM ENTRY SELECTED IN TABLE
      //var nachname = NACHNAME FROM ENTRY SELECTED IN TABLE
      //var email = EMAIL FROM ENTRY SELECTED IN TABLE

      /* TABLE FUNCTION READY FOR WHEN TABLE HAS BEEN IMPLEMENTED IN HTML
        var table = $('#example').DataTable();
        if (!table.rows( '.selected' ).any()){
          alert("Bitte wählen Sie eine zu löschende User aus");
        }else{
          //ADD SQL QUERIES HERE TO DELETE THE SELECTED USER FROM THE DATABASE
          alert(GET VORNAME + NACHNAME FROM SELECTED USER + " wurde erfolgreich aus der Datenbank gelöscht");
          //RELOAD TABLE TO DISPLAY THE NEW ENTRIES
        }
      */
    }
  });
//PASSWORTZURUECKSETZEN BUTTON
  $("#btnPasswortZuruecksetzen").click(function() {

    if (confirm("Sind Sie sicher, dass Sie das Passwort von " + /*GET VORNAME + NACHNAME FROM SELECTED USER+*/ " auf die Standardeinstellungen zurücksetzen möchten?")) {

      //var vorname = VORNAME FROM ENTRY SELECTED IN TABLE
      //var nachname = NACHNAME FROM ENTRY SELECTED IN TABLE
      //var email = EMAIL FROM ENTRY SELECTED IN TABLE

      //ADD SQL QUERIES HERE TO FIND THE SELECTED USER IN THE DATABASE AND
      //RESET HIS PASSWORD TO DEFAULT E.G.("ABC123")
      //PASSWORD MUST BE HASHED BEFORE BEING SAVED IN THE DATABASE
      alert(/*GET VORNAME + NACHNAME FROM SELECTED USER +*/ " Passwort wurde erfolgreich auf die Standardeinstellungen zurückgesetzt");
    }
  });
});
