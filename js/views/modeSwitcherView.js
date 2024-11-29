export class ModeSwitcherView {
  #modeSwitcher = document.querySelector(".header__mode-switcher");
  #switcherText = document.querySelector(".header__mode-switcher__text-box");
  #modeSwitcherIcon = document.querySelector(".header__mode-switcher__icon");
  #data;

  render(data) {
    this.#data = data;
    this.#renderModeSwitcher();
  }

  getCountyQuery(currentMode) {
    if (!currentMode) {
      return this.#switcherText.textContent;
    } else {
      if (currentMode == "Dark Mode") {
        this.#data = "Light Mode";
      } else if (currentMode == "Light Mode") {
        this.#data = "Dark Mode";
      }
      return this.#data;
    }
  }

  addHandlerLoad(render) {
    window.addEventListener("load", render);
  }

  addHandlerClick(render) {
    this.#modeSwitcher.addEventListener("click", render);
  }

  #renderModeSwitcher() {
    let root = document.querySelector(":root");
    if (this.#data == "Dark Mode") {
      root.style.setProperty(
        "--color-Very-Light-Gray-Light-Mode-Background",
        "hsl(207, 26%, 17%)"
      );
      root.style.setProperty(
        "--color-White-Dark-Mode-Text-and-Light-Mode-Elements",
        "hsl(209, 23%, 22%)"
      );
      root.style.setProperty(
        "--color-Very-Dark-Blue-Light-Mode-Text",
        "hsl(0, 0%, 100%)"
      );
      root.style.setProperty(
        "--color-Dark-Gray-Light-Mode-Input",
        "hsl(0, 0%, 100%)"
      );
      this.#modeSwitcherIcon.src =
        "https://shivanarrthine.com/public/images/icons/sun.svg";
    } else {
      root.style.setProperty(
        "--color-Very-Light-Gray-Light-Mode-Background",
        "hsl(0, 0%, 98%)"
      );
      root.style.setProperty(
        "--color-White-Dark-Mode-Text-and-Light-Mode-Elements",
        "hsl(0, 0%, 100%)"
      );
      root.style.setProperty(
        "--color-Very-Dark-Blue-Light-Mode-Text",
        "hsl(200, 15%, 8%)"
      );
      root.style.setProperty(
        "--color-Dark-Gray-Light-Mode-Input",
        "hsl(0, 0%, 52%)"
      );
      this.#modeSwitcherIcon.src =
        "https://shivanarrthine.com/public/images/icons/moon.svg";
    }
    this.#switcherText.textContent =
      this.#data === "Light Mode" ? "Dark Mode" : "Light Mode";
  }
}

export default new ModeSwitcherView();
