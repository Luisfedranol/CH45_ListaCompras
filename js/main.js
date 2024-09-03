const btnAgregar = document.getElementById("btnAgregar")
const txtName = document.getElementById("Name")
const txtNumber = document.getElementById("Number")
const alertValidaciones = document.getElementById("alertValidaciones")
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto")
const tablaListaCompras = document.getElementById("tablaListaCompras")
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0)
const productosTotal = document.getElementById("productosTotal")
const precioTotal = document.getElementById("precioTotal")
const contadorProductos = document.getElementById("contadorProductos")
//Bandera, al ser true permite agregar los datos a la tabla
let isValid = true
let contador = 0
let precio = 0
let costoTotal = 0
let totalEnProductos = 0

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

function getPrecio() {
    return Math.round(Math.random()*10000)/100
}

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    txtName.style.border=""
    txtNumber.style.border=""
    alertValidacionesTexto.innerHTML=""
    alertValidaciones.style.display="none"
    isValid = true

    if (txtName.value.length < 3) {
        txtName.style.border = "solid red medium"
        alertValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es correcto. <br>"
        alertValidaciones.style.display="block"
        isValid = false
    } // if

// Validar la cantidad
    if (! validarCantidad()) {
        txtNumber.style.border = "solid red medium"
        alertValidacionesTexto.innerHTML+="El <strong>Cantidad</strong> no es correcto. <br>"
        alertValidaciones.style.display="block"
        isValid = false
    }

    if (isValid) {
        contador++
        precio = getPrecio()
        let row = `<tr>
                    <td>${contador}</td>
                    <td>${txtName.value}</td>
                    <td>${txtNumber.value}</td>
                    <td>${precio}</td>
        </tr>`
        cuerpoTabla.insertAdjacentHTML("beforeend", row)
        costoTotal += precio * Number(txtNumber.value)
        totalEnProductos += Number(txtNumber.value)
        contadorProductos.innerText = contador
        productosTotal.innerText = totalEnProductos
        precioTotal.innerText = "$ " + costoTotal.toFixed(2)

        localStorage.setItem("contador", contador)
        localStorage.setItem("totalEnProductos", totalEnProductos)
        localStorage.setItem("costoTotal", costoTotal)

        txtName.value = ""
        txtNumber.value = ""
        txtName.focus()
    }//isValid

})  //btnAgregar .addEventListener

// Evento blur es cuando un campo pierde el foco, se sale del campo
txtName.addEventListener("blur", function(event){
    txtName.value= txtName.value.trim()
})  //txtName .addEventListener

txtNumber.addEventListener("blur", function(event){
    txtNumber.value= txtNumber.value.trim()
})  //txtNumber .addEventListener

window.addEventListener("load", function(){
    if (localStorage.getItem("contador") != null) {
        contador = Number(this.localStorage.getItem("contador"))
    }
    if (localStorage.getItem("totalEnProductos") != null) {
        totalEnProductos = Number(this.localStorage.getItem("totalEnProductos"))
    }
    if (localStorage.getItem("costoTotal") != null) {
        costoTotal = Number(this.localStorage.getItem("costoTotal"))
    }
    contadorProductos.innerText = contador
    productosTotal.innerText = totalEnProductos
    precioTotal.innerText = "$ " + costoTotal.toFixed(2)
})