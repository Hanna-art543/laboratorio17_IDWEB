function validarEdad(edad) {
    if(isNaN(edad) || edad <0) {
        throw new Error("Edad inválida");
    }
    return "Edad válida: " + edad;
}

function probarEdad () {
    const out = document.getElementById("output");

    try {
        const edad = prompt ("Ingresa una edad:");
        const resultado = validarEdad(Number(edad));
        out.textContent = resultado;
    } catch (e) {
        out.textContent = e.name + ": " + e.message;
    }
}

