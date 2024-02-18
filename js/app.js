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
const hElements = document.querySelectorAll('.hover-element');

// Voeg event listeners toe aan elk gevonden element
hElements.forEach(element => {
  element.addEventListener('mouseover', () => {
    customCursor.classList.add("zoom")
  });

  element.addEventListener('mouseout', () => {
    customCursor.classList.remove('zoom')
  });
});


// Zoek alle elementen met de classname 'write-element'
const wElement = document.querySelectorAll('.write-element')

// Voeg event listeners toe aan elk gevonden element
wElement.forEach(element => {
  element.addEventListener('mouseover', () => {
    customCursor.classList.add("write")
  });

  element.addEventListener('mouseout', () => {
    customCursor.classList.remove('write')
  });
});

// Voeg deze klasse toe aan de :hover elementen class="hover-element"
// Voeg dit toe aan Html > body + <div id="custom-cursor"></div>

