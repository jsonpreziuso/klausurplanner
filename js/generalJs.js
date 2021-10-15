function overlayOn() {
    document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}

//TABS
$("#btnMeinKonto").click(function() {
  window.location.href='lehrerMeinKonto.html';
});
$("#btnKlasse").click(function() {
  window.location.href='lehrerKlasse.html';
});
$("#btnKlausur").click(function() {
  window.location.href='lehrerKlausur.html';
});
