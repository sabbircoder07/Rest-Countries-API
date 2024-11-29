export class CountryDetailsView {
  #parentElement = document.querySelector(".country-details");
  #data;
  #errorMessage = "We could not find a country with that name.";
  render(data) {
    this.#data = data;
    let markup = "";
    markup = this.#generateMarkup();
    this.#clearMarkup();
    this.#parentElement.insertAdjacentHTML("beforeend", markup);
  }

  getCountyName() {
    const queryString = decodeURIComponent(
      window.location.search.split("=")[1]
    );
    return queryString;
  }

  addHandlerLoadCountry(render) {
    ["load"].forEach((ev) => window.addEventListener(ev, render));
  }

  addHandlerRender(render) {
    ["load"].forEach((ev) => window.addEventListener(ev, render));
  }

  renderSpinner = function () {
    let markup = `<div class="loader-container">
    <div class="loader"></div>
    <div class="loader-text">Loading...</div>
    </div>`;
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("beforeend", markup);
  };

  renderError(message = this.#errorMessage) {
    const markup = `<div class="message msg-danger">
    <div class="message-icon">
      <i class="ion-close-round">
      <img src="images/error_icon.svg" alt="error" />
      </i>
    </div>
    <div class="message-content">
      <p>${message}</p>
    </div>
    <a href="#" class="message-close">
      <img class="close-icon" src="images/cross-icon.svg" alt="close" />
    </a>  
  </div>`;
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("beforeend", markup);
  }

  #clearMarkup() {
    this.#parentElement.innerHTML = "";
  }

  #generateMarkup() {
    let html = "";
    if (this.#data.length === 0) return;

    html += `<article class="country-details__info">
    <img class="country-details__img" alt="${this.#data.name}" src="${
      this.#data.flag
    }" />
    <div class="country-details__data">
      <h1 class="heading-primary-large country-details__name">${
        this.#data.name
      }</h1>
      <div class="country-details__basic-details-info">
      <p class="country-details__row"><span>Native Name: </span>
      ${!this.#data.nativeName ? "Not Found" : this.#data.nativeName}
      </p>
      <p class="country-details__row"><span>Top Level Domain:</span>${
        !this.#data.topLevelDomain ? "Not Found" : this.#data.topLevelDomain
      } </p>
      <p class="country-details__row"><span>Population: </span>${this.#data.population.toLocaleString()}</p>
       <p class="country-details__row"><span>Currencies: </span>
      ${
        typeof this.#data.currencies === "object"
          ? this.#data.currencies[Object.keys(this.#data.currencies)[0]].name
          : ""
      }
      </p>

      <p class="country-details__row">
      <span>Region:</span>${this.#data.region}
      </p>
    
      <p class="country-details__row"><span>Languages: </span>
      ${Object.entries(this.#data.languages).map(([key, value]) => value)}
      </p>
      <p class="country-details__row"><span>Sub Region: </span>${
        this.#data.subregion
      }
        </p>
      <p class="country-details__row"><span>Capital: </span>${
        this.#data.capital
      }</p>
      </div>
      <div class="country-details__border-info">
        <p class="country-details__row"><span>Border Countries: </span></p>
        <div class="country-details__border-container">
        ${
          this.#data.borders
            ? this.#data.borders
                .map(
                  (border) =>
                    `<a href="countryDetails.html?name=${border}" class="country-details__border" >${border}</a>`
                )
                .join("")
            : "Not Found"
        }
        </div>
      </div>
    </div>  
  </article>`;

    return html;
  }
}

export default new CountryDetailsView();
