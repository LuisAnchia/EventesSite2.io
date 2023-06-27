import { eventCache} from './modules/Proxy.js';
import { renderEvents } from './utils/events.js';

document.querySelector('.tab-nav').addEventListener('click', async function(event) {
  if (event.target.classList.contains('category-button')) {
    const category = event.target.dataset.category;
    const events = await eventCache[category];
    renderEvents(events);
  }
});
