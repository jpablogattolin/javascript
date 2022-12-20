//Primera Preentrega JAVASCRIPT
//SIMULADOR DE COMPRA

//INICIALIZACION DE VARIABLES

const procesoDeCompra = () => {
    let producto = "";
    let cantidad = 0;
    let precio = 0;
    let totalCompra =0;
    let seguirComprando = false;
}

    nombre = prompt ("INGRESE SU NOMBRE:");
    apellido = prompt ("INGRESE SU APELLIDO");
    alert ("BIENVENIDO" +" " + nombre + " " +apellido);

do {
    producto = prompt("Ingrese que desea comprar: DETERGENTE, CLORO o DESODORANTE");
    cantidad = parseInt (prompt ("Ingrese cantidad:"))

     

    switch (producto) {
        case "detergente":
            precio = 300;
            break;
        case "cloro":
            precio = 500;
            break;
        case "desodorante":
            precio = 300;
            break;
        default:
            alert("Alguno de los datos ingresados no es correcto");
            precio= 0;
            cantidad= 0;
    }

    let validacion = cantidadValida(cantidad);

    totalCompra = precio * validacion;
    seguirComprando = confirm("Queres seguir comprando");


} while (seguirComprando);





const cantidadValida = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Deber agregar un número.')
        } else {
            alert('Debe agregar un número distinto de cero.')
        }
        cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));
    }

    return cantidad;
};