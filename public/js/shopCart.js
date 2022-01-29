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
        let newpdtoPrice = Number(pdtoPrice.replace('Precio 500gr $',''))
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
              terminarCompra.submit();
            }
          });
        
})



