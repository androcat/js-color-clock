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

//Background
const clockFace = document.querySelector(".clock-face");

function toHexColor(num) {
  return num.toString(16);
}
function currentSecHex() {
  let d = new Date();
  let s = d.getSeconds();
  let hexS = s.toString(16).toUpperCase();
  if (hexS.length === 1) {
    hexS = "0" + hexS;
  }
  return hexS;
}
function currentMinHex() {
  let d = new Date();
  let m = d.getMinutes();
  let hexM = m.toString(16).toUpperCase();
  if (hexM.length === 1) {
    hexM = "0" + hexM;
  }
  return hexM;
}
function currentHourHex() {
  let d = new Date();
  let h = d.getHours();
  let hexH = h.toString(16).toUpperCase();
  if (hexH.length === 1) {
    hexH = "0" + hexH;
  }
  return hexH;
}

setInterval(function () {
  clockFace.style.backgroundColor =
    "#07" + (currentMinHex() + 100) + (currentSecHex() + 100);
  console.log("#" + currentHourHex() + currentMinHex() + currentSecHex());
}, 1000);
