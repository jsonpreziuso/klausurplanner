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

  //AUTOFILL DATATABLE
  examData = {};
  $.get("http://localhost:8080/api/exams", function( data ) {
    examData = data;
    $('#lehrerKlausurTabelle').DataTable({
          "processing" : true,
          "ajax" : {
              "url" : "http://localhost:8080/api/exams",
              dataSrc : ''
          },
          "columns" : [ {
              "data" : "idklausuren"
          },{
              "data" : "lehrername"
          },{
              "data" : "klassename"
          },{
              "data" : "fach"
          },{
              "data" : "datum"
          },{
              "data" : "schulestunde"
          },{
              "data" : "raumnummer"
          },{
              "data" : "thema"
          }]
    });
  });

  //FILL CLASS SELECTOR
  $.get("http://localhost:8080/api/classes", function( data ) {
    for(i of data){
      $('#klausurKlasse').append($('<option>', {
        value: i.name,
        text: i.name
      }));
    }
  });

  //SET DEFAULT DATE TO TODAY'S DATE
  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);
  var month = ("0" + (now.getMonth() + 1)).slice(-2);
  var year = now.getFullYear();
  var today = (year)+"-"+(month)+"-"+(day);
  $('#datum').val(today);

  //HIGHLIGHT DATATABLE ROW ON SELECT
  var klausurSelected = false;
  $('#lehrerKlausurTabelle').on("click","td",function(){
    klausurSelected = true;
    $('#lehrerKlausurTabelle tr').css("background-color","");
    $('#lehrerKlausurTabelle tr').removeAttr("class");
    $(this).parent().css("background-color","#a5dee8");
    $(this).parent().attr("class","selectedTrue");

    //AUTOFILL SELECTED ROW DATA INTO FIELDS
    $("#klausurKlasse").val($(".selectedTrue").children().siblings().eq(2).text());
    $("#fachFeld").val($(".selectedTrue").children().siblings().eq(3).text());
    $("#datum").val($(".selectedTrue").children().siblings().eq(4).text());
    $("#schulStunde").val($(".selectedTrue").children().siblings().eq(5).text());
    $("#raumNrFeld").val($(".selectedTrue").children().siblings().eq(6).text());
    $("#themenFeld").val($(".selectedTrue").children().siblings().eq(7).text());
  });

  //KLAUSUR-AENDERN-FUNKTION
  $("#btnKlausurAendern").click(function(){

    //VISUAL COLOUR FEEDBACK
    $("#klausurKlasse").css("background-color","white");
    $("#fachFeld").css("background-color","white");
    $("#datum").css("background-color","white");
    $("#schulStunde").css("background-color","white");
    $("#raumNrFeld").css("background-color","white");
    $("#themenFeld").css("background-color","white");

    //MAKE SURE A KLAUSUR IS SELECTED
    if (!klausurSelected){
      alert("Bitte wählen Sie eine Klausur aus");
    }else{
      if(confirm("Möchten Sie die " + $(".selectedTrue").children().siblings().eq(1).text() + " " + $(".selectedTrue").children().siblings().eq(2).text() + " Klausur wirklich ändern?")){

        //SAVE ALL USER INPUT INTO VARIABLES
        var klausurKlasse = $("#klausurKlasse").val();
        var fach = $("#fachFeld").val();
        var datum = $("#datum").val();
        var schulStunde = $("#schulStunde").val();
        var raumNr = $("#raumNrFeld").val();
        var themen = $("#themenFeld").val();
        var examID = $(".selectedTrue").children().siblings().eq(0).text()
        var duplicateData = false;

        //CHECK FOR DUPLICATE ENTRIES
        for(i of examData){
          if(klausurKlasse == i.klassename && datum == i.datum && schulStunde == i.schulestunde && fach == i.fach && raumNr == i.raumnummer && themen == i.thema)
            duplicateData = true;
        }

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

          //CHECK FOR DUPLICATE ENTRIES
        }else if(duplicateData){
          alert("Diese Klausur existiert bereits");

        }else{
          //GET THE ID OF THE CLASS FROM DATABASE
          $.get( "http://localhost:8080/api/classes", function( data ) {
            for(i of data){
              if(klausurKlasse == i.name){
                var klasseId = i.idklassen;
              }
            }
            //UPDATE DATABASE WITH USER INPUT
            $.ajax({
              type: "PUT",
              dataType:'json',
              url: "http://localhost:8080/api/exams",
              data: {"idklassen": klasseId, "idklausuren": examID, "klassename": klausurKlasse, "fach": fach.trim(), "datum": datum.trim(), "schulestunde": schulStunde, "raumnummer": raumNr, "thema": themen}
            });
          });
          alert("Ihre augewahlte Klausur wurde erfolgreich aktualisiert");
          location.reload();
        }
      }
    }
  });

  //KLAUSUR-LOESCHEN-FUNKTION
  $("#btnKlausurLoeschen").click(function(){

    //MAKE SURE A KLAUSUR IS SELECTED
    if (!klausurSelected){
      alert("Bitte wählen Sie eine zu löschende Klausur aus");
    }else{
      //CAPTURE EXAM ID
      var examID = $(".selectedTrue").children().siblings().eq(0).text()

      if(confirm("Möchten Sie die " + $(".selectedTrue").children().siblings().eq(1).text() + " " + $(".selectedTrue").children().siblings().eq(2).text() + " Klausur wirklich aus der Datenbank löschen?")){
        //REMOVE KLAUSUR FROM DATABASE
        $.get("http://localhost:8080/api/exams/", function( data ) {
          for(i of data){
            if(examID == i.idklausuren){
              $.ajax({
                type: "DELETE",
                dataType:'json',
                url: "http://localhost:8080/api/exams/:id",
                data: {"id": examID}
              });
            }
          }
          alert("Ihre augewahlte Klausur wurde erfolgreich gelöscht");
          location.reload();
        });
      }
    }
  });

  //ALLELOESCHEN-FUNKTION
  $("#btnAlleLoeschen").click(function(){
    //MAKE SURE EXAMS EVEN EXIST
    if(examData.length <= 0){
      alert("Es gibt keine Klausuren zum Löschen vorhanden");
    }else{
      confirm("Möchten Sie wirklich alle Klausuren aus der Datenbank löschen")

      //DELETE ALL EXAMS FROM DATABASE
      $.get("http://localhost:8080/api/exams/", function( data ) {
        $.ajax({
          type: "DELETE",
          dataType:'json',
          url: "http://localhost:8080/api/exams/:id",
          data: {"id": 9999}
        });

        alert("Alle Klausuren wurden erfolgreich gelöscht");
        location.reload();
      });
    }
  });

  //KLAUSUR EINTRAGEN FUNKTION
  $("#btnKlausurEintragen").click(function() {

    //VISUAL COLOUR FEEDBACK
    $("#klausurKlasse").css("background-color","white");
    $("#fachFeld").css("background-color","white");
    $("#datum").css("background-color","white");
    $("#schulStunde").css("background-color","white");
    $("#raumNrFeld").css("background-color","white");
    $("#themenFeld").css("background-color","white");

    //SAVE ALL USER INPUT INTO VARIABLES
    var klausurKlasse = $("#klausurKlasse").val();
    var fach = $("#fachFeld").val();
    var datum = $("#datum").val();
    var schulStunde = $("#schulStunde").val();
    var raumNr = $("#raumNrFeld").val();
    var themen = $("#themenFeld").val();
    var duplicateData = false;

    //CHECK FOR DUPLICATE ENTRIES
    for(i of examData){
      if(klausurKlasse == i.klassename && datum == i.datum && schulStunde == i.schulestunde && fach == i.fach && raumNr == i.raumnummer && themen == i.thema)
        duplicateData = true;
    }

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

      //CHECK FOR DUPLICATE ENTRIES
    }else if(duplicateData){
      alert("Diese Klausur existiert bereits");

    }else{
      //GET THE ID OF THE CLASS FROM CLASS TABLE
      $.get( "http://localhost:8080/api/classes", function( data ) {
        for(i of data){
          if(klausurKlasse == i.name){
            var klasseId = i.idklassen;
          }
        }
        //ADD NEW KLAUSUR TO DATABASE
        $.ajax({
          type: "POST",
          dataType:'json',
          url: "http://localhost:8080/api/exams",
          data: {"idklassen": klasseId, "lehrername": localStorage.getItem('lehrerNachname'), "klassename": klausurKlasse, "fach": fach.trim(), "datum": datum.trim(), "schulestunde": schulStunde, "raumnummer": raumNr, "thema": themen}
        });
      });
      alert("Ihre Klausur wurde erfolgreich hinzugefügt");
      location.reload();
    }
  });
});
