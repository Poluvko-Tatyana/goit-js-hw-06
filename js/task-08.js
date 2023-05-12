const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit (evt){
    evt.preventDefault()

    const mail = evt.currentTarget.elements.email.value;
    const password = evt.currentTarget.elements.password.value;
    const message = 'всі поля повинні бути заповнені'

    if(mail === '' || password === ''){
        alert(message);
        return
    }
    const formData = {
        Email: mail,
        password: password};

    console.log(formData)   
    evt.currentTarget.reset();
}
