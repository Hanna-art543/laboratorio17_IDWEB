function cargarUsuario () {
    const tiempo = Math.floor(Math.random() * (1500 - 800 + 1) + 800);

    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            const usuario = {
                id: 1,
                nombre: "Ana"
            };

            resolve(usuario);
        }, tiempo);
    });
}

const btn = document.getElementById("btnCargar");
const salida = document.getElementById("salida");

btn.addEventListener("click", () => {
    salida.textContent = "Cargando usuario...";

    cargarUsuario () 
        .then(user => {
            const texto = `Usuario cargado: ${user.nombre} (ID: ${user.id})`;
            console.log(texto);
            salida.textContent = texto;
        })
        .catch(error => {
            salida.textContent = "Error: " + error;
        });
});

