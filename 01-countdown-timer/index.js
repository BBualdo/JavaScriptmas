const countdownDisplay = document.getElementById("countdown-display");
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

function renderCountdown() {
  const today = new Date();
  const christmas = 25;
  const daysToChristmas = christmas - today.getDate();
  return daysToChristmas;
  // Task:
  // - Get today's date (you only need the day).
  // - Calculate remaining days.
  // - Display remaining days in countdownDisplay.
}

function renderTimer() {
  const today = new Date();
  const tomorrow = today.getDate() + 1;
  const tomorrowDate = new Date(`2023-12-0${tomorrow}`);
  const timeRemaining = tomorrowDate - today;

  const hours =
    Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) - 1;
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
}

function updateTimerDisplay() {
  const { hours, minutes, seconds } = renderTimer();

  hoursDisplay.innerHTML = hours;
  minutesDisplay.innerHTML = minutes;
  secondsDisplay.innerHTML = seconds;
}

countdownDisplay.innerHTML = renderCountdown();

updateTimerDisplay();

setInterval(updateTimerDisplay, 1000);

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
