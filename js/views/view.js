export class View {
  #parentElementSpinner = document.querySelector(".countries");
  #errorMessage = "We could not find a country with that name.";

  renderSpinner = function () {
    let markup = `<div class="loader-container">
    <div class="loader"></div>
    <div class="loader-text">Loading...</div>
    </div>`;
    this.#parentElementSpinner.innerHTML = "";
    this.#parentElementSpinner.insertAdjacentHTML("beforeend", markup);
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
    this.#parentElementSpinner.innerHTML = "";
    this.#parentElementSpinner.insertAdjacentHTML("beforeend", markup);
  }
}

export default new View();
