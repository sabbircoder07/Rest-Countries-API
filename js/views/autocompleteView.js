import * as loadCountry from "../controller.js";

export class AutocompleteView {
  #parentElement = document.querySelector("#countryName");
  #parentElementSearch = document.querySelector(".cta__country-form");
  #autocompleteItem = document.querySelector(".autocompleteItem");
  #data;
  countryName;

  render(data) {
    this.#data = data;
    this.autocomplete(this.#parentElement, this.#data);
  }

  autocomplete = function (inputElement, dataArray) {
    let currentFocus = -1;
    inputElement.addEventListener("input", function (e) {
      let i,
        val = this.value;
      closeAllLists();
      if (!val) {
        return false;
      }
      currentFocus = -1;
      let autocompleteContainer = document.createElement("div");
      autocompleteContainer.setAttribute("id", this.id + "autocomplete-list");
      autocompleteContainer.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(autocompleteContainer);
      for (i = 0; i < dataArray.length; i++) {
        if (
          dataArray[i].substr(0, val.length).toUpperCase() === val.toUpperCase()
        ) {
          let autocompleteItem = document.createElement("div");
          autocompleteItem.innerHTML =
            "<strong>" + dataArray[i].substr(0, val.length) + "</strong>";
          autocompleteItem.innerHTML += dataArray[i].substr(val.length);
          let hiddenInput = document.createElement("input");
          hiddenInput.type = "hidden";
          hiddenInput.value = dataArray[i];
          autocompleteItem.appendChild(hiddenInput);
          autocompleteContainer.appendChild(autocompleteItem);
          autocompleteItem.addEventListener("click", function (e) {
            e.preventDefault();
            inputElement.value = this.getElementsByTagName("input")[0].value;
            this.countryName = this.getElementsByTagName("input")[0].value;
            loadCountry.searchResultCountryAutocomplete(this.countryName);
            closeAllLists();
          });
        }
      }
    });
    inputElement.addEventListener("keydown", function (e) {
      let listItems = document
        .getElementById(this.id + "autocomplete-list")
        .getElementsByTagName("div");
      if (e.keyCode === 40) {
        currentFocus++;
        addActive(listItems);
      } else if (e.keyCode === 38) {
        currentFocus--;
        addActive(listItems);
      } else if (e.keyCode === 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (listItems) listItems[currentFocus].click();
        }
      }
    });
    function addActive(listItems) {
      removeActive(listItems);
      if (currentFocus >= listItems.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = listItems.length - 1;
      listItems[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(listItems) {
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(element) {
      let listItems = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < listItems.length; i++) {
        if (element !== listItems[i] && element !== inputElement) {
          listItems[i].parentNode.removeChild(listItems[i]);
        }
      }
    }
    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
  };
}

export default new AutocompleteView();
