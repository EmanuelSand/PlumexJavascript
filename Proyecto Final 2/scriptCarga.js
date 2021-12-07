class Productos{
    constructor(nombre, peso, precio, categoria){
        this.nombre = nombre;
        this.peso = peso;
        this.precio = precio;
        this.categoria = categoria;
    }
    mostrarInformacion(){
        console.log("El nombre del producto es "+this.nombre+" con un peso de "+this.peso+". "+"Su precio es de "+this.precio+" pesos y se puede encontrar dentro del sector "+this.categoria);
    }
    ingresoDatos(){
        let nuevoNombre = prompt("Ingrese el nombre del producto");
        this.nombre=nuevoNombre;
        let nuevoPeso = prompt("Ingrese el peso del producto");
        this.peso=nuevoPeso;
        let nuevoPrecio=prompt("Ingrese el precio del producto");
        this.precio=nuevoPrecio;
        let nuevaCategoria=prompt("ingrese la categoria o sector del producto");
        this.categoria=nuevaCategoria;
    }
}

const productos1=new Productos();
//productos1.ingresoDatos();
//productos1.mostrarInformacion();

const productosArray = [];
let cantidad = prompt("Ingrese la cantidad de productos que desea agregar");

function mostrarProductos(){
    for (const producto of productosArray) {
        //crear contenedor
        let contenedor = document.createElement("div");
        //plantillas de texto
        contenedor.innerHTML = `<h3> ${producto.nombre}</h3>
        <p>${producto.peso}</p>
        <b>$ ${producto.precio}</b>
        <p>${producto.categoria}</p>`;
        document.body.appendChild(contenedor);
    }
}

do{
    productos1.ingresoDatos();
    productosArray.push(productos1);
    console.log(productosArray.length);
    productos1.mostrarInformacion();
    mostrarProductos();
}while(productosArray.length != cantidad)


//Probando el metodo filter
const limpieza = productosArray.filter(productos => productos.categoria === "limpieza");
console.log(limpieza);


