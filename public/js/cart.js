let addToCart = document.querySelectorAll('.add-to-cart')

let addToCart = document.querySelectorAll('.add-to-cart')






let carrito = [];

addToCart.forEach(addToCart => {
    addToCart.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
    let button = e.target;
    let producto = button.closest('.product-box') 
    let productImg = producto.querySelector('img').src;
    let productName = producto.querySelector('#name').textContent;
    let productDescription = producto.querySelector('#description').textContent;
    let productPrice = producto.querySelector('#price').textContent;
    let productId = producto.querySelector('button').getAttribute('value');

    let newItem = {
        image: productImg,
        name: productName,
        description: productDescription,
        price: productPrice,
        id: productId,
        cantidad: 1
    }
    console.log(productName,productDescription,productImg,productPrice)
    console.log(newCarrito)
    addItemCarrito(newItem);
    
}


function addItemCarrito(newItem){
    
    //let inputElement = tbody.getElementsByClassName("input-element");
    
    //Si aprieto comprar mas de una vez en el mismo producto, no me agrega el mismo producto al array. Modifica la cantidad
    for(let i = 0; i < carrito.length ; i++){
        if(carrito[i].id.trim() === newItem.id.trim()){
            carrito[i].cantidad ++;
            //let inputValue = inputElement[i];
            //inputValue.value ++;
            console.log(carrito)
            
            return null;
            
        }
    }
    carrito.push(newItem);
    
    addLocalStorage()
}

function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
}


window.addEventListener('load',function(){
    let storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){
    carrito = storage;
    renderCarrito()
    }
})









