class PaginationView {
  _parentElement = document.querySelector(".pagination");
  _numberOfCountries = document.querySelector(".header__numberOf-countries");
  _data;
  render(data) {
    this._data = data;
    let markup = "";
    markup = this._generateMarkup();
    this._clearMarkup();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".pagination__btn-view-all");
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    if (this._data.results.length === 0) return;

    const numOfPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    this._numberOfCountries.innerHTML = "";

    this._numberOfCountries.innerHTML = `Showing <span>${
      this._data.page != numOfPages
        ? this._data.resultsPerPage * this._data.page
        : this._data.results.length
    } </span> out of <span>${this._data.results.length}</span> Countries`;

    if (this._data.page === 1 && numOfPages > 1)
      return `<button data-goto="${numOfPages}" class="pagination__btn pagination__btn-view-all">Show All ${this._data.results.length} Countries →</button>`;
    return "";
  }
  _clearMarkup() {
    this._parentElement.innerHTML = "";
  }
}

export default new PaginationView();
