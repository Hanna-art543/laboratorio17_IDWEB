function procesarLista(arreglo) {
    return new Promise((resolve, reject) => {

        let completados = 0;

        arreglo.forEach(num => {
            const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;

            setTimeout(() => {
                salida.textContent += " " + num;

                completados++;

                if (completados === arreglo.length) {
                    resolve("Proceso completo.");
                }

            }, tiempo);
        });

    });
}

let numeros = [12, 24, 56, 78, 90, 100, 129, 134];

const boton = document.getElementById("btnProcesarLista");
const salida = document.getElementById("resultado");
const confirmacion = document.getElementById("mensajeConfirmacion");

boton.addEventListener("click", () => {
    salida.textContent = "Procesando...";
    confirmacion.textContent = "";

    procesarLista(numeros)
        .then(mensaje => {
            confirmacion.textContent = mensaje;
        })
        .catch(error => {
            confirmacion.textContent = "Error: " + error.message;
        });
});
