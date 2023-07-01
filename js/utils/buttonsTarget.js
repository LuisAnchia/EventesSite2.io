export const eventListeners = function () {
    
document.addEventListener('click', function (event) {
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
      changedMindButton.addEventListener('click', function () {
        item.removeChild(message);
        item.removeChild(changedMindButton);
        if (interestedButton) {
          item.insertBefore(interestedButton, goingButton);
        }
      });
      item.appendChild(changedMindButton);
    }
    if (event.target.classList.contains('going-button')) {
      const item = event.target.parentNode;
      const goingButton = event.target;
      const interestedButton = item.querySelector('.interested-button');
  
      if (goingButton) {
        goingButton.style.display = 'none';
      }
  
      const message = document.createElement('p');
      message.textContent = "You're going to an event";
      message.classList.add('going-message');
      item.appendChild(message);
  
      const changedMindButton = document.createElement('p');
      changedMindButton.textContent = "Changed your mind?";
      changedMindButton.classList.add('changed-mind-button');
      changedMindButton.addEventListener('click', function () {
        item.removeChild(message);
        item.removeChild(changedMindButton);
        if (goingButton) {
          goingButton.style.display = 'inline-block';
        }
        if (interestedButton) {
          interestedButton.style.display = 'inline-block';
        }
      });
  
      item.appendChild(changedMindButton);
  
      if (interestedButton) {
        interestedButton.style.display = 'none';
      }
    }
  });
  }