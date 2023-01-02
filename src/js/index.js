const input = document.querySelector('.input');
const errorNotice = document.querySelector('.invalid-message');
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.getElementById('form').addEventListener('submit',(event)=>{
    event.preventDefault();
    if (input.value === '') {
        inputInvalid()
        input.placeholder = 'exemple@email/com'  
        errorNotice.innerHTML = 'Whoops! It looks like you forgot to add your email'
    } else if (!input.value.match(emailFormat)) {
        inputInvalid()
        errorNotice.innerHTML = 'Please provide a valid email address'
    } else {
        inputValid()
    }
});

function inputInvalid(){
    errorNotice.style.display = 'block'
    input.classList.add('input-invalid')
}

function inputValid(){
    errorNotice.style.display = 'none'
    input.classList.remove('input-invalid')
}