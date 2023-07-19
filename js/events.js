import {
  buttonPlay,
  buttonStop,
  buttonAdd,
  buttonRemove,
  buttonReset,
  minutesDisplay,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
} from "./elements.js";

export default function ({ timer, sound }) {
  buttonPlay.addEventListener("click", function () {
    timer.countdown();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", function () {
    timer.hold();
    sound.pressButton();
  });

  buttonAdd.addEventListener("click", function () {
    timer.hold();
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5;
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(
      2,
      "0"
    );
  });

  buttonRemove.addEventListener("click", function () {
    timer.hold();
    if (Number(minutesDisplay.textContent) <= 0) {
      return;
    }
    if (minutesDisplay.textContent < 5) {
      minutesDisplay.textContent = 0;
    } else {
      minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5;
    }

    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(
      2,
      "0"
    );
  });

  buttonReset.addEventListener("click", function () {
    timer.resetDisplay();
  })

  buttonForest.addEventListener("click", function () {
    buttonForest.classList.toggle("active");
    sound.rainSound.pause();
    sound.coffeeSound.pause();
    sound.fireplaceSound.pause();

    if (buttonForest.classList.contains("active")) {
      buttonRain.classList.remove("active");
      buttonCoffee.classList.remove("active");
      buttonFireplace.classList.remove("active");
      sound.forestSound.play();
    } else {
      sound.forestSound.pause();
    }
  });

  buttonRain.addEventListener("click", function () {
    buttonRain.classList.toggle("active");
    sound.coffeeSound.pause();
    sound.fireplaceSound.pause();
    sound.forestSound.pause();

    if (buttonRain.classList.contains("active")) {
      buttonForest.classList.remove("active");
      buttonCoffee.classList.remove("active");
      buttonFireplace.classList.remove("active");
      sound.rainSound.play();
    } else {
      sound.rainSound.pause();
    }
  });

  buttonCoffee.addEventListener("click", function () {
    buttonCoffee.classList.toggle("active");
    sound.fireplaceSound.pause();
    sound.forestSound.pause();
    sound.rainSound.pause();

    if (buttonCoffee.classList.contains("active")) {
      buttonForest.classList.remove("active");
      buttonRain.classList.remove("active");
      buttonFireplace.classList.remove("active");
      sound.coffeeSound.play();
    } else {
      sound.coffeeSound.pause();
    }
  });

  buttonFireplace.addEventListener("click", function () {
    buttonFireplace.classList.toggle("active");
    sound.forestSound.pause();
    sound.rainSound.pause();
    sound.coffeeSound.pause();

    if (buttonFireplace.classList.contains("active")) {
      buttonForest.classList.remove("active");
      buttonRain.classList.remove("active");
      buttonCoffee.classList.remove("active");
      sound.fireplaceSound.play();
    } else {
      sound.fireplaceSound.pause();
    }
  });

  // buttonSoundOff.addEventListener("click", function () {
  //   buttonSoundOn.classList.remove("hide");
  //   buttonSoundOff.classList.add("hide");
  //   sound.bgAudio.play();
  // });

  // buttonSoundOn.addEventListener("click", function () {
  //   buttonSoundOn.classList.add("hide");
  //   buttonSoundOff.classList.remove("hide");
  //   sound.bgAudio.pause();
  // });
}