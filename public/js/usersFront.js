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
let inputRe = document.querySelector('#passwordRe')
let ojoRe = document.querySelector('#ojoRe')

ojoRe.addEventListener('click', () => {
    if (inputRe.type == 'password') {
        ojoRe.classList.remove('fa-eye-slash');
        ojoRe.classList.add('fa-eye');
        inputRe.type = 'text';
    } else {
        ojoRe.classList.remove('fa-eye');
        ojoRe.classList.add('fa-eye-slash');
        inputRe.type = 'password';
    }
})

/* validacion de form*/

const regexValidationEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regexImageFormat = /\.(jpe?g|png|gif)(?:\?.*|)$/i;
let form = document.querySelector('#registerForm')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    /*validacion de nombre*/
    if (form.name.value == '') {
        swal('El nombre no puede estar vacío')
    } else if (form.name.value.length < 2) {
        swal('El nombre debe tener al menos dos caracteres')

        /*validacion de apellido*/
    } else if (form.lastname.value == '') {
        swal('El apellido no puede estar vacío')
    } else if (form.lastname.value.length < 2) {
        swal('El apellido debe tener al menos dos caracteres')

        //validacion de email
    } else if (form.email.value == '') {
        swal('El email no puede estar vacío')
    }else if (!(regexValidationEmail.test(form.email.value))) {
            swal('El email debe tener un formato válido')
    //validacion de imagen
    } else if (form.avatar.value == '') {
        swal('Debes cargar una imagen')
    }else if (!(regexImageFormat.test(form.avatar.value))) {
        swal('Debes cargar una imagen en formato ".jpg", ".png", ".gif",".jpeg"')
    
    //validacion de password
    } else if (form.contrasenia.value == '') {
        swal('La contraseña no puede estar vacía')
    } else if (form.contrasenia.value.length < 8) {
        //usar REGEX
        swal('La contraseña debe tener al menos 8 caracteres')
     
        //validacion de repassword
    } else if (form.recontrasenia.value != form.contrasenia.value) {
        //usar REGEX
        swal('Las contraseñas no coinciden')
    } else {
        form.submit()
    }

    
});



