const inventarios = {
    "facultad1": ["Producto 1 de Facultad 1", "Producto 2 de Facultad 1", "Producto 3 de Facultad 1"],
    "facultad2": ["Producto 1 de Facultad 2", "Producto 2 de Facultad 2", "Producto 3 de Facultad 2"],
    // Agregar más facultades y sus inventarios según sea necesario
};

function mostrarInventario() {
    var facultadSeleccionada = document.getElementById("facultad").value;
    var inventario = obtenerInventarioPorFacultad(facultadSeleccionada);
    var inventarioHTML = generarHTMLDeInventario(inventario);

    document.getElementById("inventario").innerHTML = inventarioHTML;
}

function obtenerInventarioPorFacultad(facultad) {
    return inventarios[facultad] || ["No hay productos disponibles"];
}

function generarHTMLDeInventario(inventario) {
    var html = "";
    inventario.forEach(function(producto) {
        html += `<div class="inventario-item">
                    <h3>${producto}</h3>
                    <p>Descripción del producto</p>
                </div>`;
    });
    return html;
}
