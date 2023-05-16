// Sprawdź aktaulny status motywu, pobierz z localStorage
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () => {
  // Dodaj klasę "darkmode" z body
  document.body.classList.add("dark-theme");
  // Zaktualizuj stan w localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // Usuń klasę "darkmode" z body
  document.body.classList.remove("dark-theme");
  // Zaktualizuj stan w localStorage
  localStorage.setItem("darkMode", "null");
};

// Jeśli użytkownik wcześniej włączył darkmode -
// to rzeczy WYŁĄCZONE ustaw na WŁĄCZONE
// (unikanie potrzeby kliknięcia dwa razy, dla zresetowania stanu)
if (darkMode === "enabled") {
  enableDarkMode();
  document.getElementById("dark-mode-toggle").src =
    "../Gallery Web/images/icons/sun.svg";
  document.getElementById("gear-icon").src =
    "../Gallery Web/images/icons/settings-dark.svg";
  document.getElementById("up-arrow-img").src =
    "images/icons/up-arrow-dark.svg";
  document.getElementById("down-arrow-img").src =
    "images/icons/down-arrow-dark.svg";
  document.getElementById("cutlery-icon").src =
    "../Gallery Web/images/icons/cutlery-dark.png";
  document.getElementById("pot-icon").src =
    "../Gallery Web/images/icons/potted-plant-dark.png";
  document.getElementById("bone-icon").src = "images/icons/bone-dark.png";
  document.getElementById("atom-icon").src = "images/icons/atom-dark.png";
}

// Jak ktoś kliknie przycisk zmiany motywu
darkModeToggle.addEventListener("click", () => {
  // Weź ustawienia dark mode z localStorage
  darkMode = localStorage.getItem("darkMode");

  // Jeśli aktualnie nie jest włączony, to go włącz
  if (darkMode !== "enabled") {
    enableDarkMode();
    document.getElementById("dark-mode-toggle").src =
      "../Gallery Web/images/icons/sun.svg";
    document.getElementById("gear-icon").src =
      "../Gallery Web/images/icons/settings-dark.svg";
    document.getElementById("up-arrow-img").src =
      "images/icons/up-arrow-dark.svg";
    document.getElementById("down-arrow-img").src =
      "images/icons/down-arrow-dark.svg";
    document.getElementById("cutlery-icon").src =
      "../Gallery Web/images/icons/cutlery-dark.png";
    document.getElementById("pot-icon").src =
      "../Gallery Web/images/icons/potted-plant-dark.png";
    document.getElementById("bone-icon").src = "images/icons/bone-dark.png";
    document.getElementById("atom-icon").src = "images/icons/atom-dark.png";
    // A jeśli poprzednio go włączyłeś, to to wyłącz
  } else {
    disableDarkMode();
    document.getElementById("dark-mode-toggle").src =
      "../Gallery Web/images/icons/moon.svg";
    document.getElementById("gear-icon").src =
      "../Gallery Web/images/icons/settings.svg";
    document.getElementById("up-arrow-img").src = "images/icons/up-arrow.svg";
    document.getElementById("down-arrow-img").src =
      "images/icons/down-arrow.svg";
    document.getElementById("cutlery-icon").src =
      "../Gallery Web/images/icons/cutlery.png";
    document.getElementById("pot-icon").src =
      "../Gallery Web/images/icons/potted-plant.png";
    document.getElementById("bone-icon").src = "images/icons/bone.png";
    document.getElementById("atom-icon").src = "images/icons/atom.png";
  }
});
