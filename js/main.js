import { eventCache} from './services/proxy.js';
import { renderEvents } from './utils/events.js';
import { initializeButtonListeners } from './modules/buttonsChange.js';
import { eventListeners } from './utils/buttonsTarget.js';
import generateCalendar from './calendar/calendar.js';


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

document.addEventListener("DOMContentLoaded", function() {
  var calendarButton = document.getElementById("calendar-button");
  var calendarContainer = document.getElementById("calendar-container");

  calendarButton.addEventListener("click", function() {
    calendarContainer.classList.toggle("hidden");
  });

  var favoritesButton = document.querySelector(".tab-nav li:nth-child(1) button");
  var interestedButton = document.querySelector(".tab-nav li:nth-child(2) button");
  var goingButton = document.querySelector(".tab-nav li:nth-child(3) button");

  favoritesButton.addEventListener("click", function() {
    calendarContainer.classList.add("hidden");
  });

  interestedButton.addEventListener("click", function() {
    calendarContainer.classList.add("hidden");
  });

  goingButton.addEventListener("click", function() {
    calendarContainer.classList.add("hidden");
  });

  generateCalendar();
});