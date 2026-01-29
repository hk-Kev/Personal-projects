let convertBtn = document.getElementById("convert-btn");
let inputValue = document.getElementById("input-field");
let initialValue = document.querySelectorAll(".initial-value");

let metersFeet = document.getElementById("meter-feet");
let feetMeters = document.getElementById("feet-meters");

let litersGallons = document.getElementById("liters-gallons");
let gallonsLiters = document.getElementById("gallons-liters");

let kilosPounds = document.getElementById("kilos-pounds");
let poundsKilos = document.getElementById("pounds-kilos");
console.log(inputValue.value);

convertBtn.addEventListener("click", function () {
  let num = Number(inputValue.value);
  for (let i = 0; i < initialValue.length; i++) {
    initialValue[i].textContent = num;
    initialValue[i].style.fontWeight = "bolder";
  }

  //   console.log(poundsKilos.textContent);

  feetMeters.textContent = (num / (1 / 3.281)).toFixed(3);
  feetMeters.style.fontWeight = "bolder";

  metersFeet.textContent = (num * 3281).toFixed(3);
  metersFeet.style.fontWeight = "bolder";

  litersGallons.textContent = (num * 0.264).toFixed(3);
  litersGallons.style.fontWeight = "bolder";

  gallonsLiters.textContent = (num / (1 / 0.264)).toFixed(3);
  gallonsLiters.style.fontWeight = "bolder";

  kilosPounds.textContent = (num * 2.204).toFixed(3);
  kilosPounds.style.fontWeight = "bolder";

  poundsKilos.textContent = (num / (1 / 2.204)).toFixed(3);
  poundsKilos.style.fontWeight = "bolder";
});
