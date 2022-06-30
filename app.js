const minute = document.querySelector("#minute");
const millisecond = document.querySelector("#millisecond");
const second = document.querySelector("#second");
const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");
const btnReset = document.querySelector("#reset");
let i = 0;
let j = 0;
let m = 0;
let interval;
let startCOunter = true;
btnStart.addEventListener("click", () => {
  if (startCOunter) {
    startCOunter = false;
    interval = setInterval(() => {
      millisecond.textContent = i;
      i++;
      if (i >= 100) {
        millisecond.textContent = 0;
        i = 0;
        second.textContent = j + 1;
        j++;
        if (j > 60) {
          second.textContent = 0;
          j = 0;
          minute.textContent = m + 1;
          m++;
        }
      }
    }, 10);
  } else {
    return;
  }
});

btnStop.addEventListener("click", () => {
  clearInterval(interval);
  startCOunter = true;
});

btnReset.addEventListener("click", () => {
  millisecond.textContent = 0;
  second.textContent = 0;
  minute.textContent = 0;
  i = 0;
  j = 0;
  m = 0;
  startCOunter = true;
  clearInterval(interval);
});
