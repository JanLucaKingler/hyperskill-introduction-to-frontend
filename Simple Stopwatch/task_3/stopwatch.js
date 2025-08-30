const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");
const lapButtonEl = document.getElementById("lap");
const lapsListEl = document.getElementById("laps");

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

function startTimer() {
    if (isRunning) return;

    isRunning = true;
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerEl.textContent = formatTime(elapsedTime);
    }, 10);
}

function stopTimer() {
    if (!isRunning) return;

    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    timerEl.textContent = "00:00:00"
    lapsListEl.innerHTML = "";
}

function addLap() {
    if (!isRunning) return;

    const lapTime = formatTime(elapsedTime);
    const li = document.createElement("li");
    li.textContent = lapTime;
    lapsListEl.appendChild(li);
}

function formatTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    return (
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds)
    );
}
startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);
lapButtonEl.addEventListener("click", addLap);
