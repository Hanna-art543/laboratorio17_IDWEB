function ejecutar() {
    const out = document.getElementById("salida");

    try {
        console.log(noexiste);
    }
    catch (e) {
        out.textContent = "Falló";
    }
    finally {
        out.textContent += "\nSiempre se ejecuta";
    }
}