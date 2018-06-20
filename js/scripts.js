

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

$(document).ready(function(){
  $("form#calculator").submit(function(){
    event.preventDefault();

    zipCode = $("#zip").val();
    var requestURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&APPID=8cc43ef0ee2dfb56027fa0a6ebfdc5f3";
    //var realWeather;


    console.log(requestURL);


    globalJSON = $.getJSON(requestURL).then(data => {
      realWeather = data.weather[0].icon;
      console.log(realWeather);
      temp = data.main.temp;
      console.log(temp);
      townName = data.name;
      console.log(townName);
      windScrape = data.wind.speed;
      console.log(windScrape);
      if (windScrape > 39) {
        alert("too windy");
      }
      $("#printName").text(townName);
      $("#printTemp").text(temp);
      $("#printWind").text(windScrape);

      if (realWeather === "01d" || realWeather === "01n"){
        weather1 = 0;
        printWeather = "Sunny";
      } else if (realWeather === "02d" || realWeather === "02n" || realWeather === "03d" || realWeather === "03n" || realWeather === "04d" || realWeather === "04n"){
        weather1 = 2;
        printWeather = "Cloudy";
      } else if (realWeather === "09d" || realWeather === "09n" || realWeather === "10d" || realWeather === "10n" || realWeather === "50d" || realWeather === "50n"){
        weather1 = 1;
        printWeather = "Rainy";
      } else if (realWeather === "13d" || realWeather === "13n") {
        weather1 = 3;
        printWeather = "Snowy";
      } else if (realWeather === "11d" || realWeather === "11n"){
        printWeather = "THUNDERSTORM";
        return;
      }

      $("#printWeather").text(printWeather);

      var checkedTemp = parseInt($('input[name="tempature"]:checked').val());

      if (temp <= 288.15){
        tempScore = tempScore + 0;
        alert("60 or below");
      } else if (temp <= 293.706){
        tempScore = tempScore + 1;
        alert("60 to 70");
      } else if (temp <= 299.261){
        tempScore = tempScore + 2;
        alert("70 to 80");
      } else if (temp <= 304.817){
        tempScore = tempScore + 3;
        alert("80 to 90");
      } else if (temp >= 305.372){
        tempScore = tempScore + 4;
        alert("90 or more");
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
});
