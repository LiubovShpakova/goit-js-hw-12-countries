import list from '../templates/list.hbs';
import information from '../templates/info.hbs';
import refs from './refs';
import { infoTitle, errorTitle } from './pnotify.js';

export function clear() {
  refs.container.innerHTML = '';
}
export function duildCountry(countries) {
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
