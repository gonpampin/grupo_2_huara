let formDelete = document.querySelectorAll(".formDeleteJS")
formDelete.forEach(deleteJS => {
    deleteJS.addEventListener("submit", (e)=> {
        e.preventDefault();
        swal({
            title: "Estas por eliminar el producto",
            text: "Una vez borrado no podras recuperarlo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((resultado) => {
            if (!resultado) {
              swal("El producto no se borrara!", {
                icon: "success",
              });
            } else {
              deleteJS.submit();
            }
          });
    })
})




