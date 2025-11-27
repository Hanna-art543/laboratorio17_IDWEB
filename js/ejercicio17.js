function cargarMensaje() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000);
    });
}

async function iniciarCarga() {
    const out = document.getElementById("salida");

    out.textContent = "Cargando...";

    try {
        const mensaje = await cargarMensaje();
        out.textContent = mensaje;
    } catch (error) {
        out.textContent = "Error: " + error.message;
    }
}
