let editUserFront= document.querySelector("#editUserFront")
let spanName=document.querySelector('#spanEdit')
editUserFront.addEventListener("submit", function(e){
            e.preventDefault()
        let errors={};

        if(editUserFront.name.value.length==0){
            errors.spanEdit='El campo de nombre debe estar completo'
        spanName.innerText=errors.spanEdit
        } else if(editUserFront.name.value.length<2){
            errors.spanEdit='El campo de nombre debe tener al menos 2 caracteres'
            spanName.innerText=errors.spanEdit
        } else{
            delete errors.spanEdit
            spanName.innerText=""
        }



        if(editUserFront.lastname.value.length==0){
            errors.spanEdit='El campo de apellido debe estar completo'
        spanName.innerText=errors.spanEdit
        } else if(editUserFront.lastname.value.length<2){
        errors.spanEdit='El campo de apellido debe tener al menos 2 caracteres'
        }
        if(editUserFront.email.value.length==0){
            errors.spanEdit='El campo de email debe estar completo'
        spanName.innerText=errors.spanEdit
        } else if(editUserFront.lastname.value.length<2){
            errors.spanEdit='El campo de apellido debe tener al menos 2 caracteres'
        }
        if(editUserFront.name.value.length==0){
            errors.spanEdit='El campo de nombre debe estar completo'
        spanName.innerText=errors.spanEdit
   
    }

    if(Object.keys(errors).length == 0){
        editUserFront.submit();
    }

})

