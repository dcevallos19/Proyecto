
function login() {
    var usuario = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    var mensaje = document.getElementById("mensaje");
    
    if (usuario === "admin" && contraseña === "admin") {
        estalogeadoadmin = true;
        window.location.href='../Admin/admin.html';
    } else if (usuario === "user" && contraseña === "user") {
        window.location.href='../Main/main.html';
        estalogeado = true; // Marcar al usuario como autenticado
    } else {
        mensaje.innerHTML = "Nombre de usuario o contraseña incorrectos.";
        mensaje.style.color = "red";
    }
}

document.getElementById("contraseña").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        login();
    }
});
