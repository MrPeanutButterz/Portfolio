const customCursor = document.getElementById('custom-cursor');
const hoverContainer = document.querySelector('.hover-container');

const updateCursorPosition = (event) => {
  customCursor.style.top = `${event.pageY}px`;
  customCursor.style.left = `${event.pageX}px`;
}

window.addEventListener('mousemove', (event) => {
  updateCursorPosition(event)

  if (hoverContainer.matches(':hover')) {
    customCursor.classList.remove('zoom')
  } else {
    customCursor.classList.add('zoom')
  }
})
