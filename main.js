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

console.log(document.querySelector("clock-display"));
console.log(time());
setInterval(function () {
  clock.textContent = time();
}, 1000);
