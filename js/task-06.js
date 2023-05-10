const inputEl = document.querySelector("#validation-input");
const dataLength = input.getAttribute('data-length');
inputEl.addEventListener("blur", onInput);

function onInput (evt){
    if(evt.currentTarget.value.length === Number(dataLength)){
        inputEl.classList.remove(invalid);
        inputEl.classList.add(valid);

    }else{
    inputEl.classList.remove(valid);
    inputEl.classList.add(invalid);
}
}
