const startBtn = document.querySelector("#start");

const screens = document.querySelectorAll(".screen");

const timeList = document.querySelector("#time-list");

let time = 0;

const board = document.querySelector("#board");

const timeEl = document.querySelector("#time");

let score = 0;

const colors = ["red", "blue", "yellow", "green"];

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCirclle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCirclle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Cчет: <span class='primary'>${score}</span></h1>`;
}

function createRandomCirclle() {
  const circle = document.createElement("div");
  const { width, height } = board.getBoundingClientRect();

  const size = getRandomNumber(10, 60);
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = `${getRandomColor()}`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  const indexRandom = Math.floor(Math.random() * colors.length);
  return colors[indexRandom];
}
