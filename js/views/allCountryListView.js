import View from "./view.js";

export class CountriesView {
  #parentElement = document.querySelector(".countries");
  #numberOfCountries = document.querySelector(".header__numberOf-countries");
  #data;
  render(data) {
    this.#data = data;
    let markup = "";
    markup = this.#generateMarkup();
    this.#clearMarkup();
    this.#parentElement.insertAdjacentHTML("beforeend", markup);
  }

  #clearMarkup() {
    this.#parentElement.innerHTML = "";
  }

  renderSpinner = function () {
    let markup = `<div class="loader-container">
  <div class="loader"></div>
  <div class="loader-text">Loading...</div>
</div>`;
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("beforeend", markup);
  };

  addHandlerRender(render) {
    ["load"].forEach((ev) => window.addEventListener(ev, render));
  }

  #generateMarkup() {
    let html = "";
    if (this.#data.length === 0) return;
    else {
      this.#numberOfCountries.innerHTML = `${
        this.#data.length
      } Countries Found`;
      this.#data.forEach((data, index) => {
        html += `
        <a class="countries__link" href="countryDetails.html?name=${
          data.name.common
        }">
        <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__number"><span>${index + 1}</span></div>
    <div class="country__data">
      <div class="country__heading-box">
      <h2 class="heading-secondary country__heading">${data.name.common}</h2>
      </div>
      <div class="country__info-box">
      <p class="country__row"><span>Population: </span>${data.population.toLocaleString()}</p>
      <p class="country__row"><span>Region: </span>${data.region}</p>
      <p class="country__row"><span>Capital: </span>${data.capital}</p>
      </div>
    </div>
  </article>
  </a>`;
      });
    }
    return html;
  }
}

export default new CountriesView();
