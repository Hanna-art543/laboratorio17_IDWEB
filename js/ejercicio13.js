const boton = document.getElementById("btnCargarMensaje");
const mensaje = document.getElementById("mensaje");
const confirm = document.getElementById("confirmacion");

function cargarMensaje (callback) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve("Mensaje cargado.");
        }, 1000);
    });
}

boton.addEventListener("click", () => {
    mensaje.textContent = "Cargando...";
    confirm.textContent = "";

    cargarMensaje ()
        .then (resultado => {
            mensaje.textContent = resultado;
            confirm.textContent = "Promesa resuelta correctamente";
        })
        .catch(error => {
            mensaje.textContent = "Error al cargar";
            confirm.textContent = error;
        });

});