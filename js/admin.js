/*
Jason Preziuso
12ITa
15.09.2021
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

  teacherData = {};
//AUTOFILL DATATABLE
  $.get( "http://localhost:8080/api/teachers", function( data ) {
    teacherData = data;
    $('#adminTabelle').DataTable({
          "processing" : true,
          "ajax" : {
              "url" : "http://localhost:8080/api/teachers",
              dataSrc : ''
          },
          "columns" : [ {
              "data" : "idlehrer"
          },{
              "data" : "admin"
          },{
              "data" : "vorname"
          },{
              "data" : "nachname"
          },{
              "data" : "email"
          }]
    });
  });

//SELECT ROW AND AUTOFILL
  var lehrerSelected = false;
  var adminLehrerId;
  $('#adminTabelle').on("click","td",function(){
    lehrerSelected = true;
    $('#adminTabelle tr').css("background-color","");
    $('#adminTabelle tr').removeAttr("class");
    $(this).parent().css("background-color","#a5dee8");
    $(this).parent().attr("class","selectedTrue");

//AUTO FILL FIELDS WITH SELECTED ROW TEXT
    var adminVal = 0;
    if($(".selectedTrue").children().siblings(":first").text() == "True"){
      adminVal = 1;
    }
    adminLehrerId = parseInt($(".selectedTrue").children(":first").text());
    $("#adminFeld").val(adminVal);
    $("#vornameFeld").val($(".selectedTrue").children().siblings(":first").nextAll().eq(0).text());
    $("#nachnameFeld").val($(".selectedTrue").children().siblings(":first").nextAll().eq(1).text());
    $("#emailFeld").val($(".selectedTrue").children().siblings(":first").nextAll().eq(2).text());
  });

  //EINTRAGEN-FUNKTION
  $("#btnEintragen").click(function() {

    //VISUAL COLOUR FEEDBACK
    $("#vornameFeld").css("background-color","white");
    $("#nachnameFeld").css("background-color","white");
    $("#emailFeld").css("background-color","white");
    $("#adminFeld").css("background-color","white");

    //SAVE ALL INPUTED DATA INTO VARIABLES
    var vorname = $("#vornameFeld").val();
    var nachname = $("#nachnameFeld").val();
    var email = $("#emailFeld").val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var duplicateData = false;
    var adminText = "False";
    if($("#adminFeld").val() == 1){
      adminText = "True";
    }

    //CHECK FOR DUPLICATE ENTRIES
    for(i of teacherData){
      if(vorname.trim() == i.vorname && nachname.trim() == i.nachname && email == i.email && adminText == i.admin)
      duplicateData = true;
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
    }else if($("#adminFeld").val() != 0 && $("#adminFeld").val() != 1){
      alert("Admin Status ist leer");
      $("#adminFeld").css("background-color","lightcoral");

      //CHECK FOR DUPLICATE ENTRIES
    }else if(duplicateData){
      alert("Ihre ausgewählten Kontodaten sind nicht verfügbar");

      //VISUAL COLOUR FEEDBACK
      $("#vornameFeld").css("background-color","lightcoral");
      $("#nachnameFeld").css("background-color","lightcoral");
      $("#emailFeld").css("background-color","lightcoral");
      $("#adminFeld").css("background-color","lightcoral");

    }else{
      //ADD NEW USER TO DATABASE
      $.ajax({
        type: "POST",
        dataType:'json',
        url: "http://localhost:8080/api/teachers",
        data: {"admin": adminText, "vorname": vorname.trim(), "nachname": nachname.trim(), "email": email, "passwort": "default"}
      });
      alert("Ein neues Konto wurde erfolgreich hinzugefügt");
      location.reload();
    }
  });

//ANDEARN-FUNKTION
  $("#btnAendern").click(function() {

    //VISUAL COLOUR FEEDBACK
    $("#vornameFeld").css("background-color","white");
    $("#nachnameFeld").css("background-color","white");
    $("#emailFeld").css("background-color","white");
    $("#adminFeld").css("background-color","white");

    //MAKE SURE A USER IS SELECTED
    if(!lehrerSelected){
      alert("Bitte wählen Sie ein Lehrer/in aus");
    }else{

      if(confirm("Möchten Sie " + $(".selectedTrue").children().siblings(":first").nextAll().eq(0).text() + " " + $(".selectedTrue").children().siblings(":first").nextAll().eq(1).text() + " Konto-Daten wirklich ändern?")){

        //SAVE ALL INPUTED DATA INTO VARIABLES
        var vorname = $("#vornameFeld").val();
        var nachname = $("#nachnameFeld").val();
        var email = $("#emailFeld").val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var duplicateData = false;
        var adminText = "False";
        var adminCounter = 0;
        if($("#adminFeld").val() == 1){
          adminText = "True";
        }

        //CHECK FOR DUPLICATE ENTRIES
        for(i of teacherData){
          if(vorname.trim() == i.vorname && nachname.trim() == i.nachname && email == i.email && adminText == i.admin)
          duplicateData = true;

          if(i.admin == "True"){
            adminCounter++;
          }
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
        }else if($("#adminFeld").val() != 0 && $("#adminFeld").val() != 1){
          alert("Admin Status ist leer");
          $("#adminFeld").css("background-color","lightcoral");

          //CHECK FOR DUPLICATE DATA
        }else if(duplicateData){
          alert("Die ausgewählten Kontodaten sind bereits vorhanden");

          //VISUAL COLOUR FEEDBACK
          $("#vornameFeld").css("background-color","lightcoral");
          $("#nachnameFeld").css("background-color","lightcoral");
          $("#emailFeld").css("background-color","lightcoral");
          $("#adminFeld").css("background-color","lightcoral");

          //MAKE SURE AT LEAST 2 ADMINS WILL REMAIN
        }else if(adminCounter == 2 && adminText == "False" && $(".selectedTrue").children().siblings(":first").text() == "True"){
          alert("Der Administratorstatus dieses Benutzers kann nicht auf false geändert werden. Aus Sicherheitsgründen müssen immer 2 aktive Admins vorhanden sein");
          $("#adminFeld").css("background-color","lightcoral");

        }else{
          //CHANGE SELECTED USER'S ACCOUNT INFO
          $.ajax({
            type: "PUT",
            dataType:'json',
            url: "http://localhost:8080/api/teachers",
            data: {"idlehrer": adminLehrerId, "admin": adminText, "vorname": vorname.trim(), "nachname": nachname.trim(), "email": email}
          });
          alert("Ihre Kontodaten wurden erfolgreich aktualisiert");
          location.reload();
        }
      }
    }
  });

//LOESCH-FUNKTION
  $("#btnLoeschen").click(function() {
    var adminCounter = 0;
    var validId = false;
    var deletionId;

    //MAKE SURE A LEHRER IS SELECTED
    if(!lehrerSelected){
      alert("Bitte wählen Sie ein Lehrer/in aus");
    }else{

      if(confirm("Möchten Sie " + $(".selectedTrue").children().siblings(":first").nextAll().eq(0).text() + " " + $(".selectedTrue").children().siblings(":first").nextAll().eq(1).text() + "wirklich aus der Datenbank löschen?")){
        //CAPTURE VARIABLES FROM DATABASE
        $.get("http://localhost:8080/api/teachers", function( data ) {
          for(i of data){
            if(i.admin == "True"){
              adminCounter++;
            }
            if($(".selectedTrue").children(":first").text() == i.idlehrer){
              validId = true;
              deletionId = i.idlehrer;
            }
          }
          //CHECK IF AT LEAST 2 ADMINS WILL REMAIN
          if(adminCounter == 2 &&  $(".selectedTrue").children().siblings(":first").text() == "True"){
            alert("Der Administratorstatus dieses Benutzers kann nicht auf false geändert werden. Aus Sicherheitsgründen müssen immer 2 aktive Admins vorhanden sein");
            $("#adminFeld").css("background-color","lightcoral");
          }else if(validId){
            //DELETE SELECTED USER FROM DATABASE
            $.ajax({
              type: "DELETE",
              dataType:'json',
              url: "http://localhost:8080/api/teachers/:id",
              data: {"id": deletionId}
            });
            alert($(".selectedTrue").children().siblings(":first").nextAll().eq(0).text() + " " + $(".selectedTrue").children().siblings(":first").nextAll().eq(1).text() + " wurde erfolgreich aus der Datenbank gelöscht");
            location.reload();
          }
        });
      }
    }
  });

//PASSWORTZURUECKSETZEN-FUNKTION
  $("#btnPasswortZuruecksetzen").click(function() {
    //GRAB TEACHER ACCOUNT DATA
    var vorname = $(".selectedTrue").children().siblings(":first").nextAll().eq(0).text();
    var nachname = $(".selectedTrue").children().siblings(":first").nextAll().eq(1).text();
    var email = $(".selectedTrue").children().siblings(":first").nextAll().eq(2).text();
    var adminText = "False";
    if($("#adminFeld").val() == 1){
      adminText = "True";
    }
    //MAKE SURE A LEHRER IS SELECTED
    if(!lehrerSelected){
      alert("Bitte wählen Sie ein Lehrer/in aus");
    }else{

      if(confirm("Sind Sie sicher, dass Sie das Passwort von " + $(".selectedTrue").children().siblings(":first").nextAll().eq(0).text() + " " + $(".selectedTrue").children().siblings(":first").nextAll().eq(1).text() + " auf die Standardeinstellungen zurücksetzen möchten?")){
        //RESET SELECTED USER'S PASSWORD
        $.ajax({
          type: "PUT",
          dataType:'json',
          url: "http://localhost:8080/api/teachers",
          data: {"action" : "resetpassword", "idlehrer": adminLehrerId, "admin": adminText, "vorname": vorname.trim(), "nachname": nachname.trim(), "email": email, "passwort": "default"}
        });
        alert($(".selectedTrue").children().siblings(":first").nextAll().eq(0).text() + " " + $(".selectedTrue").children().siblings(":first").nextAll().eq(1).text() + "s Passwort wurde erfolgreich auf die Standardeinstellungen zurückgesetzt");
      }
    }
  });
});
