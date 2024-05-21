document.addEventListener('DOMContentLoaded', function () {
    // Obtener los elementos del formulario y los campos de entrada
    var formulario = document.getElementById("registrof");
    var nombreI = document.getElementById("nombre");
    var cedulaI = document.getElementById("cedula");
    var correoI = document.getElementById("correo");
    var contraseñaI = document.getElementById("contraseña");
    var telefonoI = document.getElementById("telefono");
    var edadI = document.getElementById("edad");
    var generoI = document.getElementById("genero");

    // Variables para controlar los errores
    var nombreError = false;
    var cedulaError = false;
    var correoError = false;
    var contraseñaError = false;
    var telefonoError = false;
    var edadError = false;
    var generoError = false;

    // Agregar un controlador de eventos para el envío del formulario
    formulario.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Realizar las validaciones aquí
        var nombre = nombreI.value.trim();
        var cedula = cedulaI.value.trim();
        var correo = correoI.value.trim();
        var contraseña = contraseñaI.value.trim();
        var telefono = telefonoI.value.trim();
        var edad = edadI.value.trim();
        var genero = generoI.value.trim();

        // Validación de nombre
        if (nombre === '') {
            nombreError = true;
            alert('Por favor, ingrese un nombre');
        } else {
            nombreError = false;
        }

        // Validación de cédula
        if (!validarCedula(cedula)) {
            cedulaError = true;
            alert('Cédula inválida, por favor ingrese una cédula válida');
        } else {
            cedulaError = false;
        }

        // Validación de correo
        if (!validarEmail(correo)) {
            correoError = true;
            alert('Correo inválido, por favor ingrese otro');
        } else {
            correoError = false;
        }

        // Validación de contraseña
        if (contraseña.length < 6) {
            contraseñaError = true;
            alert('La contraseña debe contener al menos 6 caracteres');
        } else {
            contraseñaError = false;
        }

        // Validación de teléfono
        if (telefono && !validarTelefono(telefono)) {
            telefonoError = true;
            alert('Número de teléfono inválido, ingrese otro');
        } else {
            telefonoError = false;
        }

        // Validación de edad
        if (edad && (isNaN(edad) || edad < 18)) {
            edadError = true;
            alert('Por favor ingrese una edad válida (mayor o igual a 18)');
        } else {
            edadError = false;
        }

        // Validación de género
        if (genero === 'defecto') {
            generoError = true;
            alert('Por favor, seleccione un género');
        } else {
            generoError = false;
        }

        // Si no hay errores, redirigir a la página deseada
        if (!nombreError && !cedulaError && !correoError && !contraseñaError && !telefonoError && !edadError && !generoError) {
            window.location.href = 'inicio-sesion.html';
        }
    });

    // Funciones de validación

    // Función para validar el número de teléfono
    function validarTelefono(telefono) {
        const telefonoRegex = /^0[789]\d{8}$/;
        return telefonoRegex.test(telefono);
    }

    // Función para validar correo electrónico
    function validarEmail(correo) {
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return correoRegex.test(correo);
    }

    // Función para validar cédula
    function validarCedula(cedula) {
        // La cédula ecuatoriana tiene 10 dígitos
        if (cedula.length !== 10) {
            return false;
        }

        // Verificar que todos los caracteres son dígitos numéricos
        if (!/^\d+$/.test(cedula)) {
            return false;
        }

        // Validar el último dígito usando el algoritmo de verificación
        const ultimoDigito = Number(cedula[9]);
        const sumaPares = Number(cedula[1]) + Number(cedula[3]) + Number(cedula[5]) + Number(cedula[7]);
        let sumaImpares = 0;

        for (let i = 0; i < 9; i += 2) {
            const digito = Number(cedula[i]) * 2;
            sumaImpares += digito > 9 ? digito - 9 : digito;
        }

        const total = sumaPares + sumaImpares;
        const residuo = total % 10;
        const digitoVerificador = residuo === 0 ? 0 : 10 - residuo;

        return digitoVerificador === ultimoDigito;
    }
});