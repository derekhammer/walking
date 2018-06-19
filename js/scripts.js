

var tempScore = 0;
var score = 0;
var temp = 0;
var weather1 = 0;
badWeather = false;
badTemp = false;
var zipCode;


var requestURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&APPID=8cc43ef0ee2dfb56027fa0a6ebfdc5f3";
var globalJSON;



$(document).ready(function(){




  $("form#calculator").submit(function(){
    event.preventDefault();

zipCode = $("#zip").val();
console.log(zipCode);
debugger;
globalJSON = $.getJSON(requestURL).then(data => {
  var realWeather = data.weather[0].main;
  temp = data.main.temp;
});

var checkedTemp = parseInt($('input[name="tempature"]:checked').val());

if (temp <= 288.15){
  tempScore = tempScore + 0;
} else if (temp <= 293.706){
  tempScore = tempScore + 1;
} else if (temp <= 299.261){
  tempScore = tempScore + 2;
} else if (temp <= 304.817){
  tempScore = tempScore + 3;
} else if (temp >= 305.372){
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

if (weather1 === parseInt($('input[name="weather1"]:checked').val())) {
  score = score + 3;
} else {
  badWeather = true;
}

if (badWeather === true) {
  $("#showBadWeather").show();
}

if (badTemp === true) {
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
