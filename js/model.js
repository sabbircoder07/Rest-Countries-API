import { API_URL, COUNTRY_PER_PAGE } from "./config.js";
import { getJSON } from "./helper.js";

export const state = {
  countyList: {
    query: "",
    results: [],
    resultsPerPage: COUNTRY_PER_PAGE,
    page: 1,
  },
  regions: [],
  countryDetails: {
    query: "",
    name: "",
    nativeName: "",
    population: "",
    populationOnWord: "",
    region: "",
    subregion: "",
    capital: "",
    topLevelDomain: "",
    currencies: [],
    languages: [],
    borders: [],
    flag: "",
  },
  currentMode: "",
};

export const getCurrentMode = function (currentMode) {
  try {
    localStorage.setItem("currentMode", currentMode);
    const currentStMode = localStorage.getItem("currentMode");
    if (currentStMode) state.currentMode = currentStMode;
  } catch (err) {
    throw err;
  } finally {
  }
};

export const loadCurrentMode = function (currentMode) {
  try {
    const currentModeByStorage = localStorage.getItem("currentMode");
    if (currentModeByStorage) {
      state.currentMode = currentModeByStorage;
    } else {
      state.currentMode = currentMode;
    }
  } catch (err) {
    throw err;
  } finally {
  }
};

export const getAllCountries = async function () {
  try {
    const data = await getJSON(`${API_URL}/all`);

    state.countyList.results = data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
  }
};
/******  93714125-661a-43ef-908d-0bf8d66b61e7  *******/

export const getAllRegions = async function () {
  try {
    const data = await getJSON(`${API_URL}/all`);
    let regionList = [];
    data.forEach((data) => {
      regionList.push(data.region);
    });
    state.regions = [...new Set(regionList)];
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
  }
};

export const loadSearchResultByCountry = async function (country) {
  try {
    state.countyList.query = country;
    const data = await getJSON(`${API_URL}/name/${country}`);
    state.countyList.results = data;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
  }
};

export const loadCountryByRegion = async function (region) {
  try {
    state.countyList.query = region;
    const data = await getJSON(`${API_URL}/region/${region}`);
    state.countyList.results = data;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
  }
};

export const loadCountryDetails = async function (CountryName) {
  try {
    const allCountriesData = await getJSON(`${API_URL}/all`);
    state.countyList.results = allCountriesData;

    state.countryDetails.query = CountryName;
    let data = await getJSON(`${API_URL}/name/${CountryName}?fullText=true`);
    data = data[0];
    console.log(data.borders);
    if (data.borders) {
      if (allCountriesData.length > 0 && data.borders.length > 0) {
        const getBorderCountriesNames = (data) =>
          [...allCountriesData].reduce((a, c) => {
            data.borders.includes(c.cca3) && a.push(c.name.common);
            return a;
          }, []);
        state.countryDetails.borders = getBorderCountriesNames(data);
      }
    }

    state.countryDetails.name = data.name.common;
    state.countryDetails.nativeName = data.nativeName;
    state.countryDetails.population = data.population;
    state.countryDetails.region = data.region;
    state.countryDetails.subregion = data.subregion;
    state.countryDetails.capital = data.capital;
    state.countryDetails.topLevelDomain = data.topLevelDomain;
    state.countryDetails.currencies = data.currencies;
    state.countryDetails.languages = data.languages;
    state.countryDetails.flag = data.flags.png;
  } catch (err) {
    throw err;
  } finally {
  }
};

export const getCountriesByPage = function (page = state.countyList.page) {
  try {
    state.countyList.page = page;
    const start = 0;
    const end = page * state.countyList.resultsPerPage;
    return state.countyList.results.slice(start, end);
  } catch (err) {
    throw err;
  }
};
