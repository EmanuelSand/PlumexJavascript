class Productos{
    constructor(nombre, codigo, sector, precio){
        this.nombre = nombre;
        this.codigo = codigo;
        this.sector = sector;
        this.precio = precio;
    }
    ingresoDatos(){
        let campoNombre = document.getElementById("nombreProducto");
        this.nombre=campoNombre.value;
        let campoCodigo = document.getElementById("codigoProducto");
        this.codigo = campoCodigo.value;
        let campoSector = document.getElementById("sectorProducto");
        this.sector = campoSector.value;
        let campoPrecio = document.getElementById("precioProducto");
        this.precio = campoPrecio.value;
    }
}


let valNombre = document.getElementById("nombreProducto");
let valCod = document.getElementById("codigoProducto");


const productos=new Productos();
const productosLista = [];

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor) };

//EVENTO SUBMIT
let formularioProductos = document.getElementById("formularioProductos");
formularioProductos.addEventListener("submit", validarFormulario);

function validarFormulario(ev) {
    if ((valNombre.value == "") || (isNaN(valCod.value))) {
        ev.preventDefault();
        console.log("Ingrese un nombre o revise el codigo");
    } else {
        productos.ingresoDatos();
        productosLista.push(productos);
        guardarLocal("listaProductos", JSON.stringify(productosLista));
        const productosRecibidos = JSON.parse(localStorage.getItem("listaProductos"));
        for (const productoRecibido of productosRecibidos){
            let contenedor = document.createElement("div");
    
            contenedor.innerHTML = `<b> Producto: ${productoRecibido.nombre}</b>
                                    <p> Precio: $ ${productoRecibido.precio}</p>
                                    <p> Codigo: ${productoRecibido.codigo}</p>
                                    <p> Sector: ${productoRecibido.sector}</p>`;
            document.body.appendChild(contenedor);
            }
    }
}
