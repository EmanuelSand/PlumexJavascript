let precio = 0;
let resultado = 0;

function comprar(){
    precio = parseFloat(prompt("Ingrese el precio de los articulos"));
    resultado = resultado + precio;
}

let cantidadArticulos=parseInt(prompt("Ingrese la cantidad de articulos que desea comprar para delivery"));


for(let i=1;i<=cantidadArticulos;i++){
    comprar();
}


alert("El precio total a abonar es de: "+resultado);