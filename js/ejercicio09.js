function cargarMensaje(callback) {
    setTimeout(() => {
        callback("Mensaje cargado");
    }, 1000);
}

function iniciarCarga() {
    const out = document.getElementById("salida");

    cargarMensaje((mensaje) => {
        out.textContent = mensaje;
    });
}


