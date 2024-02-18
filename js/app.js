// Bind de custom cursor aan een variable
const customCursor = document.getElementById('custom-cursor');

// Update mouse position to bind custom cursor div
const updateCursorPosition = (e) => {
  customCursor.style.top = `${e.pageY}px`;
  customCursor.style.left = `${e.pageX}px`;
}

window.addEventListener('mousemove', (event) => {
  updateCursorPosition(event)
})


// Zoek alle elementen met de classname 'hover-element'
const elements = document.querySelectorAll('.hover-element');

// Voeg event listeners toe aan elk gevonden element
elements.forEach(element => {
  element.addEventListener('mouseover', () => {
    customCursor.classList.add("zoom")

  });

  element.addEventListener('mouseout', () => {
    customCursor.classList.remove('zoom')
  });
});

// Voeg deze klasse toe aan de :hover elementen class="hover-element"
// Voeg dit toe aan Html > body + <div id="custom-cursor"></div>

