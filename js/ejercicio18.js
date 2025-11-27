function cargarUsuario() {
    return new Promise((resolve) => {
        const tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

        setTimeout(() => {
            resolve({
                id: 1,
                nombre: "Ana"
            });
        }, tiempo);
    });
}

const btn = document.getElementById("btnCargar");
const salida = document.getElementById("salida");

async function mostrarUsuarioAsync() {
    salida.textContent = "Cargando usuario ...";

    try {
        const user = await cargarUsuario();
        const texto = `Usuario cargado: ${user.nombre} (ID: ${user.id})`;
        console.log(texto);
        salida.textContent = texto;
    } catch (error) {
        salida.textContent = "Error: " + error.message;
    }
}

btn.addEventListener("click", mostrarUsuarioAsync);
