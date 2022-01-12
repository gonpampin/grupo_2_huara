let hamburger = document.querySelector('.fa-align-left')

hamburger.addEventListener('click', (e) => {
if (e && (document.getElementById('ham').className == 'no-desplegado')){
    document.getElementById('ham').classList.remove('no-desplegado');
    document.getElementById('ham').classList.add('desplegado')
}else{
    document.getElementById('ham').classList.remove('desplegado');
    document.getElementById('ham').classList.add('no-desplegado')
}
    //Esta tambien funciona
/*let elm = document.getElementById('ham');

if(elm.className === 'no-desplegado'){
    elm.className = 'desplegado';
} else {
    elm.className = 'no-desplegado';*/
})