//dynamic adding css inline styles unsing javascript

function css(element, styles) {
  for (const property in styles) {
    element.style[property] = styles[property];
  }
}


//get all the css properties and values using javascript
function getAllCSSProperties(element) {
  const computedStyle = getComputedStyle(element);

  // Loop through all the properties and values and log them to the console
  for (let i = 0; i < computedStyle.length; i++) {
    const property = computedStyle[i];
    const value = computedStyle.getPropertyValue(property);
    console.log(`${property}: ${value}`);
  }
}
