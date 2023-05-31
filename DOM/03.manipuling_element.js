// const elm = document.querySelector('.ele')
// console.log(elm)

//creating an element using JS
let element = document.createElement('div')

// adding content to the element
// element.textContent = '<p>alekha mute kare!</p>'
// element.innerText = '<h2>alekha mute kare!</h2>'
element.innerHTML = '<h1>alekha mute kare!</h1>'
//

// setting attribute to an element
// element.id = 'elm'
// element.className = 'elm'
element.setAttribute('id','idval')
element.setAttribute('class','class_value')
element.setAttribute('aria-label','class_value')
// 



//inserting element to the body
document.body.appendChild(element)
console.log(element)

//getting attribute from the element
console.log(element.getAttribute('id'))
console.log(element.getAttribute('class'))

//removing attribute from the element
element.removeAttribute('id')

//checking attribute present in the element
console.log(element.hasAttribute('id'))