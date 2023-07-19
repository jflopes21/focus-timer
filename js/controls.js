export default function Controls({ buttonLightMode, buttonDarkMode, body}) {
  function lightMode() {
    buttonLightMode.classList.remove("hide");
    buttonDarkMode.classList.add("hide");
    body.classList.toggle("dark");
  }

  function darkMode() {
    buttonLightMode.classList.add("hide");
    buttonDarkMode.classList.remove("hide");
    body.classList.toggle("dark");
  }

  return {
    lightMode,
    darkMode,
  };
}
