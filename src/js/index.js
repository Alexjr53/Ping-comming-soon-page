const input = document.querySelector('.input');
const errorMessage = document.querySelector('.invalid-message');
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.getElementById('btn').addEventListener('click',(event)=>{
    event.preventDefault();
    if (input.value === '' || !input.value.match(emailFormat) ) {
        errorMessage.style.display = 'block'
        input.classList.add('input-invalid')
        input.placeholder = 'exemple@email/com'  
    } else {
        errorMessage.style.display = 'none'
        input.classList.remove('input-invalid')
    }
});