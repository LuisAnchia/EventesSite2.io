import {formatDate, formatLocation, formatPrice} from '../modules/format.js'

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
    `;
    grid.appendChild(item);
  });
}

//<button class="favorite-button" data-event-id="${event.id}">Favorite</button>

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('interested-button')) {
    const item = event.target.parentNode;
    const interestedButton = event.target;
    const goingButton = item.querySelector('.going-button');
    if (interestedButton) {
      item.removeChild(interestedButton);
    }
    const message = document.createElement('p');
    message.textContent = "You're interested in going";
    message.classList.add('going-message');
    item.insertBefore(message, goingButton);
    const changedMindButton = document.createElement('button');
    changedMindButton.textContent = "Changed your mind?";
    changedMindButton.classList.add('changed-mind-button');
    changedMindButton.addEventListener('click', function() {
      item.removeChild(message);
      item.removeChild(changedMindButton);
      if (interestedButton) {
        item.insertBefore(interestedButton, goingButton);
      }
    });
    item.appendChild(changedMindButton);
  }
});