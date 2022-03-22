const newYearDate = '1 Jan 2023'

let days = document.querySelector('#days');
let hours = document.querySelector('#hours');
let min = document.querySelector('#minutes');
let seconds = document.querySelector('#second');


function countDown() {
  const currentDate = new Date();
  const newDate = new Date(newYearDate);
  const second = (newDate - currentDate) / 1000;

  const day = Math.floor(second/3600/24);
  const hour = Math.floor(second/3600) % 24;
  const minute = Math.floor(second/60) % 60;
  const sec = Math.floor(second  % 60);

  days.innerHTML = formatTime(day);
  hours.innerHTML = formatTime(hour);
  min.innerHTML = formatTime(minute);
  seconds.innerHTML = formatTime(sec);
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}

countDown();

setInterval(countDown,1000);
