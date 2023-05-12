const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", onInput);

function onInput (evt){
    if(evt.currentTarget.value.length === Number(dataLength)){
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
       

    }else{
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    
}
}


