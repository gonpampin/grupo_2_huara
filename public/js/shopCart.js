let finalPrice = document.querySelector('#total');

let totalPricePerProduct = document.querySelectorAll('#price-per-product');





let qtyPerPdto = document.querySelectorAll('#quantity')

qtyPerPdto.forEach(qtyInput => {
    qtyInput.addEventListener('change', function(){
        let qty = Number(this.value);
        let pdtoPrice = this.parentElement.previousElementSibling.innerText;
        let newpdtoPrice = Number(pdtoPrice.replace('Precio $',''))
        let totalPrice = qty * newpdtoPrice;
        let totalPdtoPrice = this.parentElement.nextElementSibling.querySelector('#price-per-product')
        totalPdtoPrice.innerText = "$" + totalPrice;
        
        console.log("AAAA",totalPdtoPrice)
        //console.log("Cantidad de productos",qty)
        //console.log("precio",newpdtoPrice)
        //console.log("Cantidad * precio",totalPrice)

        /*let totalPricePerProduct = document.querySelectorAll('#price-per-product')

				totalPricePerProduct.forEach(price => {
					price.innerText = "$" + totalPrice;
				})*/

        
    })
})