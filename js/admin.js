/*
Jason Preziuso
12ITa
15.09.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/

$(document).ready(function() {

//UPLOAD FILE FUNCTION WILL BE IMPLEMENTED ONCE DATABASE IS IMPLEMENTED

//DATATABLE MANAGEMENT
  var adminTabelle = $('#adminTabelle').DataTable();
  var lehrerSelected = false;

  //HERE ALL TABLE DATA HAS TO BE TAKEN FROM THE DATABASE AND INSERTED INTO THE
  //TABLE DYNAMICALLY. EACH DYNAMICALLY CREATED <TR> NEEDS TO BE GIVEN AN "ID" WHICH
  //SHOULD BE EQUAL TO THE DATABASE ROW ID. WITHIN EACH <TR>, EVERY <TD> HAS TO BE
  //GIVEN AN "ID" OF "adminCheckRow, vorNameRow, nachNameRow, emailRow"
  //RESPECTIVELY, WITH IT'S PARENT <TR> ID BEING ADDED TO THE END OF EACH ONE
  //E.G. IF <TR id="5">, THEN ALL <TD>s SHOULD HAVE "5" ADDED TO THE END
  //<TR id="5"><TD id="adminCheckRow5"></TD>, <TD id="vorNameRow5"></TD> ... etc </TR>

  $('#adminTabelle td').click(function(){

    lehrerSelected = true;
    $('#adminTabelle tr').css("background-color","");
    $('#adminTabelle tr').removeAttr("selected");
    $(this).parent().css("background-color","#a5dee8");
    $(this).parent().attr("selected","true");

/*
  //  ALL THIS WILL ONLY WORK ONCE TABLE IS GENERATED WITH DATABASE DATA

    //AUTOFILL VALUES
    var row_index = $(this).parent().attr("id");
    $("#vornameFeld").val($("#vorNameRow"+row_index).text());
    $("#nachnameFeld").val($("#nachNameRow"+row_index).text());
    $("#emailFeld").val($("#emailRow"+row_index).text());
  */
  });

//ANDEARN-FUNKTION
  $("#btnAendern").click(function() {

    //RESET BACKGROUND COLOURS BACK TO WHITE
    $("#vornameFeld").css("background-color","white");
    $("#nachnameFeld").css("background-color","white");
    $("#emailFeld").css("background-color","white");

    if(!lehrerSelected){
      alert("Bitte wählen Sie ein Lehrer/in aus");
    }else{
      if(confirm("Möchten Sie + GET LEHRERNAME + Konto-Daten wirklich ändern?")){

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
        }else if(false /*SQL QUERY TO CHECK IF A USER WITH THE SAME LOGIN DATA ALREADY EXISTS IN THE DATABASE*/){
          alert("Ihre ausgewählten Zugangsdaten sind nicht verfügbar");
        }else{
          alert("Ihre Zugangsdaten wurden erfolgreich aktualisiert");
          $("#vornameFeld").css("background-color","lightgreen");
          $("#nachnameFeld").css("background-color","lightgreen");
          $("#emailFeld").css("background-color","lightgreen");

          //HERE ALL DATABASE VALUES HAVE TO BE UPDATED FOR THE SELECTED LEHRER
          //WHERE THE <TR> ID (REPRESENTED BY "var row_index") MATCHES THE ROW ID IN THE DATABASE
        }
      }
    }
  });


//LOESCH-FUNKTION

  $("#btnLoeschen").click(function() {

    if(!lehrerSelected){
      alert("Bitte wählen Sie ein Lehrer/in aus");
    }else{
      if(confirm("Möchten Sie " /*+ GET VORNAME + NACHNAME FROM SELECTED LEHRER */ + "wirklich aus der Datenbank löschen?")){

        //IF YES THEN DELETE ENTIRE ROW FROM DATABASE WHERE THE <TR> ID (REPRESENTED BY "var row_index")
        //MATCHES THE ROW ID IN THE DATABASE

        alert(/*GET VORNAME + NACHNAME FROM SELECTED LEHRER */" wurde erfolgreich aus der Datenbank gelöscht");

        //DATATABLE.RELOAD();
      }
    }
  });


//PASSWORTZURUECKSETZEN-FUNKTION
  $("#btnPasswortZuruecksetzen").click(function() {
    if(!lehrerSelected){
      alert("Bitte wählen Sie ein Lehrer/in aus");
    }else{
      if(confirm("Sind Sie sicher, dass Sie das Passwort von " + /*GET VORNAME + NACHNAME FROM SELECTED LEHRER+ */" auf die Standardeinstellungen zurücksetzen möchten?")) {
        //IF YES THEN SET PASSWORD TO "default123" WHERE THE <TR> ID (REPRESENTED BY "var row_index")
        //MATCHES THE ROW ID IN THE DATABASE
        alert(/*GET VORNAME + NACHNAME FROM SELECTED LEHRER + */" Passwort wurde erfolgreich auf die Standardeinstellungen zurückgesetzt");
      }
    }
  });
});
