const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveAway = document.querySelector(".giveaway");
const deadlineFormat = document.querySelectorAll(".deadline-format h4");

// setup giveaway date
const futureDate = new Date();

futureDate.setDate(futureDate.getDate() + 10);
futureDate.setHours(11, 30);

const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const month = months[futureDate.getMonth()];
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();

giveAway.innerHTML = `Giveaway ends ${weekday}, ${date} ${month} ${year}, ${hour}:${minute}`;

// setup count down
function calculateRemainingTime() {
  const currentTime = new Date().getTime();
  const remainingTime = futureDate.getTime() - currentTime;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const days = Math.floor(remainingTime / oneDay);
  const hours = Math.floor((remainingTime % oneDay) / oneHour);
  const minutes = Math.floor((remainingTime % oneHour) / oneMinute);
  const seconds = Math.floor((remainingTime % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function getCorrectFormat(item) {
    if (item < 10) {
      return `0${item}`;
    }

    return item;
  }

  deadlineFormat.forEach((item, index) => {
    item.innerHTML = getCorrectFormat(values[index]);
  });
}

const intervalId = setInterval(calculateRemainingTime, 1000);
