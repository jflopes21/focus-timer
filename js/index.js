import Sound from "./sounds.js";
import Events from "./events.js";
import Timer from "./timer.js";
import Controls from "./controls.js";
import {
  buttonLightMode,
  buttonDarkMode,
  minutesDisplay,
  secondsDisplay,
  body
} from "./elements.js";

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
});

const controls = Controls({
  buttonLightMode,
  buttonDarkMode,
  body
});

const sound = Sound();

Events({timer, sound, controls });
