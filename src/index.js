//Los Angeles Clock

setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  );
}, 1000);

//Lisbon Clock
setInterval(function () {
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  let lisbonTime = moment().tz("Europe/Lisbon");

  lisbonDateElement.innerHTML = lisbonTime.format("MMMM Do YYYY");
  lisbonTimeElement.innerHTML = lisbonTime.format(
    "h:mm:ss:SS [<small>]A[</small>]"
  );
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  console.log(cityTimeZone);
  let cityTime = moment().tz(cityTimeZone);
  console.log(cityTime.format("MMMM Do YYYY"));
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = "Hello";
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
