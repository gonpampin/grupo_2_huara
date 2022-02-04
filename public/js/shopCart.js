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
          title: "Gracias por tu compra",
          text: "¿Querés terminar tu compra?",
          icon: "info",
          buttons: true,
          dangerMode: true,
        })
        .then((resultado) => {
            if (!resultado) {
              swal("Continua con tu compra", {
                icon: "success",
              });
            } else {
              swal("Continua con tu compra", {
            icon: "success",
          });
              terminarCompra.submit();
            }
          });
        
})


let borrarProducto = document.querySelector('#eliminar-producto');


borrarProducto.addEventListener("submit", (e) => {
     e.preventDefault()
    
      swal({
        title: "Eliminar producto del carrito",
        text: "¿Seguro quieres eliminar este producto del carrito?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((resultado) => {
        if (!resultado) {
          swal("Continua con tu compra", {
            icon: "success",
          });
        } else {
          borrarProducto.submit();
        }
      });
        
})





















/*let iniciarCompra = document.querySelector('.detail-compra');
iniciarCompra.style.display = 'none'

let terminarCompra = document.querySelector('.detail-eliminar');
terminarCompra.style.display = 'none'

iniciarCompra.addEventListener('click', (e) => {
    // let iniciarCompra = document.querySelector('.detail-compra');
    
    if ( iniciarCompra.style.display == '' || iniciarCompra.style.display == 'block' ){
        terminarCompra.style.display = 'none';

    }
    });*/






