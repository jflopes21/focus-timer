export default function () {
  const buttonPressAudio = new Audio("./assets/sounds/button-press.wav");
  const kitchenTimer = new Audio("./assets/sounds/kichen-timer.mp3");
  const forestSound = new Audio("./assets/sounds/Floresta.wav");
  const rainSound = new Audio("./assets/sounds/Chuva.wav");
  const fireplaceSound = new Audio("./assets/sounds/Lareira.wav");
  const coffeeSound = new Audio("./assets/sounds/Cafeteria.wav");

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  return {
    pressButton,
    timeEnd,
    forestSound,
    rainSound,
    coffeeSound,
    fireplaceSound,
  };
}
