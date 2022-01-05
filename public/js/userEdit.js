const regexValidation =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let spanName=document.querySelector('#spanEdit')

window.addEventListener('load', function(){
let editUserFront= document.querySelector("#editUserFront")

editUserFront.addEventListener("submit", function(e){
    let errors=[]    
   
        
        let campoNombre=document.querySelector('input#name')

        if(campoNombre.value.length==0){
            
            errors.push('El campo de nombre debe estar completo')
            
        } else if(campoNombre.value.length<2){
            errors.push('El campo de nombre debe tener al menos 2 caracteres')
            
        }

        let campoApellido=document.querySelector('input#lastname')

        if(campoApellido.value.length==0){
            errors.push('El campo de apellido debe estar completo')

        } else if(campoApellido.value.length<2){
        errors.push('El campo de apellido debe tener al menos 2 caracteres')
       
        }
    
        if(errors.length>0){
            e.preventDefault();
            let ulErrors = document.querySelector('div.errors ul')
            for(let i=0;i<errors.length;i++){
                ulErrors.innerHTML+='<li>'+ errors[i]+'</li>'
            }
        }
    
    })})

            /*let campoEmail=document.querySelector('input#email')

        if(editUserFront.email.value.length==0){
            errors.spanEdit='El campo de email debe estar completo'
        spanName.innerText=errors.spanEdit
        } else if(!(regexValidation.test(editUserFront.email.value))){
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


        if(editUserFront.contrasenia.value != editUserFront.recontrasenia.value){
            errors.spanEdit='Las contraseñas ingresadas no coinciden'
            spanName.innerText=errors.spanEdit
        }else{
            delete errors.spanEdit
            spanName.innerText=""
        }



    /*if(Object.keys(errors).length == 0){
        editUserFront.submit();
    }*/



