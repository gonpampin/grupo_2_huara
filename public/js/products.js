let formDelete = document.querySelectorAll(".formDeleteJS")
formDelete.forEach(deleteJS => {
  deleteJS.addEventListener("submit", (e) => {
    e.preventDefault();
    swal({
        title: "Estás por eliminar el producto",
        text: "¡Una vez borrado no podrás recuperarlo!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((resultado) => {
        if (!resultado) {
          swal("¡El producto no se borrará!", {
            icon: "success",
          });
        } else {
          deleteJS.submit();
        }
      });
  })
})

//validacion de creación de producto
let formCreate = document.querySelector('.createForm')


formCreate.addEventListener('submit', (e) => {
  e.preventDefault()
  /*validacion de nombre*/
  if (formCreate.name.value == '') {
    swal('El nombre no puede estar vacío')
  } else if (formCreate.name.value.length < 5) {
    swal('El nombre debe tener al menos cinco caracteres')
    /*validacion de descripcion*/
  } else if (formCreate.description.value == '') {
    swal('La descripcion no puede estar vacía')
  } else if (formCreate.description.value.length < 20) {
    swal('La descripcion debe tener al menos veinte caracteres')
    //validacion de imagen
  } else if (formCreate.image.value == '') {
    swal('Debes cargar una imagen')

    /*} else if (form.avatar.file.includes(".jpg") ||
                form.avatar.file.includes(".png") ||
                form.avatar.file.includes(".gif") || 
                form.avatar.file.includes(".jpeg") ) {
        swal('Debes cargar una imagen en formato ".jpg", ".png", ".gif",".jpeg"')*/
    //validacion de password


    //validacion de precio
  } else if (formCreate.price.value == '') {
    swal('Debes cargar un precio')
    //validacion de stock
  } else if (formCreate.stock.value == '') {
    swal('Debes cargar un valor de stock')
  } else {
    formCreate.submit()
  }


})