import './styles.css';
import debounce from 'lodash.debounce';
import urlCountries from './js/fetchCountries.js';
import { clear, duildCountry } from './js/markupCountry.js';
import { errorTitle } from './js/pnotify.js';
import refs from './js/refs';

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
