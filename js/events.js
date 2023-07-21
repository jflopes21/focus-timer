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
  buttonLightMode,
  buttonDarkMode,
  volumeForest,
  volumeRain,
  volumeCoffee,
  volumeFireplace,
} from "./elements.js";

export default function ({ timer, sound, controls }) {
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
    timer.hold();
    timer.resetDisplay();
  });

  buttonForest.addEventListener("click", function () {
    buttonForest.classList.toggle("active");
    sound.rainSound.pause();
    sound.coffeeSound.pause();
    sound.fireplaceSound.pause();

    if (buttonForest.classList.contains("active")) {
      buttonRain.classList.remove("active");
      buttonCoffee.classList.remove("active");
      buttonFireplace.classList.remove("active");
      sound.forestSound.loop = true;
      sound.forestSound.play();

      volumeForest.addEventListener("input", function () {
        sound.forestSound.volume = volumeForest.value;
      });

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
      sound.rainSound.loop = true;
      sound.rainSound.play();

      volumeRain.addEventListener("input", function () {
        sound.rainSound.volume = volumeRain.value;
      });
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
      sound.coffeeSound.loop = true;
      sound.coffeeSound.play();

      volumeCoffee.addEventListener("input", function () {
        sound.coffeeSound.volume = volumeCoffee.value;
      });
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
      sound.fireplaceSound.loop = true;
      sound.fireplaceSound.play();

      volumeFireplace.addEventListener("input", function () {
        sound.fireplaceSound.volume = volumeFireplace.value;
      });
    } else {
      sound.fireplaceSound.pause();
    }
  });

  buttonLightMode.addEventListener("click", function () {
    controls.darkMode();
  });
  buttonDarkMode.addEventListener("click", function () {
    controls.lightMode();
  });
}
