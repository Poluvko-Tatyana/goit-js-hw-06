const inputEl = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
inputEl.addEventListener("input", onInput);

function onInput (evt){
if(evt.currentTarget.value === ""){
    inputEl.textContent = "Anonymous";
} else {
    nameOutput.textContent = evt.currentTarget.value;
}
}

