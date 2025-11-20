const seven = document.getElementById("num-seven");
const eight = document.getElementById("num-eight");
const nine = document.getElementById("num-nine");

const four = document.getElementById("num-four");
const five = document.getElementById("num-five");
const six = document.getElementById("num-six");

const one = document.getElementById("num-one");
const two = document.getElementById("num-two");
const three = document.getElementById("num-three");
const zero = document.getElementById("num-zero");

const del = document.getElementById("num-del");
const clear = document.getElementById("num-clear");

const times = document.getElementById("num-times");
const divide = document.getElementById("num-divide");

const plus = document.getElementById("num-plus");
const minus = document.getElementById("num-minus");

const dot = document.getElementById("num-dot");
const memory = document.getElementById("num-memory");
const calc = document.getElementById("num-calculate");

const body = document.body;

const power = document.querySelector(".btn-start");
let display = document.querySelector(".display-area");

let num1 = "";
let num2 = "";

seven.addEventListener("click", () => {
  console.log("object");
  display.value = "7";
});

eight.addEventListener("click", () => {
  console.log("object");
  display.value = "8";
});

nine.addEventListener("click", () => {
  console.log("object");
  display.value = "9";
});

four.addEventListener("click", () => {
  console.log("object");
  display.value = "4";
});

five.addEventListener("click", () => {
  console.log("object");
  display.value = "5";
});

six.addEventListener("click", () => {
  console.log("object");
  display.value = "6";
});

one.addEventListener("click", () => {
  console.log("object");
  display.value = "1";
});

two.addEventListener("click", () => {
  console.log("object");
  display.value = "2";
});

three.addEventListener("click", () => {
  console.log("object");
  display.value = "3";
});

seven.addEventListener("click", () => {
  console.log("object");
  display.value = "7";
});

zero.addEventListener("click", () => {
  console.log("object");
  display.value = "0";
});

dot.addEventListener("click", () => {
  console.log("object");
  display.value += ".";
});

clear.addEventListener("click", () => {
  display.value = "0";
});

function getnum_one() {}
