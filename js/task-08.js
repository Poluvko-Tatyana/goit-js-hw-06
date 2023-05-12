const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit (evt){
    evt.preventDefault()

    const mail = evt.currentTarget.elements.email.value;
    const password = evt.currentTarget.elements.password.value;
    const formData = {
        Email: mail,
        password: password};

    console.dir(formData)
}