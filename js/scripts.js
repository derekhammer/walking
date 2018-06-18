
var checkedTemp = parseInt($('input[name="tempature"]:checked').val());
var tempScore = 0;
var score = 0;
var temp = 88;
var weather = 0;
badWeather = false;
badTemp = false;

$(document).ready(function(){
  $("form#calculator").submit(function(){
    event.preventDefault();

debugger;

if (temp <= 59){
  tempScore = tempScore + 0;
} else if (temp <= 69){
  tempScore = tempScore + 1;
} else if (temp <= 79){
  tempScore = tempScore + 2;
} else if (temp <= 89){
  tempScore = tempScore + 3;
} else if (temp >= 90){
  tempScore = tempScore + 4;
} else {
  alert("No Tempature Selected");
  return;
}

if (checkedTemp === tempScore) {
  score = score + 3;
} else if (checkedTemp + 1 === tempScore || checkedTemp - 1 === tempScore) {
  score = score + 1;
} else {
  badTemp = true;
}

if (weather === $('input[name="weather"]:checked').val()) {
  score = score + 3;
} else {
  badWeather = true;
}

if (badWeather = true) {
  $("#showBadWeather").show();
}

if (badTemp = true) {
  $("#showBadTemp").show();
}

if (badWeather === false && badTemp === false){
  $("#showGreatDay").show();
}

if (score === 0) {
  $("#score0").show();
} else if (score === 1) {
  $("#score1").show();
} else if (score === 2) {
  $("#score2").show();
} else if (score === 3) {
  $("#score3").show();
} else if (score === 4) {
  $("#score4").show();
} else if (score === 5) {
  $("#score5").show();
} else if (score === 6) {
  $("#score6").show();
} else if (score === 7) {
  $("#score7").show();
} else if (score === 8) {
  $("#score8").show();
} else if (score === 9) {
  $("#score9").show();
} else {
  alert("error, bad score")
}


});
});
