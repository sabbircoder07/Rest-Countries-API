export class RegionsView {
  #parentElement = document.querySelector(".region-list");
  #parentElementSpinner = document.querySelector(".countries");
  #data;
  render(data) {
    this.#data = data;
    let markup = "";
    markup = this.#generateMarkup();
    this.#clearMarkup();
    this.#parentElement.insertAdjacentHTML("beforeend", markup);
  }

  #clearMarkup() {
    this.#parentElement.innerHTML =
      "<option selected disabled>Filter by Region</option>";
  }

  renderSpinner = function () {
    let markup = `<div class="loader-container">
  <div class="loader"></div>
  <div class="loader-text">Loading...</div>
</div>`;
    this.#parentElementSpinner.innerHTML = "";
    this.#parentElementSpinner.insertAdjacentHTML("beforeend", markup);
  };

  addHandlerRender(render) {
    ["load"].forEach((ev) => window.addEventListener(ev, render));
  }

  #generateMarkup() {
    let html = "";
    if (this.#data.length === 0) return;
    this.#data.forEach((region) => {
      html += `
      <option class="region-list" value="${region}">${region}</option>    
      `;
    });
    return html;
  }
}

export default new RegionsView();
