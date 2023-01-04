// Running clock
const clock = document.querySelector(".clock-display");

function time() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  return hours + ":" + minutes + ":" + seconds;
}

setInterval(function () {
  clock.textContent = time();
}, 1000);

//Running progress bar
const bar = document.querySelector(".clock-progress-bar");

function calcPercent(sec) {
  return sec / 60;
}

function currentSec() {
  let d = new Date();
  let s = d.getSeconds();

  return s;
}

setInterval(function () {
  bar.style.width = calcPercent(currentSec()) * 14 + "rem";
}, 100);
