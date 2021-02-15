import './styles.css';
import debounce from 'lodash.debounce';
import urlCountries from './js/fetchCountries.js';
import list from './templates/list.hbs';
import information from './templates/info.hbs';
import refs from './js/refs';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import { info, error } from '@pnotify/core';
import { defaults } from '@pnotify/core';

defaults.delay = 2000;
defaults.width = '300px';
defaults.styling = 'material';

function infoTitle() {
  info({
    text: 'Too many matches found. Please enter a more specific query!',
  });
}

function errorTitle() {
  error({
    text: 'Error. No country with that name!',
  });
}

function clear() {
  refs.container.innerHTML = '';
}
refs.input.addEventListener('input', debounce(handlerInput, 500));

function handlerInput() {
  let searchQuery = '';
  searchQuery = refs.input.value;
  console.log(searchQuery);

  if (!searchQuery) {
    clear();
    return;
  }

  urlCountries.fetchCountries(searchQuery).then(duildCountry).catch(errorTitle);
}

function duildCountry(countries) {
  if (countries.length > 10) {
    clear();
    infoTitle();
  } else if (countries.length >= 2 && countries.length <= 10) {
    clear();
    markupCountry(list, countries);
  } else if (countries.length === 1) {
    clear();
    markupCountry(information, countries[0]);
  } else {
    clear();
    errorTitle();
  }
}

function markupCountry(template, countries) {
  const markup = template(countries);
  refs.container.insertAdjacentHTML('beforeend', markup);
}
