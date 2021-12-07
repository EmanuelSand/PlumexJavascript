let carrito = [];
$(document).ready(function() {  
    renderizarProductosLimpieza();
    $("#miSeleccionLimpieza option[value='pordefecto']").attr("selected", true);
    $("#miSeleccionLimpieza").change(function() {
        ordenarLimpieza();
    });
});

function renderizarProductosLimpieza() {
    for (const producto of productosLimpieza) {
        $(".milistaLimpieza").append(`<li class="list-group-item"><h3>ID: ${producto.id}</h3>
        <img src=${producto.foto} width="250" height="250">
        <p> Producto: ${producto.nombre}</p>
        <b> $ ${producto.precio}</b>
        <button class='btn btn-info' id='btn${producto.id}'>Comprar</button>
        </li>`);
        $(`#btn${producto.id}`).on('click', function() {
            agregarAlCarrito(producto);
        });
    }
}

function ordenarLimpieza() {
    let seleccionLimpieza = $("#miSeleccionLimpieza").val();
    console.log(seleccionLimpieza);
    if (seleccionLimpieza == "menor") {
        productosLimpieza.sort(function(a, b) { return a.precio - b.precio });
    } else if (seleccionLimpieza == "mayor") {
        productosLimpieza.sort(function(a, b) { return b.precio - a.precio });
    } else if (seleccionLimpieza == "alfabetico") {
        productosLimpieza.sort(function(a, b) {
            return a.nombre.localeCompare(b.nombre);
        });
    }
    $("li").remove();
    renderizarProductosLimpieza();
}

$(document).ready(function() {  
    renderizarProductosHigiene();
    $("#miSeleccionHigiene option[value='pordefecto']").attr("selected", true);
    $("#miSeleccionHigiene").change(function() {
        ordenarHigiene();
    });
});

function renderizarProductosHigiene() {
    for (const producto of productosHigiene) {
        $(".milistaHigiene").append(`<li class="list-group-item"><h3>ID: ${producto.id}</h3>
        <img src=${producto.foto} width="250" height="250">
        <p> Producto: ${producto.nombre}</p>
        <b> $ ${producto.precio}</b>
        <button class='btn btn-info' id='btn${producto.id}'>Comprar</button>
        </li>`);
        $(`#btn${producto.id}`).on('click', function() {
            agregarAlCarrito(producto);
        });
    }
}

function ordenarHigiene() {
    let seleccionHigiene = $("#miSeleccionHigiene").val();
    console.log(seleccionHigiene);
    if (seleccion == "menor") {
        productosHigiene.sort(function(a, b) { return a.precio - b.precio });
    } else if (seleccionHigiene == "mayor") {
        productosHigiene.sort(function(a, b) { return b.precio - a.precio });
    } else if (seleccionHigiene == "alfabetico") {
        productosHigiene.sort(function(a, b) {
            return a.nombre.localeCompare(b.nombre);
        });
    }
    $("li").remove();
    renderizarProductosHigiene();
}


$(document).ready(function() {  
    renderizarProductosCosmetica();
    $("#miSeleccionCosmetica option[value='pordefecto']").attr("selected", true);
    $("#miSeleccionCosmetica").change(function() {
        ordenarCosmetica();
    });
});

function renderizarProductosCosmetica() {
    for (const producto of productosCosmetica) {
        $(".milistaCosmetica").append(`<li class="list-group-item"><h3>ID: ${producto.id}</h3>
        <img src=${producto.foto} width="250" height="250">
        <p> Producto: ${producto.nombre}</p>
        <b> $ ${producto.precio}</b>
        <button class='btn btn-info' id='btn${producto.id}'>Comprar</button>
        </li>`);
        $(`#btn${producto.id}`).on('click', function() {
            agregarAlCarrito(producto);
        });
    }
}

function ordenarCosmetica() {
    let seleccionCosmetica = $("#miSeleccionCosmetica").val();
    console.log(seleccionCosmetica);
    if (seleccionCosmetica == "menor") {
        productosCosmetica.sort(function(a, b) { return a.precio - b.precio });
    } else if (seleccionCosmetica == "mayor") {
        productosCosmetica.sort(function(a, b) { return b.precio - a.precio });
    } else if (seleccionCosmetica == "alfabetico") {
        productosCosmetica.sort(function(a, b) {
            return a.nombre.localeCompare(b.nombre);
        });
    }
    $("li").remove();
    renderizarProductosCosmetica();
}

function agregarAlCarrito(productoNuevo) {
    carrito.push(productoNuevo);
    console.log(carrito);
    Swal.fire(
        'Nuevo producto agregado al carrito',
        productoNuevo.nombre,
        'success'
    );
    localStorage.setItem("miCarrito", JSON.stringify(carrito));
}
