let hamburger = document.querySelector('.fa-align-left')

hamburger.addEventListener('click', (e) => {
    let elm = document.getElementById('ham')
if ( elm.style.display == '' || elm.style.display == 'none' ){
    elm.style.display = 'block';
}else {
    elm.style.display = 'none'
}
   
})