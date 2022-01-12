//Seleccionamos la clase del boton
let addToCart = document.querySelectorAll('.add-to-cart');
let carritNumero = document.querySelector('.fa-shopping-bag')

//Definimos la variable cart con un array vacío
let cart = [];

localStorage.clear()

//preguntamos si hay algo en el localstorage. Sin esto, cada vez que refresquemos, el array "cart" se vaciaría
if(localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
}

//Hasta acá tenemos la variable cart con dos opciones: carrito vacío o lleno.

//Agregamos el evento. Agregamos a "cart" con un push los productos que vamos comprando. 
addToCart.forEach(addToCart => {
    addToCart.addEventListener('click', (e) =>{

        cart.push(e.target.value)
        carritNumero.innerText = cart.length
        localStorage.setItem('cart', JSON.stringify(cart));
    })
})

