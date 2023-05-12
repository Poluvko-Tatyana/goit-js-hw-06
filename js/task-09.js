function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.dir(getRandomHexColor)


const ButtonEl = document.querySelector(".change-color");
const Color = document.querySelector(".color")

ButtonEl.addEventListener("click", onButtonClick);

function onButtonClick (evt){
  document.body.style.backgroundColor = getRandomHexColor()
  Color.textContent = getRandomHexColor()
}

