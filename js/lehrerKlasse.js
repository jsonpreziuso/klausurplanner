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

//KLASSE VERWALTUNG SEITE

  //DATATABLE MANAGEMENT
  var lehrerKlasseTabelle = $('#lehrerKlasseTabelle').DataTable();
  var klasseSelected = false;

  //HERE ALL TABLE DATA HAS TO BE TAKEN FROM THE DATABASE AND INSERTED INTO THE
  //TABLE DYNAMICALLY. EACH DYNAMICALLY CREATED <TR> NEEDS TO BE GIVEN AN "ID" WHICH
  //SHOULD BE EQUAL TO THE DATABASE ROW ID. WITHIN EACH <TR>, EVERY <TD> HAS TO BE
  //GIVEN AN "ID" OF "klasseVerwaltungRow, klassePasswortVerwaltungRow"
  //RESPECTIVELY, WITH IT'S PARENT <TR> ID BEING ADDED TO THE END OF EACH ONE
  //E.G. IF <TR id="5">, THEN ALL <TD>s SHOULD HAVE "5" ADDED TO THE END
  //<TR id="5"><TD id="klasseVerwaltungRow5"></TD>, <TD id="klassePasswortVerwaltungRow5"></TD></TR>

  $('#lehrerKlasseTabelle td').click(function(){

    klasseSelected = true;
    $('#lehrerKlasseTabelle tr').css("background-color","");
    $('#lehrerKlasseTabelle tr').removeAttr("selected");
    $(this).parent().css("background-color","#a5dee8");
    $(this).parent().attr("selected","true");
  });

  //KLASSE-EINTRAGEN-FUNKTION
  $("#btnEintragen").click(function() {

    //RESET BACKGROUND COLOURS BACK TO WHITE
    $("#klasseFeld").css("background-color","white");
    $("#passwortFeld").css("background-color","white");

    var klasse = $("#klasseFeld").val();
    var passwort = $("#passwortFeld").val();

    if(klasse.trim() == ""){
      alert("Bitte geben Sie einen Klassennamen ein");
      $("#klasseFeld").css("background-color","lightcoral");
    }else if(passwort.trim() == ""){
      alert("Bitte geben Sie ein Passwort ein");
      $("#passwortFeld").css("background-color","lightcoral");
    }else if(false/*ADD SQL QUERIES HERE TO CHECK IF A CLASS WITH THIS NAME ALREADY EXISTS IN THE DATABASE*/){
      alert("Eine Klasse mit diesem Namen existiert bereits");
    }else{
      //ADD THE NEW CLASS AND PASSWORD TO THE DATABASE
      $("#klasseFeld").css("background-color","lightgreen");
      $("#passwortFeld").css("background-color","lightgreen");
      alert("Ihre neue Klasse wurde erfolgreich erstellt");
      //DATATABLE.RELOAD();
    }
  });

  //KLASSE-LOESCHEN-FUNKTION
  $("#btnLoeschen").click(function() {

    if (!klasseSelected){
      alert("Bitte wählen Sie eine zu löschende Klasse aus");
    }else{
      if(confirm("Möchten Sie + GET KLASSENNAME + wirklich aus der Datenbank löschen?")){

        //IF YES THEN DELETE ENTIRE ROW FROM DATABASE WHERE WHERE THE <TR> ID (REPRESENTED BY "var row_index")
        //MATCHES THE ROW ID IN THE DATABASE
        alert("Ihre Klasse wurde erfolgreich gelöscht");
        //DATATABLE.RELOAD();
      }
    }
  });
});
