import * as model from "./model.js";
import countryDetailsView from "./views/countryDetailsView.js";
import modeSwitcherView from "./views/modeSwitcherView.js";
import * as config from "./config.js";

const controlCountryDetails = async function () {
  try {
    const CountryName = countryDetailsView.getCountyName();
    if (!CountryName) return;
    countryDetailsView.renderSpinner();
    await model.loadCountryDetails(CountryName);
    setTimeout(function () {
      const data = model.state.countryDetails;
      countryDetailsView.render(data);
    }, config.SHOW_COUNTRIES_SEC * 1000);
    //renders countries
  } catch (err) {
    // Alert the user of any errors
    countryDetailsView.renderError(err);
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
    countryDetailsView.renderError(err);
  }
};

const controlModeSwitcherPageLoad = function () {
  try {
    model.loadCurrentMode("Light Mode");
    const data = model.state.currentMode;
    modeSwitcherView.render(data);
  } catch (err) {
    // Alert the user of any errors
    countryDetailsView.renderError(err);
  }
};

const init = function () {
  modeSwitcherView.addHandlerLoad(controlModeSwitcherPageLoad);
  modeSwitcherView.addHandlerClick(controlModeSwitcher);
  countryDetailsView.addHandlerRender(controlCountryDetails);
};

init();
