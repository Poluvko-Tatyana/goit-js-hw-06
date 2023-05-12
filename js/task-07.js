const inputEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector("#text");


inputEl.addEventListener("input", onInput);

function onInput (evt){
    spanTextEl.style.fontSize = evt.currentTarget.valueAsNumber + "px"
}
