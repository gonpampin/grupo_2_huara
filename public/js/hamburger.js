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
