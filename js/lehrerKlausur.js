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

//KLAUSUR VERWALTUNG SEITE

  //DATATABLE MANAGEMENT
  var lehrerKlausurTabelle = $('#lehrerKlausurTabelle').DataTable();
  var klausurSelected = false;

  //HERE ALL TABLE DATA HAS TO BE TAKEN FROM THE DATABASE AND INSERTED INTO THE
  //TABLE DYNAMICALLY. EACH DYNAMICALLY CREATED <TR> NEEDS TO BE GIVEN AN "ID" WHICH
  //SHOULD BE EQUAL TO THE DATABASE ROW ID. WITHIN EACH <TR>, EVERY <TD> HAS TO BE
  //GIVEN AN "ID" OF "klasseRow, fachRow, datumRow, stundeRow, raumRow, themaRow"
  //RESPECTIVELY, WITH IT'S PARENT <TR> ID BEING ADDED TO THE END OF EACH ONE
  //E.G. IF <TR id="5">, THEN ALL <TD>s SHOULD HAVE "5" ADDED TO THE END
  //<TR id="5"><TD id="klasseRow5"></TD>, <TD id="fachRow5"></TD> ... etc </TR>

  $('#lehrerKlausurTabelle td').click(function(){

    klausurSelected = true;
    $('#lehrerKlausurTabelle tr').css("background-color","");
    $('#lehrerKlausurTabelle tr').removeAttr("selected");
    $(this).parent().css("background-color","#a5dee8");
    $(this).parent().attr("selected","true");

/*
    ALL THIS WILL ONLY WORK ONCE TABLE IS GENERATED WITH DATABASE DATA

    //AUTOFILL VALUES
    var row_index = $(this).parent().attr("id");
    $("#klausurKlasse").val($("#klasseRow"+row_index).text());
    $("#fachFeld").val($("#fachRow"+row_index).text());
    $("#datum").val($("#datumRow"+row_index).text());
    $("#schulStunde").val($("#stundeRow"+row_index).text());
    $("#raumNrFeld").val($("#raumRow"+row_index).text());
    $("#themenFeld").val($("#themaRow"+row_index).text());
  */
  });

  //KLAUSUR-AENDERN-FUNKTION
  $("#btnKlausurAendern").click(function(){

    //RESET BACKGROUND COLOURS BACK TO WHITE
    $("#klausurKlasse").css("background-color","white");
    $("#fachFeld").css("background-color","white");
    $("#datum").css("background-color","white");
    $("#schulStunde").css("background-color","white");
    $("#raumNrFeld").css("background-color","white");
    $("#themenFeld").css("background-color","white");

    if (!klausurSelected){
      alert("Bitte wählen Sie eine Klausur aus");
    }else{
      if(confirm("Möchten Sie + GET LEHRERNAME + GET FACHNAME + Klausur wirklich ändern?")){

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
          $("#klausurKlasse").css("background-color","lightgreen");
          $("#fachFeld").css("background-color","lightgreen");
          $("#datum").css("background-color","lightgreen");
          $("#schulStunde").css("background-color","lightgreen");
          $("#raumNrFeld").css("background-color","lightgreen");
          $("#themenFeld").css("background-color","lightgreen");

          //HERE ALL DATABASE VALUES HAVE TO BE UPDATED FOR THE SELECTED KLAUSUR
          //WHERE THE <TR> ID (REPRESENTED BY "var row_index") MATCHES THE ROW ID IN THE DATABASE

          alert("Ihre augewahlte Klausur wurde erfolgreich aktualisiert");

          //DATATABLE.RELOAD();
        }
      }
    }
  });

  //KLAUSUR-LOESCHEN-FUNKTION
  $("#btnKlausurLoeschen").click(function(){
    if (!klausurSelected){
      alert("Bitte wählen Sie eine zu löschende Klausur aus");
    }else{
      if(confirm("Möchten Sie + GET LEHRERNAME + GET FACHNAME + Klausur wirklich aus der Datenbank löschen?")){

      //IF YES THEN DELETE ENTIRE ROW FROM DATABASE WHERE WHERE THE <TR> ID (REPRESENTED BY "var row_index")
      //MATCHES THE ROW ID IN THE DATABASE
      alert("Ihre augewahlte Klausur wurde erfolgreich gelöscht");
      //DATATABLE.RELOAD();
      }
    }
  });


  //ALLELOESCHEN-FUNKTION
  $("#btnAlleLoeschen").click(function(){
    if(confirm("Möchten Sie wirklich alle Einträge aus der Datenbank löschen")){

      //IF YES THEN DELETE ALL DATABASE ENTIRES

      //DATATABLE.RELOAD();
      alert("Alle Klausuren wurden erfolgreich gelöscht");
    }
  });

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

  //KLAUSUR EINTRAGEN FUNKTION
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

      //DATATABLE.RELOAD();
    }
  });
});
