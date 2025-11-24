function detectarError () {
    const out = document.getElementById("salida");

    try {
        let x = null;
        x.nombre;
    }
    catch (e) {
        if (e instanceof TypeError) {
            out.textContent = "Se produjo un TypeError específicamente";
        }
        else  {
            out.textContent = "Se produjo otro tipo de error.";
        }
    }
}