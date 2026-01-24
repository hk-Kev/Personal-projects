const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const uppers = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let characters = [];

let upperIncluded = document.getElementById("upper");
let lowerIncluded = document.getElementById("lower");
let numberIncluded = document.getElementById("numbers");
let symbolsIncluded = document.getElementById("symbols");
let firstPass = document.getElementById("first-pass");
let password = [];
let lengthValue = document.getElementById("password-length");
let slider = document.getElementById("slider");

function revealer() {
  lengthValue.textContent = slider.value;
}

function numberGenerator() {
  return Math.floor(Math.random() * characters.length);
}

function passwordGenerator() {
  password = [];
  characters = [];
  if (upperIncluded.checked) {
    characters.push(...uppers);
    console.log(characters);
  }
  if (lowerIncluded.checked) {
    characters.push(...lower);
  }
  if (numberIncluded.checked) {
    characters.push(...numbers);
  }
  if (symbolsIncluded.checked) {
    characters.push(...symbols);
  }
  firstPass.style.color = "#4adf86";
  for (let i = 0; i < slider.value; i++) {
    password.push(characters[numberGenerator()]);
  }
  firstPass.textContent = password.join("");
  if (
    !symbolsIncluded.checked &&
    !numberIncluded.checked &&
    !lowerIncluded.checked &&
    !upperIncluded.checked
  ) {
    // characters.push(...alphabet);
    firstPass.textContent = "Please Select something !!!!!";
    firstPass.style.color = "rgb(244, 10, 10)";
  }
}
