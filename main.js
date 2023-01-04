const clock = document.querySelector(".clock-display");

function time() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  return hours + ":" + minutes + ":" + seconds;
}

console.log(document.querySelector("clock-display"));
console.log(time());
setInterval(function () {
  clock.textContent = time();
}, 1000);
