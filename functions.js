function hover(element) {
  element.setAttribute('src', element.src.slice(0, -4)+"-white.svg");
}

function unhover(element) {
  element.setAttribute('src', element.src.slice(0, -10)+".svg");
}
