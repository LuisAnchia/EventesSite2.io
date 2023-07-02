import { eventCache} from './services/proxy.js';
import { renderEvents } from './utils/events.js';
import { initializeButtonListeners } from './modules/buttonsChange.js';
import { eventListeners } from './utils/buttonsTarget.js';

async function getAndRenderEvents(category) {
  const events = await eventCache[category];
  renderEvents(events);
}
window.addEventListener('load', async () => {
  await getAndRenderEvents('music');

  initializeButtonListeners();
  eventListeners();
});

document.querySelector('.tab-nav').addEventListener('click', async function (event) {
  if (event.target.classList.contains('category-button')) {
    const category = event.target.dataset.category;
    await getAndRenderEvents(category);
  }
});
