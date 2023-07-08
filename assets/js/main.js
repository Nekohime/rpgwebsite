'use strict';

const timeEl = document.querySelector('.time-now');

/** Main function */
function main() {
  setInterval(() => {
    timeEl.innerHTML = getFormattedTime();
  }, 100);
}

/**
  * @return {string} returns formatted time
*/
function getFormattedTime() {
  const dateTime = new Date();
  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  const seconds = dateTime.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}


main();
