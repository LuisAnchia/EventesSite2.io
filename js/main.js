import { fetchEvents } from './modules/api.js';
import { renderEvents } from './modules/events.js';

const eventCache = new Proxy({}, {
  async get(target, category) {
    if (!(category in target)) {
      target[category] = await fetchEvents(category);
    }
    return target[category];
  }
});

document.querySelector('.tab-nav').addEventListener('click', async function(event) {
  if (event.target.tagName === 'A') {
    const category = event.target.dataset.category;
    const events = await eventCache[category];
    renderEvents(events);
  }
});