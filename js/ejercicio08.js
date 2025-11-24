const out = document.getElementById("salida");

function nivel2() {
    try {
        console.log(x); // x no está definido 
    } catch (e) {
        out.innerHTML += "Nivel 2 atrapó el error: " + e.message + "<br>";
        throw e; // Mismo error
    }
}

function nivel1() {
    try {
        nivel2();
    } catch (e) {
        out.innerHTML += "Nivel 1 recibió el error: " + e.message + "<br>";
        throw e; // Mismo error
    }
}

//Captura 
try {
    // nivel 1
} catch (e) {
    // Nivel 1 y 2
    out.innerHTML += "ERROR FINAL capturado en el nivel superior: " + e.message;
}

// Ejecutamos nivel1 es un try externo
function nivel1() {
    try {
        nivel2();
    } catch (e) {
        out.innerHTML += "Nivel 1 recibió el error: " + e.message + "<br>";
        throw e;
    }
}

function ejecutarFlujo() {
    try {
        nivel1();
    } catch (e) {
        out.innerHTML += "ERROR FINAL capturado en el nivel superior: " + e.message;
    }
}
