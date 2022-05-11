let selected = "index.htm";
let previous = selected;


let change = () => {
  getElementById(selected).display = "block";
  getElementById()
}

window.onload = () => {
  for (let i of getElementsByClassName('switcher')) {
    i.addEventListener("onmouseup", () => {
      selected = (previous !== selected) ? i : selected;
      previous = selected;
    });
  }

  for (let i of getElementsByClassName('code')) {

  }
}
