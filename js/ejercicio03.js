function provocarError() {
    const out = document.getElementById("output");

    try {
        console.log(variableNoExistente);
    }
    catch (e) {
        out.textContent = e.name + ": " + e.message;
    }
}