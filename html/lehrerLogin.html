/*
Jason Preziuso
12ITa
15.09.2021
Klausurplanner Projekt
LF6 - Herr Grüning
*/
$(document).ready(function() {
  //GET LOGIN INFO FROM DATABASE
  $.get("http://localhost:8080/api/teachers", function( data ) {

    $("#btnLogin").click(function() {

      //SAVE USER INPUT
      var email = $("#emailFeld").val();
      var passwort = $("#passwortFeld").val();
      var correctLogin = false;
      var adminAccess = false;

      //SAVE ALL USER DATA INTO LOCAL STORAGE
      //NORMAL LOGIN
      for(i of data){
        if(email == i.email && passwort == i.passwort){
          correctLogin = true;
          localStorage.setItem('lehrerVorname', i.vorname);
          localStorage.setItem('lehrerNachname', i.nachname);
          localStorage.setItem('lehrerEmail', i.email);
          localStorage.setItem('lehrerId', i.idlehrer);
          localStorage.setItem('lehrerAdmin', i.admin);

        //ADMIN LOGIN
        }else if(email == i.email && passwort == "admin"){
          if(i.admin == "True"){
            adminAccess = true;
            //SAVE ALL USER DATA INTO LOCAL STORAGE
            localStorage.setItem('lehrerVorname', i.vorname);
            localStorage.setItem('lehrerNachname', i.nachname);
            localStorage.setItem('lehrerEmail', i.email);
            localStorage.setItem('lehrerId', i.idlehrer);
            localStorage.setItem('lehrerAdmin', i.admin);
          }
        }
      }

      //VALIDATE USER INPUT
      if(email.trim() == "" || passwort.trim() == ""){
        alert("Bitte geben Sie Ihre E-Mail und Ihr Passwort ein");
      }else if(correctLogin) {
        window.location.href='lehrerKlausur.html';
      }else if(adminAccess){
        window.location.href='admin.html';
      }else{
        alert("Ungültige Zugangsdaten");
      }
    });
  });
});
