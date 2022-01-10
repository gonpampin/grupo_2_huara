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
const regexImageFormat = /\.(jpe?g|png|gif)(?:\?.*|)$/i;

let formCreateEdit = document.querySelector('.createEditForm')


formCreateEdit.addEventListener('submit', (e) => {
  e.preventDefault()
  /*validacion de nombre*/
  if (formCreateEdit.name.value == '') {
    swal('El nombre no puede estar vacío')
  } else if (formCreateEdit.name.value.length < 5) {
    swal('El nombre debe tener al menos 5 caracteres')
    /*validacion de descripcion*/
  } else if (formCreateEdit.description.value == '') {
    swal('La descripcion no puede estar vacía')
  } else if (formCreateEdit.description.value.length < 20) {
    swal('La descripcion debe tener al menos 20 caracteres')
    

  //validacion de imagen
  } else if (formCreateEdit.image.value == '') {
    swal('Debes cargar una imagen')
  }else if (!(regexImageFormat.test(formCreateEdit.image.value))) {
    swal('Debes cargar una imagen en formato ".jpg", ".png", ".gif",".jpeg"')
      // validacion de categoria
  }else if(formCreateEdit.category.value !=('1' || '2')){
    swal('Debes cargar una categoria')
        //validacion de precio
  } else if (formCreateEdit.price.value == '') {
    swal('Debes cargar un precio')
    //validacion de stock
  } else if (formCreateEdit.stock.value == '') {
    swal('Debes cargar un valor de stock')
  } else {
    formCreateEdit.submit()
  }


})