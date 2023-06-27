import { fetchEvents } from './api.js';

export const eventCache = new Proxy({}, {
  async get(target, category) {
    if (!(category in target)) {
      target[category] = await fetchEvents(category);
    }
    return target[category];
  }
});

