// Clock
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  document.getElementById('clock').textContent = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

// Stopwatch
let stopwatchInterval;
let stopwatchTime = 0;

function updateStopwatch() {
  stopwatchTime++;
  const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
  const seconds = String(stopwatchTime % 60).padStart(2, '0');
  document.getElementById('stopwatch').textContent = `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchTime = 0;
  document.getElementById('stopwatch').textContent = "00:00:00";
}

// Countdown
let countdownInterval;
let countdownRemaining = 0;

function updateCountdown() {
  if (countdownRemaining > 0) {
    countdownRemaining--;
    const minutes = String(Math.floor(countdownRemaining / 60)).padStart(2, '0');
    const seconds = String(countdownRemaining % 60).padStart(2, '0');
    document.getElementById('countdown').textContent = `${minutes}:${seconds}`;
  } else {
    clearInterval(countdownInterval);
    countdownInterval = null;
    alert("⏰ Countdown Finished!");
  }
}

function startCountdown() {
  const input = parseInt(document.getElementById('countdown-input').value);
  if (!isNaN(input) && input > 0) {
    countdownRemaining = input;
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
  } else {
    alert("Please enter a valid number of seconds.");
  }
}

function resetCountdown() {
  clearInterval(countdownInterval);
  countdownInterval = null;
  document.getElementById('countdown').textContent = "00:00";
}
