const customCursor = document.getElementById('custom-cursor');
const hoverContainer = document.querySelector('.hover-container');

const updateCursorPosition = (e) => {
  customCursor.style.top = `${e.pageY}px`;
  customCursor.style.left = `${e.pageX}px`;
}

window.addEventListener('mousemove', (event) => {
  updateCursorPosition(event)

  if (hoverContainer.matches(':hover')) {
    customCursor.classList.remove('zoom')
  } else {
    customCursor.classList.add('zoom')
  }
})

//add this class to main  class="hover-container"
//add this div to body <div id="custom-cursor"></div>