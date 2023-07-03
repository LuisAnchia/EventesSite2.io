const state = {
  interested: {
    handleClick: function (item, interestedButton, goingButton) {
      interestedButton.style.display = 'none';
      if (goingButton) {
        goingButton.style.display = 'inline-block';
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
        interestedButton.style.display = 'inline-block';
        if (goingButton) {
          goingButton.style.display = 'inline-block';
        }
      });
      item.appendChild(changedMindButton);
      return {
        state: state.going,
        message: message,
        changedMindButton: changedMindButton,
        button: interestedButton,
        goingButton: goingButton, 
      };
    },
  },
  going: {
    handleClick: function (item, goingButton, interestedButton) {
      goingButton.style.display = 'none';
      if (interestedButton) {
        interestedButton.style.display = 'none';
      }
      const message = document.createElement('p');
      message.textContent = "You're going to an event";
      message.classList.add('going-message');
      item.appendChild(message);
      const changedMindButton = document.createElement('button');
      changedMindButton.textContent = "Changed your mind?";
      changedMindButton.classList.add('changed-mind-button');
      changedMindButton.addEventListener('click', function () {
        item.removeChild(message);
        item.removeChild(changedMindButton);
        goingButton.style.display = 'inline-block';
        if (interestedButton) {
          interestedButton.style.display = 'inline-block';
        }
      });
      item.appendChild(changedMindButton);
      return {
        state: state.interested,
        message: message,
        changedMindButton: changedMindButton,
        button: goingButton,
        interestedButton: interestedButton, 
      };
    },
  },
};

let currentState = state.interested;

function handleClick(event) {
  if (event.target.classList.contains('interested-button')) {
    const item = event.target.parentNode;
    const interestedButton = event.target;
    const goingButton = item.querySelector('.going-button');
    const newState = currentState.handleClick(item, interestedButton, goingButton);
    currentState = newState.state;
    if (goingButton) {
      goingButton.style.display = 'inline-block';
    }
  }
  if (event.target.classList.contains('going-button')) {
    const item = event.target.parentNode;
    const goingButton = event.target;
    const interestedButton = item.querySelector('.interested-button');
    const newState = currentState.handleClick(item, goingButton, interestedButton);
    currentState = newState.state;
    interestedButton.style.display = 'none';
  }
  if (event.target.classList.contains('changed-mind-button')) {
    const item = event.target.parentNode;
    const message = item.querySelector('.going-message');
    const changedMindButton = event.target;
    const originalButton = currentState.button;
    const goingButton = currentState.goingButton; 
    const interestedButton = currentState.interestedButton; 
    item.removeChild(message);
    item.removeChild(changedMindButton);
    originalButton.style.display = 'inline-block';
    if (goingButton) {
      goingButton.style.display = 'inline-block';
    }
    if (interestedButton) {
      interestedButton.style.display = 'inline-block';
    }
  }
}

export const eventListeners = function () {
  document.addEventListener('click', handleClick);
}