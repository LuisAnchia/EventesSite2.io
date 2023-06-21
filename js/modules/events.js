import {formatDate, formatLocation, formatPrice} from './format.js'

export function renderEvents(events) {
  const grid = document.querySelector('.event-grid');
  grid.innerHTML = '';
  events.forEach(event => {
    const item = document.createElement('div');
    item.classList.add('event-item');
    item.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <h3>${event.title}</h3>
      <p class="color-date">${formatDate(event.date)}</p>
      <p class="color-footerTarget">${formatLocation(event.location)}</p>
      <p class="color-footerTarget">${formatPrice(event.price)}</p>
    `;
    grid.appendChild(item);
  });
}