let hamburger = document.querySelector('.fa-align-left')

hamburger.addEventListener('click', (e) => {
    let elm = document.getElementById('ham')
if ( elm.style.display == '' || elm.style.display == 'none' ){
    elm.style.display = 'block';
}else {
    elm.style.display = 'none'
}
   
});

//Menu desplegable de login/logout
let desplegable = document.querySelector('#desplegable')
let desple = document.getElementById('desple')
desplegable.addEventListener('mouseover', (e) => {
  
if ( desple.style.display == '' || desple.style.display == 'none' ){
    desple.style.display = 'block';
}
});

desple.addEventListener('mouseover', (e) => {
    if ( desple.style.display == '' || desple.style.display == 'none' ){
        desple.style.display = 'block';
    }
    });

desple.addEventListener('mouseout', (e) => {
if ( desple.style.display == '' || desple.style.display == 'block' ){
    desple.style.display = 'none';
}
});

//Menu desplegable de listados
let desplegableListado = document.querySelector('#desplegable-listado')
let despleListado = document.getElementById('desple-listado')

desplegableListado.addEventListener('mouseover', (e) => {
  
if ( despleListado.style.display == '' || despleListado.style.display == 'none' ){
    despleListado.style.display = 'block';
}
});

despleListado.addEventListener('mouseover', (e) => {
    if ( despleListado.style.display == '' || despleListado.style.display == 'none' ){
        despleListado.style.display = 'block';
    }
    });

despleListado.addEventListener('mouseout', (e) => {
if ( despleListado.style.display == '' || despleListado.style.display == 'block' ){
    despleListado.style.display = 'none';
}
});