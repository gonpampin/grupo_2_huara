let inputRe = document.querySelector('#passwordRe')
let ojoRe = document.querySelector('#ojoRe')

ojoRe.addEventListener('click', ()=>{
    if(input.type == 'password'){
        ojoRe.classList.remove('fa-eye-slash');
        ojoRe.classList.add('fa-eye');
        inputRe.type = 'text';
    }else{
        ojoRe.classList.remove('fa-eye');
        ojoRe.classList.add('fa-eye-slash');
        inputRe.type = 'password';
    }
})