export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
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
