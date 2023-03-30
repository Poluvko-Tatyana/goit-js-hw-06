const inputEl = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
inputEl.addEventListener("input", onInput);

function onInput (evt){
if(inputEl.value === ""){
    inputEl.textContent = "Anonymous";
} else {
    nameOutput.textContent = inputEl.value;
}
}

