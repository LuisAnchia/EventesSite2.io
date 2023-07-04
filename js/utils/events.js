import { formatDate, formatLocation, formatPrice } from '../modules/format.js'

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
      
      <button class="interested-button" data-event-id="${event.id}">Interested</button>
      <button class="going-button" data-event-id="${event.id}">Going!</button>
      <button class="new-button" data-event-id="${event.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/>
        </svg>
      </button>
    `;
    grid.appendChild(item);
  });
}