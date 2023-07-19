import Sounds from "./sounds.js";





buttonAdd.addEventListener("click", () => {
  hold();
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5;
  minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(
    2,
    "0"
  );
});

buttonRemove.addEventListener("click", () => {
  hold();
  if (Number(minutesDisplay.textContent) <= 0) {
    return;
  }

  minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5;
  minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(
    2,
    "0"
  );
});

buttonForest.addEventListener("click", () => {
  Sounds().pauseRain();
  Sounds().pauseCoffee();
  Sounds().pauseFireplace();
  Sounds().playForest();
});

buttonRain.addEventListener("click", () => {
  Sounds().pauseCoffee();
  Sounds().pauseFireplace();
  Sounds().pauseForest();
  Sounds().playRain();
});

buttonCoffee.addEventListener("click", () => {
  Sounds().pauseFireplace();
  Sounds().pauseForest();
  Sounds().pauseRain();
  Sounds().playCoffee();
});

buttonFireplace.addEventListener("click", () => {
  Sounds().pauseForest();
  Sounds().pauseRain();
  Sounds().pauseCoffee();
  Sounds().playFireplace();
});

buttonPlay.addEventListener("click", () => {
  Sounds().pressButton();
  countdown();
});

buttonStop.addEventListener("click", () => {
  Sounds().pressButton();
  hold();
});

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    let isFinished = minutes <= 0 && seconds <= 0;

    updateDisplay(minutes, 0);

    if (isFinished) {
      updateDisplay();
      Sounds().timeEnd();
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      --minutes;
    }

    updateDisplay(minutes, String(seconds - 1));

    countdown();
  }, 1000);
}

function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes;
  seconds = seconds === undefined ? 0 : seconds;
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function hold() {
  clearTimeout(timerTimeOut);
}
