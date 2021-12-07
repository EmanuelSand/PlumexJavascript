let campoUsuario = document.getElementById("userName");
let campoContrasena = document.getElementById("password");
let campoEmail = document.getElementById("email");

let usuarios=[];


let formularioSesion = document.getElementById("formularioSesion");
formularioSesion.addEventListener("submit", validarFormulario);

function validarFormulario(ev) {
    if ((campoUsuario.value == "") || (campoContrasena.value=="") || (campoEmail.value=="")) {
        ev.preventDefault();
        console.log("Ingrese un nombre o revise el codigo");
    } else {
        let usuario={
            userName: campoUsuario.value,
            password: campoContrasena.value,
            email: campoEmail.value,
        }
        usuarios.push(usuario);
        
        localStorage.setItem("usuario", JSON.stringify(usuarios));
        let usuarioRecibido = JSON.parse(localStorage.getItem("usuario"));
        console.log(usuarioRecibido);
    }
}
