let count1 = 0;
let count2 = 0;
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let homeTeam = document.getElementById("home-team");
let guestTeam = document.getElementById("guest-team");
let resetBtn = document.getElementById("reset-btn");
let stopBtn = document.getElementById("stop-btn");
let winningTeam = document.getElementById("winner");
function plus1() {
  count1 += 1;
  score1.textContent = count1;
  highlightWinner();
}
function plus2() {
  count1 += 2;
  score1.textContent = count1;
  highlightWinner();
}
function plus3() {
  count1 += 3;
  score1.textContent = count1;
  highlightWinner();
}
function add1() {
  count2 += 1;
  score2.textContent = count2;
  highlightWinner();
}
function add2() {
  count2 += 2;
  score2.textContent = count2;
  highlightWinner();
}
function add3() {
  count2 += 3;
  score2.textContent = count2;
  highlightWinner();
}
function highlightWinner() {
  if (count1 > count2) {
    homeTeam.classList.add("winning");
    guestTeam.classList.remove("winning");
  } else if (count2 > count1) {
    homeTeam.classList.remove("winning");
    guestTeam.classList.add("winning");
  } else if (count1 == count2) {
    homeTeam.classList.remove("winning");
    guestTeam.classList.remove("winning");
  }
}

resetBtn.addEventListener("click", () => {
  count1 = 0;
  count2 = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  homeTeam.classList.remove("winning");
  guestTeam.classList.remove("winning");
  winningTeam.style.visibility = "hidden";
});

stopBtn.addEventListener("click", () => {
  score1.textContent = 0;
  score2.textContent = 0;
  homeTeam.classList.remove("winning");
  guestTeam.classList.remove("winning");
  if (count1 > count2) {
    winningTeam.textContent = "Home is our Winner";
  } else if (count1 < count2) {
    winningTeam.textContent = "Guest is our Winner";
  } else {
    winningTeam.textContent = "No one won, you're both loosers";
  }
  count1 = 0;
  count2 = 0;
});
