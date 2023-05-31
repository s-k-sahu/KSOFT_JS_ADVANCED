// const goBack = document.getElementById("goBack"),
//   goforward = document.getElementById("goForward"),
//   go = document.getElementById("goLink");

const btns = document.querySelectorAll("button");

btns.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    switch (e.target.textContent) {
      case "back":
        history.back();
        break;
      case "forward":
        history.forward;
        break;
      case "go":
        history.go(1);
        break;

      default:
        console.log("click any one of the button");
    }
    console.log(e.target.textContent);
  });
});

//   console.log(goBack)
//   console.log(goforward)
//   console.log(go)
