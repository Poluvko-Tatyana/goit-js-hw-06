const inputEl = document.querySelector("#validation-input");
const dataLength = input.getAttribute('data-length');
inputEl.addEventListener("blur", onInput);

function onInput (evt){
    if(evt.currentTarget.value.length === Number(dataLength)){
        if(inputEl.classList.contains(invalid)){
            inputEl.classList.remove(invalid)
        }
        inputEl.classList.add(valid);

    }else if(evt.currentTarget.value.length === 0){
    if(inputEl.classList.contains(valid)){
        inputEl.classList.remove(valid)
    }
    inputEl.classList.add(invalid);
}
    else {
        inputEl.classList.add(invalid);
    }
}
