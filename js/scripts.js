var tempScore = 0;
var score = 0;
var temp = 0;
var weather1;
badWeather = false;
badTemp = false;
var zipCode;
var temp;
var realWeather;
var globalJSON;
var windScrape;
var townName;
var printWeather;

function clearForms(){
  score = 0;
  tempScore = 0;
  badWeather = false;
  badTemp = false;
  $("#space").show();
  $("#showBadWeather").hide();
  $("#showBadTemp").hide();
  $("#showGreatDay").hide();
  $("#thunder").hide();
  $("#score0").hide();
  $("#score1").hide();
  $("#score2").hide();
  $("#score3").hide();
  $("#score4").hide();
  $("#score5").hide();
  $("#score6").hide();
  $("#score7").hide();
  $("#score8").hide();
  $("#score9").hide();
  $("#printName").text("");
  $("#printTemp").text("");
  $("#printWind").text("");
  document.body.className = document.body.className.replace("cloud","basic");
  document.body.className = document.body.className.replace("sun","basic");
  document.body.className = document.body.className.replace("rain","basic");
  document.body.className = document.body.className.replace("snow","basic");
}

$(document).ready(function(){
  $("form#calculator").submit(function(){
    event.preventDefault();
    debugger;
    zipCode = $("#zip").val();
    var requestURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&APPID=8cc43ef0ee2dfb56027fa0a6ebfdc5f3";

    $("button").click(function(){
      clearForms();
    });

    globalJSON = $.getJSON(requestURL).then(data => {
      realWeather = data.weather[0].icon;
      temp = data.main.temp;
      townName = data.name;
      windScrape = data.wind.speed;
      if (windScrape > 39) {
        alert("too windy");
      }
      $("#printName").text(townName);
      $("#printTemp").text(Math.floor(((temp-273.15)*1.8)+32));
      $("#printWind").text(windScrape + " MPH");
      $("#space").hide();
      if (realWeather === "01d" || realWeather === "01n"){
        weather1 = 0;
        printWeather = "Sunny";
        document.body.className = document.body.className.replace("basic","sun");
      } else if (realWeather === "02d" || realWeather === "02n" || realWeather === "03d" || realWeather === "03n" || realWeather === "04d" || realWeather === "04n"){
        weather1 = 2;
        printWeather = "Cloudy";
        document.body.className = document.body.className.replace("basic","cloud");
      } else if (realWeather === "09d" || realWeather === "09n" || realWeather === "10d" || realWeather === "10n" || realWeather === "50d" || realWeather === "50n"){
        weather1 = 1;
        printWeather = "Rainy";
        document.body.className = document.body.className.replace("basic","rain");
      } else if (realWeather === "13d" || realWeather === "13n") {
        weather1 = 3;
        printWeather = "Snowy";
        document.body.className = document.body.className.replace("basic","snow");
      } else if (realWeather === "11d" || realWeather === "11n"){
        weather1 = 4;
        printWeather = "THUNDERSTORM";
        //FUCKING THUNDER
      }

      $("#printWeather").text(printWeather);

      var checkedTemp = parseInt($('input[name="tempature"]:checked').val());
      if (weather1 = 4){
        tempScore = 0;
      } else if (temp <= 288.15){
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
      if (weather1 === 4){
        $("#thunder").show();
      } else if (score === 0) {
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
    globalJSON.fail(function(){
      alert("Invalid zipcode, try again ;)");
      clearForms();
    })
  });

});
