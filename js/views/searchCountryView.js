class SearCountryView {
  #parentElementSearch = document.querySelector(".cta__country-form");

  getCountyQuery(countryName) {
    console.log(countryName);
    if (!countryName) {
      return this.#parentElementSearch.querySelector(".input__country-name")
        .value;
    } else {
      return countryName;
    }
  }

  clearInput() {
    this.#parentElementSearch.querySelector(".input__country-name").value = "";
  }

  getRegionQuery() {
    return this.#parentElementSearch.querySelector(".region-list").value;
  }

  addHandlerSearchCountry(handler) {
    this.#parentElementSearch.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerSearchCountryByRegion(handler) {
    this.#parentElementSearch
      .querySelector(".region-list")
      .addEventListener("change", function (e) {
        e.preventDefault();
        handler();
      });
  }
}

export default new SearCountryView();
