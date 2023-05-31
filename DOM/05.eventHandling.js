const elm = document.getElementById("main"),
  elm2 = document.getElementById("inp");

// elm.addEventListener("click",function(){
//     alert('nothing nothing!')
// })
// elm.addEventListener("click",()=>{
//     alert('nothing nothing!')
// })

// function onClick(e) {
// //   alert("nothing nothing!");
// console.log(e)
// console.log(e.target)
// console.log(e.type)
// }

// elm.addEventListener("click", onClick);
// elm.addEventListener("click", onClick,true);

// elm.addEventListener("mouseup", (e) => {
//   e.preventDefault();
//   if(e.altKey) console.log('alt key is pressed!')
//   if(e.ctrlKey) console.log('ctrl key is pressed!')
//   if(e.shiftKey) console.log('shift key is pressed!')

//   console.log(`x:${e.clientX} , y:${e.clientY}, mouse point of the element`)
//   console.log(`x:${e.screenX} , y:${e.screenY}, mouse point of the screen`)
//   console.log(e)
//   switch (e.button) {
//     case 0:
//       console.log(e.button, "left btn clicked");
//       break;
//     case 1:
//       console.log(e.button, "middle btn clicked");
//       break;
//     case 2:
//       console.log(e.button, "right btn clicked");
//       break;

//     default:
//       console.log("kuch bhi nahi dabaya tune!");
//   }
// });

// ? key events
// elm2.addEventListener('keydown',(e)=>{
//     console.log(`${e.key} : ${e.code}`)
// })

// ? scroll events
const elm3 = document.querySelector("#scroll");
console.log(elm3);
// elm3.style.height = '300px'
// elm3.style.width = '300px'
// elm3.style.border = '1px solid'
// elm3.style.backgroundColor = 'red'
// elm3.style.overflowY = 'auto'

elm3.setAttribute("style", "height:300px; width:300px; background-color:red; border:1px solid; overflow-y:auto");

elm3.addEventListener('scroll',(e)=>{
    console.log(e)
})