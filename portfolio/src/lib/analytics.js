import ReactGA from 'react-ga4';
import TagManager from 'react-gtm-module';
import { googleTagId, googleTagManagerId } from './env';

let started = false;
let gaReady = false;
let lastPage = '';

export function initAnalytics() {
  if (started) return;
  started = true;

  if (googleTagId) {
    ReactGA.initialize(googleTagId);
    gaReady = true;
  }

  if (googleTagManagerId) {
    TagManager.initialize({ gtmId: googleTagManagerId });
  }
}

export function trackPageView(page) {
  if (!gaReady || !page || page === lastPage) return;
  lastPage = page;
  ReactGA.send({ hitType: 'pageview', page });
}
