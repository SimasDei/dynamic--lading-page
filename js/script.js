const HTMLelements = {
  time: document.getElementById('time'),
  greeting: document.getElementById('greeting'),
  name: document.getElementById('name'),
  focus: document.getElementById('focus'),
  body: document.querySelector('body'),
};

function showTime() {
  let today = new Date();
  const date = {};
  date.hour = today.getHours();
  date.min = today.getMinutes();
  date.sec = today.getSeconds();

  const amPm = date.hour >= 12 ? 'PM' : 'AM';
  date.hour = date.hour % 12 || 12;

  HTMLelements.time.innerHTML = `${date.hour}<span>:</span>${addZero(
    date.min,
  )}<span>:</span>${addZero(date.sec)}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBackground() {
  const today = new Date();
  const hour = today.getHours();
  const { greeting, body } = HTMLelements;

  if (hour < 12) {
    body.style.backgroundImage = `url('../img/1.jpg')`;
    greeting.textContent = 'Good Morning';
    body.style.color = '#fff';
  } else if (hour < 18) {
    body.style.backgroundImage = `url('../img/2.jpg')`;
    greeting.textContent = 'Good Afternoon';
    body.style.color = '#fff';
  } else if (hour < 20) {
    body.style.backgroundImage = `url('../img/3.jpg')`;
    greeting.textContent = 'Good Evening';
    body.style.color = '#fff';
  } else {
    body.style.backgroundImage = `url('../img/4.jpg')`;
    greeting.textContent = 'Good Night';
    body.style.color = '#fff';
  }
}

setBackground();
showTime();
