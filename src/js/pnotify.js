import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import { info, error } from '@pnotify/core';
import { defaults } from '@pnotify/core';

defaults.delay = 2000;
defaults.width = '300px';
defaults.styling = 'material';

export function infoTitle() {
  info({
    text: 'Too many matches found. Please enter a more specific query!',
  });
}
export function errorTitle() {
  error({
    text: 'Error. No country with that name!',
  });
}
