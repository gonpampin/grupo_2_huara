let addToCart = document.querySelectorAll('.add-to-cart')
let listaCarrito = document.querySelector("#lista-carrito");
let listaCompra = document.querySelector("#lista-compra tbody");

console.log("este es el",listaCompra)



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
    //console.log(productName,productDescription,productImg,productPrice)
    //console.log(newCarrito)
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
            //console.log(carrito)
            
            return null;
            
        }
    }
    carrito.push(newItem);
    
    renderCarrito()
}




/*function renderCarritoDos(){
    listaCarrito.append(tr)
    
    console.log(listaCarrito)
}*/


function renderCarrito(){
      
    carrito.forEach(item => {
        
        let tr = document.createElement('tr')
        //tr.classList.add('itemCarrito)
        
        tr.innerHTML = `
        
        <td class="table__productos">
        <img src=${item.image}  alt="">
        <h6 class="title">${item.name}</h6>
        </td>
        <td class="table__price"><p>${item.description}</p></td>
        <td class="table__price"><p>${item.price}</p></td>
        <td class="table__cantidad">
        <input type="number" min="1" value=${item.cantidad} class="input-element">
        <button class="delete btn btn-danger">X</button>
        </td>
        
        `;
        //listaCompra.append(tr);
        
        
        
        //tr.querySelector(".delete").addEventListener('click',removeItemCarrito)
        //tr.querySelector(".input-element").addEventListener('change',sumaCantidad)
        
        console.log(tr)
    })
    
    addLocalStorage()
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









