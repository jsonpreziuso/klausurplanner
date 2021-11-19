$(document).ready(function() {

  //UPDATE HEADER
  $("#klausurTermineTitel").text("Klausurtermine - " + localStorage.getItem('klasse'));

  //AUTOFILL DATATABLE
  $.get("http://localhost:8080/api/exams", function( data ) {
    var examID;
    for(i of data){
      if(localStorage.getItem('klasse') == i.klassename){
        examID = i.fk_klassen;
      }
    }
    $('#klausurTermineTabelle').DataTable({
          "processing" : true,
          "ajax" : {
              "url" : "http://localhost:8080/api/exams/"+examID,
              dataSrc : ''
          },
          "columns" : [{
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
});
