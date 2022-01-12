let hamburger = document.querySelector('.fa-align-left')

hamburger.addEventListener('click', (e) => {
    let elm = document.getElementById('ham')
if ( elm.style.display == '' || elm.style.display == 'none' ){
    elm.style.display = 'block';
}else {
    elm.style.display = 'none'
}
   
});


let desplegable = document.querySelector('#desplegable')

desplegable.addEventListener('mouseover', (e) => {
    let desple = document.getElementById('desple')
if ( desple.style.display == '' || desple.style.display == 'none' ){
    desple.style.display = 'block';
}else {
    desple.style.display = 'none'
}

});
