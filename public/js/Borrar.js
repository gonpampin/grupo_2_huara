//Seleccionamos la clase del boton
/*let addToCart = document.querySelectorAll('.add-to-cart');
//let carritNumero = document.querySelector('.fa-shopping-bag')

//Definimos la variable cart con un array vacío
let productos = [];



//preguntamos si hay algo en el localstorage. Sin esto, cada vez que refresquemos, el array "cart" se vaciaría
if(localStorage.getItem('productos')) {
    cart = JSON.parse(localStorage.getItem('productos'));
}

//Hasta acá tenemos la variable cart con dos opciones: carrito vacío o lleno.

//Agregamos el evento. Agregamos a "cart" con un push los productos que vamos comprando. 
addToCart.forEach(addToCart => {
    addToCart.addEventListener('click', (e) =>{

        productos.push(e.target.value)
        //carritNumero.innerText = cart.length
        localStorage.setItem('productos', JSON.stringify(cart));
    })
})*/


let addToCart = document.querySelectorAll('.add-to-cart')
//let tbody = document.querySelector('#tbody')






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

    //addItemCarrito(newItem);
}


function addItemCarrito(newItem){

    /*setTimeout(function(){
        //pooner un sweet alert si es que compra el mismo producto
    })*/

    //let inputElement = tbody.getElementsByClassName("input-element");

    //Si aprieto comprar mas de una vez en el mismo producot, no me agrega el mismo producto al array. Modifica la cantidad
    for(let i = 0; i < carrito.length ; i++){
        if(carrito[i].id.trim() === newItem.id.trim()){
            carrito[i].cantidad ++;
            //let inputValue = inputElement[i]
            //inputValue.value ++;
            //carritoTotal();

            return null;
        }
    }
    carrito.push(newItem);

    renderCarrito()
    //addLocalStorage()
       
}

function renderCarrito(){

   
    carrito.map(item => {
        
        let tr = document.createElement('tr')
        
        //tr.classList.add('.itemCarrito')

        let content = `
    
        <th scope="row">1</th>
            <td class="table__productos">
                <img src=${item.image}  alt="">
                <h6 class="title">${item.name}</h6>
            </td>
            <td class="table__price"><p>${item.description}</p></td>
            <td class="table__price"><p>${item.price}</p></td>
            <td class="table__cantidad">
                <input type="number" min="1" value=${item.cantidad} class="input-element">
                <button class="delete btn btn-danger">x</button>
            </td>
    
        `
        tr.innerHTML = content;
        //tbody.append(tr)

        //tr.querySelector(".delete").addEventListener('click',removeItemCarrito)
        //tr.querySelector(".input-element").addEventListener('change',sumaCantidad)
    
        
    })
    //carritoTotal();
}

/*function carritoTotal(){
    let total = 0;
    let itemCartTotal = document.querySelector('.itemCartTotal');
    carrito.forEach((item) => {
        let precio = Number(item.price.replace("$",''))
        total = total + precio*item.cantidad
    })
    
    itemCartTotal.innerHTML = `Total $${total}`;
    addLocalStorage()
}*/

/*function removeItemCarrito(e){
    let buttonDelete = e.target;
    let tr = buttonDelete.closest(".itemCarrito")
    let title = tr.querySelector(".title").textContent;
    for(let i=0; i<carrito.length ; i++){

        if(carrito[i].title.trim() === title.trim()){
            carrito.splice(i , 1)
            console.log("Se borró")
        }
    }
    tr.remove()
    carritoTotal();
}*/

/*function sumaCantidad(e){
    let sumaInput = e.target;
    let tr = sumaInput.closest(".itemCarrito")
    let title = tr.querySelector(".title").textContent;

    carrito.forEach(item => {
        if(item.title.trim() === title){
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            carritoTotal()
        }
    })
    console.log(carrito)

}*/

/*function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }*/


/*window.onload = function(){
    let storage = JSON.parse(localStorage.getItem('carrito'));
    if(storage){
      carrito = storage;
      renderCarrito()
    }
}*/


