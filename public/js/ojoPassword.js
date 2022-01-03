
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
let inputRe = document.querySelector('#passwordRe')
let ojoRe = document.querySelector('#ojoRe')

ojoRe.addEventListener('click', ()=>{
    if(inputRe.type == 'password'){
        ojoRe.classList.remove('fa-eye-slash');
        ojoRe.classList.add('fa-eye');
        inputRe.type = 'text';
    }else{
        ojoRe.classList.remove('fa-eye');
        ojoRe.classList.add('fa-eye-slash');
        inputRe.type = 'password';
    }
})