
let input = document.querySelector('#password')
let ojo = document.querySelector('#ojo')

ojo.addEventListener('click', ()=>{
    if(input.type == 'password'){
        ojo.classList.remove('fa-eye-slash');
        ojo.classList.add('fa-eye');
        input.type = 'text';
    }else{
        ojo.classList.remove('fa-eye');
        ojo.classList.add('fa-eye-slash');
        input.type = 'password';
    }
});
