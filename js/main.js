const btnAgregar = document.getElementById("btnAgregar")
const txtName = document.getElementById("Name")
const txtNumber = document.getElementById("Number")
const alertValidaciones = document.getElementById("alertValidaciones")
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto")

function validarCantidad() {
    if (txtNumber.value.length == 0) {
        return false
    }

    if (isNaN(txtNumber.value)) {
        return false
    }  //isNaN

    if (Number(txtNumber.value) <= 0) {
        return false
    } // <= 0
    
    return true
}

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    txtName.style.border=""
    txtNumber.style.border=""
    alertValidacionesTexto.innerHTML=""
    alertValidaciones.style.display="none"

    if (txtName.value.length < 3) {
        txtName.style.border = "solid red medium"
        alertValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es correcto. <br>"
        alertValidaciones.style.display="block"
        //return false
    } // if

// Validar la cantidad
    if (! validarCantidad()) {
        txtNumber.style.border = "solid red medium"
        alertValidacionesTexto.innerHTML+="El <strong>Cantidad</strong> no es correcto. <br>"
        alertValidaciones.style.display="block"
    }

})  //btnAgregar .addEventListener

// Evento blur es cuando un campo pierde el foco, se sale del campo
txtName.addEventListener("blur", function(event){
    txtName.value= txtName.value.trim()
})  //txtName .addEventListener

txtNumber.addEventListener("blur", function(event){
    txtNumber.value= txtNumber.value.trim()
})  //txtNumber .addEventListener