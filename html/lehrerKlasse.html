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

  classData = {};
  //AUTOFILL DATATABLE
  $.get( "http://localhost:8080/api/classes", function( data ) {
    classData = data;
    $('#lehrerKlasseTabelle').DataTable({
          "processing" : true,
          "ajax" : {
              "url" : "http://localhost:8080/api/classes",
              dataSrc : ''
          },
          "columns" : [ {
              "data" : "idklassen"
          },{
              "data" : "name"
          },{
              "data" : "passwort"
          }]
    });
  });

  //TABLE HIGHLIGHT ON SELECT
  var klasseSelected = false;
  $('#lehrerKlasseTabelle').on("click","td",function(){
    klasseSelected = true;
    $('#lehrerKlasseTabelle tr').css("background-color","");
    $('#lehrerKlasseTabelle tr').removeAttr("class");
    $(this).parent().css("background-color","#a5dee8");
    $(this).parent().attr("class","selectedTrue");
  });

  //KLASSE-EINTRAGEN-FUNKTION
  $("#btnEintragen").click(function() {

    //VISUAL COLOUR FEEDBACK
    $("#klasseFeld").css("background-color","white");
    $("#passwortFeld").css("background-color","white");

    //CAPTURE USER INPUT
    var klasse = $("#klasseFeld").val();
    var passwort = $("#passwortFeld").val();
    var duplicateData = false;

    //CHECK FOR DUPLICATE ENTRIES
    for(i of classData){
      if(klasse.trim() == i.name)
      duplicateData = true;
    }

    //VALIDATE INPUTTED DATA
    if(klasse.trim() == ""){
      alert("Bitte geben Sie einen Klassennamen ein");
      $("#klasseFeld").css("background-color","lightcoral");
    }else if(passwort.trim() == ""){
      alert("Bitte geben Sie ein Passwort ein");
      $("#passwortFeld").css("background-color","lightcoral");

      //CHECK FOR DUPLICATE ENTRIES
    }else if(duplicateData){
      alert("Eine Klasse mit diesem Namen existiert bereits");
      $("#klasseFeld").css("background-color","lightcoral");
    }else{
      //ADD THE NEW CLASS AND PASSWORD TO THE DATABASE
      $.ajax({
        type: "POST",
        dataType:'json',
        url: "http://localhost:8080/api/classes",
        data: {"name": $("#klasseFeld").val(), "passwort": $("#passwortFeld").val()}
      });
      alert("Ihre neue Klasse wurde erfolgreich erstellt");
      location.reload();
    }
  });

  //KLASSE-LOESCHEN-FUNKTION
  $("#btnLoeschen").click(function() {

    //MAKE SURE A CLASS IS SELECTED
    if (!klasseSelected){
      alert("Bitte wählen Sie eine zu löschende Klasse aus");

    }else{
      //CHECK IF EXAMS STILL EXIST FOR CLASS
      var noExams = true;
      $.get("http://localhost:8080/api/exams", function( data ) {
        for(a of data){
          if($(".selectedTrue").children().siblings(":first").siblings(":first").text() == a.fk_klassen){
            alert("Klasse kann nicht gelöscht werden, Klausuren für diese Klasse sind noch vorhanden")
            noExams = false;
            break;
          }
        }
        if(noExams){
        //DELETE CLASS FROM DATABASE
          $.get("http://localhost:8080/api/classes", function( data ) {
              for(i of data){
                if($(".selectedTrue").children().siblings(":first").siblings(":first").text() == i.idklassen){
                  if(confirm("Möchten Sie " + i.name + " wirklich aus der Datenbank löschen?")){
                    $.ajax({
                      type: "POST",
                      dataType:'json',
                      url: "http://localhost:8080/api/classes/:id",
                      data: {"id": i.idklassen}
                    });
                    alert("Ihre Klasse wurde erfolgreich gelöscht");
                    location.reload();
                  }
                }
              }
          });
        }
      });
    }
  });
});
