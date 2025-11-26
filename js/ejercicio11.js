function dividirAsync(a, b, callback) {
    setTimeout (() => {
        if (b === 0) {
            callback(new Error ("No se puede dividir entre cero."), null);
        } else {
            callback(null, a/b);
        }
    }, 1500);
}

const numberA = document.getElementById("a");
const numberB = document.getElementById("b");

const salida = document.getElementById("resultado");
const boton = document.getElementById("btnDividir");

function dividir (error, resultado) {
    if (error) {
        salida.textContent = "Error: " + error.message;
    }
    else {
        salida.textContent = "Resultado: " + resultado;
    }
}

boton.addEventListener("click", () => {
    salida.textContent = "Cargando...";

    const a = Number(numberA.value);
    const b = Number(numberB.value);
    dividirAsync(a, b, dividir);
}) 

