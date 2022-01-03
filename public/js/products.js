let formDelete = document.querySelectorAll(".formDeleteJS")
formDelete.forEach(deleteJS => {
    deleteJS.addEventListener("submit", (e)=> {
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




