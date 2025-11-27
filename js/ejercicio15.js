function dividirAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject(new Error("No se puede dividir entre cero."));
            } else {
                resolve(a / b);
            }
        }, 1500);
    });
}

const numberA = document.getElementById("a");
const numberB = document.getElementById("b");
const salida = document.getElementById("resultado");
const boton = document.getElementById("btnDividir");

boton.addEventListener("click", () => {
    salida.textContent = "Cargando...";

    const a = Number(numberA.value);
    const b = Number(numberB.value);

    dividirAsync(a, b)
        .then(resultado => {
            salida.textContent = "Resultado: " + resultado;
        })
        .catch(error => {
            salida.textContent = "Error: " + error.message;
        });
});
