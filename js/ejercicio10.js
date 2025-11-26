function cargarUsuario (callback) {
    const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) +800;

    setTimeout ( () => {
        const usuario = {
            id : 1,
            nombre: "Ana"
        };

        callback (usuario);
    }, tiempo);
}

const btn = document.getElementById("btnCargar");
const salida = document.getElementById("salida");

function mostrarUsuario(user) {
    const texto = `Usuario cargado: ${user.nombre} (ID: ${user.id})`;
    console.log(texto);
    salida.textContent = texto;
}


btn.addEventListener("click", () => {
    salida.textContent = "Cargando usuario ...";
    cargarUsuario(mostrarUsuario);
})

