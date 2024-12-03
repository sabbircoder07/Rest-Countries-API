import * as model from "./model.js";
import countriesView from "./views/allCountryListView.js";
import regionsView from "./views/regionListView.js";
import view from "./views/view.js";
import searchCountryView from "./views/searchCountryView.js";
import modeSwitcherView from "./views/modeSwitcherView.js";
import paginationView from "./views/paginationView.js";
import * as config from "./config.js";
import autocompleteView from "./views/autocompleteView.js";

/**
 * Fetches the information of all countries from the Rest Countries API
 * and renders them onto the page.
 * @async
 * @function
 * @returns {Promise<void>}
 */
const controlAllCountryInformation = async function () {
  try {
    view.renderSpinner();
    await model.getAllCountries();
    setTimeout(function () {
      const data = model.getCountriesByPage();
      countriesView.render(data);
      paginationView.render(model.state.countyList);
    }, config.SHOW_COUNTRIES_SEC * 1000);
  } catch (err) {
    // Alert the user of any errors
    view.renderError(err);
  }
};

const controlRegionList = async function () {
  try {
    view.renderSpinner();
    await model.getAllRegions();
    setTimeout(function () {
      const data = model.state.regions;
      regionsView.render(data);
    }, config.SHOW_COUNTRIES_SEC * 1000);
  } catch (err) {
    // Alert the user of any errors
    view.renderError(err);
  }
};

const controlLoadSearchResultByCountry = async function () {
  try {
    const country = searchCountryView.getCountyQuery();
    if (!country) return;
    view.renderSpinner();
    await model.loadSearchResultByCountry(country);
    setTimeout(function () {
      const data = model.getCountriesByPage();
      countriesView.render(data);
      paginationView.render(model.state.countyList);
    }, config.SHOW_COUNTRIES_SEC * 1000);
  } catch (err) {
    // Alert the user of any errors
    view.renderError(err);
  }
};

export const searchResultCountryAutocomplete = async function (country) {
  try {
    if (!country) return;
    view.renderSpinner();
    await model.loadSearchResultByCountry(country);
    setTimeout(function () {
      const data = model.getCountriesByPage();
      countriesView.render(data);
      paginationView.render(model.state.countyList);
    }, config.SHOW_COUNTRIES_SEC * 1000);
  } catch (err) {
    // Alert the user of any errors
    view.renderError(err);
  }
};

const controlLoadCountryByRegion = async function () {
  try {
    const region = searchCountryView.getRegionQuery();
    if (!region) return;
    view.renderSpinner();
    await model.loadCountryByRegion(region);
    setTimeout(function () {
      const data = model.getCountriesByPage();
      countriesView.render(data);
      searchCountryView.clearInput();
      paginationView.render(model.state.countyList);
    }, config.SHOW_COUNTRIES_SEC * 1000);
  } catch (err) {
    // Alert the user of any errors
    view.renderError(err);
  }
};

const controlModeSwitcher = function () {
  try {
    const currentMode = modeSwitcherView.getCountyQuery(
      model.state.currentMode
    );
    if (!currentMode) return;
    model.getCurrentMode(currentMode);
    const data = model.state.currentMode;
    modeSwitcherView.render(data);
  } catch (err) {
    // Alert the user of any errors
    view.renderError(err);
  }
};

const controlModeSwitcherPageLoad = function () {
  try {
    model.loadCurrentMode("Light Mode");
    const data = model.state.currentMode;
    modeSwitcherView.render(data);
  } catch (err) {
    // Alert the user of any errors
    view.renderError(err);
  }
};

const controlPagination = function (goToPage) {
  try {
    const data = model.getCountriesByPage(goToPage);
    countriesView.render(data);
    //renders countries
    //model.state.countyList
    paginationView.render(model.state.countyList);
  } catch (err) {
    // Alert the user of any errors
    view.renderError(err);
  } finally {
  }
};

const controlAutoCompleteCountryName = async function () {
  try {
    await model.getAllCountriesName();
    const data = model.state.countriesName;
    autocompleteView.render(data);
  } catch (err) {
    // Alert the user of any errors
    console.log(err);
    view.renderError(err);
  } finally {
  }
};

const init = function () {
  modeSwitcherView.addHandlerLoad(controlModeSwitcherPageLoad);
  modeSwitcherView.addHandlerClick(controlModeSwitcher);
  regionsView.addHandlerRender(controlRegionList);
  countriesView.addHandlerRender(controlAllCountryInformation);
  searchCountryView.addHandlerSearchCountry(controlLoadSearchResultByCountry);
  searchCountryView.addHandlerSearchCountryByRegion(controlLoadCountryByRegion);
  paginationView.addHandlerClick(controlPagination);
  controlAutoCompleteCountryName();
};

init();
