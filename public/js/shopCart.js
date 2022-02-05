let agregarProductoCarrito = document.querySelectorAll('#agregar-producto-carrito')

let carrito = [];

agregarProductoCarrito.forEach(agregarProductoCarrito => {
    agregarProductoCarrito.addEventListener('submit', (e) =>{
        e.preventDefault()

        let button = e.target;
        let producto = button.closest('.product-box') 
        let productId = producto.querySelector('button').getAttribute('value');

        let newItem = {
            id: productId
        }

        swal({
          title: "Buenísimo!",
          text: "Agregaste el producto al carrito!",
          icon: "success",
          button: "Que alegría !",
          })
          .then((resultado) => {
            agregarProductoCarrito.submit();
          })
  
      console.log("esto es new item",newItem)

      for(let i = 0; i < carrito.length ; i++){
        console.log("esto es carrito [i]",carrito[i])

       if(carrito[i].id.trim() === newItem.id.trim()){
         
            console.log("esto es el carrito",carrito)
            swal({
              title: "Oops...",
              text: "Ya agregaste este producto al carrito!",
              icon: "error",
              button: "ok",
            })
            return null;

        } else {
          swal({
            title: "Buenísimo!",
            text: "Agregaste el producto al carrito!",
            icon: "success",
            button: "Que alegría !",
            })
            .then((resultado) => {
              agregarProductoCarrito.submit();
            })
        }
      }

      carrito.push(newItem);
      console.log("esto es el carrito",carrito)
      addLocalStorage()
    })
})


function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.addEventListener('load',function(){
  let storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
  carrito = storage;
  addItemCarrito(newItem)
  }
})






let finalPrice = document.querySelector('#total');

let totalPricePerProduct = document.querySelectorAll('#price-per-product');

let total = 0;

totalPricePerProduct.forEach(price => {
    let precio = price.innerText
    let newPrice = precio.replace('$','')
    total += Number(newPrice);
});

finalPrice.innerText = `$${total.toFixed(2)}`

let qtyPerPdto = document.querySelectorAll('#quantity')



qtyPerPdto.forEach(qtyInput => {
    qtyInput.addEventListener('change', function(){
        let qty = Number(this.value);
        let pdtoPrice = this.parentElement.previousElementSibling.innerText;
        let newpdtoPrice = Number(pdtoPrice.replace('500gr | $',''))
        let totalPrice = qty * newpdtoPrice;
        let totalPdtoPrice = this.parentElement.nextElementSibling.querySelector('#price-per-product')
        totalPdtoPrice.innerText = "$" + totalPrice;
        
        //console.log("AAAA",totalPdtoPrice)
        //console.log("Cantidad de productos",qty)
        //console.log("precio",newpdtoPrice)
        //console.log("Cantidad * precio",totalPrice)

        let totalPricePerProduct = document.querySelectorAll('#price-per-product');

        let total = 0;

        totalPricePerProduct.forEach(price => {
            let precio = price.innerText
            let newPrice = precio.replace('$','')
            total += Number(newPrice);
        });

        finalPrice.innerText = `$${total.toFixed(2)}`

    })

})


let terminarCompra = document.querySelector('#terminar-compra');


terminarCompra.addEventListener("submit", (e) => {
     e.preventDefault()
      swal({
          title: "¿Querés terminar tu compra?",
          text: "",
          icon: "warning",
          buttons: true,
          dangerMode: true,
          
        })
        .then((resultado) => {
            if (!resultado) {
              swal({
                title: "Compra cancelada",
                text: "Continúa con tu compra!",
                icon: "error",
                button: "Que alegría !",
                });
            } else {
              swal({
                title: "Gracias por tu compra !",
                text: "",
                icon: "success",
                button: "Nos vemos !",
                })
                .then((resultado) => {
                  localStorage.clear()
                  terminarCompra.submit();
                });
            }
          });
        
})





let borrarProducto = document.querySelectorAll('#eliminar-producto');

borrarProducto.forEach(borrarProducto => {
  borrarProducto.addEventListener("submit", (e) => {
    e.preventDefault()

    let button = e.target
    let productId = Number(button.querySelector('button').getAttribute('value'))
    console.log("esto es el id", productId)

    let newCarrito = carrito.map(carrito =>{
      return Number(carrito.id)
    })

    console.log("new carrito", newCarrito)

    console.log("storage", carrito)

     swal({
       title: "¿Seguro quieres eliminar este producto del carrito?",
       text: "",
       icon: "warning",
       buttons: true,
       dangerMode: true,
     })
     .then((resultado) => {
       if (!resultado) {
         swal({
          title: "Tu producto no se eliminó",
          text: "",
          icon: "error",
          buttons: true,
          dangerMode: true,
        });
       } else {
         e.preventDefault()
         swal({
          title: "Producto eliminado del carrito",
          text: "",
          icon: "success",
          buttons: true,
          dangerMode: true,
        })
          .then((resultado) => {
            borrarProducto.submit();
            
            let lastCarrito = carrito.filter(function(carrito){
              return carrito.id != productId
            })

            carrito = lastCarrito

            localStorage.setItem('carrito', JSON.stringify(carrito))

            
            
          })  
       }
     });   
  })
})






















