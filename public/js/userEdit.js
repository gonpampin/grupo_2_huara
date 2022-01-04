const regexValidationEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
        spanName.innerText=errors.spanEdit
        }else{
            delete errors.spanEdit
            spanName.innerText=""
        }



        if(editUserFront.email.value.length==0){
            errors.spanEdit='El campo de email debe estar completo'
        spanName.innerText=errors.spanEdit
        } else if(!(regexValidationEmail.test(editUserFront.email.value))){
            errors.spanEdit='El campo de email debe tener un formato válido'
            spanName.innerText=errors.spanEdit
        }else{
            delete errors.spanEdit
            spanName.innerText=""
        }
        //FALTA VALIDACION DE EMAIL QUE NO ESTÉ REGISTRADO

        if(!editUserFront.avatar){
            errors.spanEdit='Debes cargar una imagen'
            spanName.innerText=errors.spanEdit
        }else{
            delete errors.spanEdit
            spanName.innerText=""
        }
        //FALTA VALIDACION DE formato de imagen
        

        if(editUserFront.contrasenia.value.length==0){
            errors.spanEdit='La contraseña no debe estar vacía'
        spanName.innerText=errors.spanEdit
        } else if(editUserFront.contrasenia.value.length<8){
            errors.spanEdit='La contraseña debe tener al menos 8 caracteres'
            spanName.innerText=errors.spanEdit
        }else{
            delete errors.spanEdit
            spanName.innerText=""
        }

        //opcional: debe tener mayusculas, minusculas, un numero y un caracter especial


        if(editUserFront.contrasenia != editUserFront.recontrasenia){
            errors.spanEdit='Las contraseñas ingresadas no coinciden'
            spanName.innerText=errors.spanEdit
        }else{
            delete errors.spanEdit
            spanName.innerText=""
        }



    //if(Object.keys(errors).length == 0){
       // editUserFront.submit();
    //}

})

