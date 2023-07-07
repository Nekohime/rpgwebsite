'use strict';

const timeEl = document.querySelector('.time-now');

function main() {
  setInterval(() => {
    displayTime();
  }, 100);
}

function displayTime() {
  const dateTime = new Date();
  const time = dateTime.getHours() + ':' + dateTime.getMinutes() + ':' + dateTime.getSeconds();
  timeEl.innerHTML = time;
}


main();
