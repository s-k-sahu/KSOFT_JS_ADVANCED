// const elm = document.querySelector(".element");
// console.log(elm)

//adding style way-1
// elm.style.height = '200px'
// elm.style.width = '200px'
// elm.style.backgroundColor = 'red'

//adding style way-2
// elm.setAttribute('style','height:200px; width:200px; background-color:red')

//adding style way-3
// elm.style.cssText = 'height:200px; width:200px; background-color:red '

// adding style way-4
// function css(element, styles) {
//   for (const property in styles) {
//     element.style[property] = styles[property];
//   }
// }

// const styles = {
//     height:'300px',
//     width:"300px",
//     background:'cyan'
// }

// css(elm, { height: "100px", width: "100px", backgroundColor: "red" });
// css(elm, styles);

// let elm = document.createElement('div')
// css(elm,styles)
// document.body.appendChild(elm)

// const elm = document.querySelector('.container')
// console.log(elm)
// let styles = getComputedStyle(elm)
// let styles = getComputedStyle(document.documentElement)

// console.log(styles.fontSize)
// console.log(styles.backgroundColor)

// function getCssPropertynvalues (element){
//   let styles = getComputedStyle(elm)
// }

// css(elm,styles)

// function getAllCSSProperties(element) {
//   const computedStyle = getComputedStyle(element);

//   // Loop through all the properties and values and log them to the console
//   for (let i = 0; i < computedStyle.length; i++) {
//     const property = computedStyle[i];
//     const value = computedStyle.getPropertyValue(property);
//     console.log(`${property}: ${value}`);
//   }
// }

// getAllCSSProperties(elm)

// //get the variable value from css in javascript
// console.log(
//   getComputedStyle(document.documentElement).getPropertyValue("--bgColor")
// );

// //set the variable value of css using javascript
// document.documentElement.style.setProperty('--bgColor','green')

// console.log(
//   getComputedStyle(document.documentElement).getPropertyValue("--bgColor")
// );


const main = document.querySelector('main')
// console.log(main)
// console.log(main.classList)
// console.log(main.className)

// main.classList.add('siri')

// console.log(main.className)

// main.classList.remove('siri')
// main.classList.replace('siri','ghusuri')

// console.log(main.classList.contains('sir'))

console.log(main.offsetHeight)
console.log(main.offsetWidth)
console.log(main.offsetLeft)
console.log(main.offsetTop)
console.log(main.offsetParent)

console.log(main.getBoundingClientRect());

console.log(main.clientHeight)
console.log(main.clientWidth)
console.log(main.clientTop)
console.log(main.clientLeft)



