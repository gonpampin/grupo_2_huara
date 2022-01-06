
let input = document.querySelector('#password')
let ojo = document.querySelector('#ojo')

ojo.addEventListener('click', () => {
    if (input.type == 'password') {
        ojo.classList.remove('fa-eye-slash');
        ojo.classList.add('fa-eye');
        input.type = 'text';
    } else {
        ojo.classList.remove('fa-eye');
        ojo.classList.add('fa-eye-slash');
        input.type = 'password';
    }
});




/* validacion de form*/

const regexValidationEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

let form = document.querySelector('#loginForm')

console.log(form.email.value)

form.addEventListener('submit', (e) => {
    e.preventDefault()
   

    //validacion de email
    if (form.email.value == '') {
        swal('El email no puede estar vacío')
    }else if (!(regexValidationEmail.test(form.email.value))) {
            swal('El email debe tener un formato válido')
    
    
    //validacion de password
    } else if (form.contrasenia.value == '') {
        swal('La contraseña no puede estar vacía')
    } else if (form.contrasenia.value.length < 8) {
        //usar REGEX
        swal('La contraseña debe tener al menos 8 caracteres')
     
    } else {
        form.submit()
    }

    
});
