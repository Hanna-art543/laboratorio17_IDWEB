function generarSyntaxError () {
    const out = document.getElementById("output");

    try {
        JSON.parse ("{ nombre : Juan }");
    }
    catch (e) {
        out.textContent = e.name + ": " + e.message;
    }
}