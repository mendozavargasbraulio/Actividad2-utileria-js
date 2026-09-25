let formulario = document.getElementById("formRegistro");


formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();


    // Obtener datos del formulario

    let nombre =
        document.getElementById("nombre").value;

    let apellido =
        document.getElementById("apellido").value;

    let telefono =
        document.getElementById("telefono").value;

    let fechaNacimiento =
        document.getElementById("fechaNacimiento").value;

    let codigo =
        document.getElementById("codigo").value;



    // Obtener lugares donde se muestran errores

    let errorNombre =
        document.getElementById("errorNombre");

    let errorApellido =
        document.getElementById("errorApellido");

    let errorTelefono =
        document.getElementById("errorTelefono");

    let errorFecha =
        document.getElementById("errorFecha");

    let errorCodigo =
        document.getElementById("errorCodigo");



    // Limpiar errores anteriores

    errorNombre.textContent = "";
    errorApellido.textContent = "";
    errorTelefono.textContent = "";
    errorFecha.textContent = "";
    errorCodigo.textContent = "";


    let correcto = true;



    // Validar nombre

    if (nombre === "") {

        errorNombre.textContent =
            "Ingresa tu nombre.";

        correcto = false;

    } else if (!soloLetras(nombre)) {

        errorNombre.textContent =
            "El nombre solo debe contener letras.";

        correcto = false;
    }



    // Validar apellidos

    if (apellido === "") {

        errorApellido.textContent =
            "Ingresa tus apellidos.";

        correcto = false;

    } else if (!soloLetras(apellido)) {

        errorApellido.textContent =
            "Los apellidos solo deben contener letras.";

        correcto = false;
    }



    // Validar teléfono

    if (telefono === "") {

        errorTelefono.textContent =
            "Ingresa tu teléfono.";

        correcto = false;

    } else if (!validarTelefono(telefono)) {

        errorTelefono.textContent =
            "El teléfono debe contener 10 números.";

        correcto = false;
    }



    // Validar fecha de nacimiento

    if (fechaNacimiento === "") {

        errorFecha.textContent =
            "Selecciona tu fecha de nacimiento.";

        correcto = false;

    } else if (!validarFechaNoFutura(fechaNacimiento)) {

        errorFecha.textContent =
            "La fecha no puede ser futura.";

        correcto = false;
    }



    // Validar código

    if (codigo === "") {

        errorCodigo.textContent =
            "Ingresa un código.";

        correcto = false;

    } else if (isNaN(codigo)) {

        errorCodigo.textContent =
            "El código solo debe contener números.";

        correcto = false;

    } else if (!validarLongitud(codigo, 4)) {

        errorCodigo.textContent =
            "El código debe tener máximo 4 dígitos.";

        correcto = false;
    }



    // Si todos los datos son correctos

    if (correcto) {

        let edad =
            calcularEdad(fechaNacimiento);


        document.getElementById("edadCalculada").textContent =
            edad;



        if (esMayorDeEdad(fechaNacimiento)) {

            document.getElementById("mensajeEdad").textContent =
                "Eres mayor de edad.";

        } else {

            document.getElementById("mensajeEdad").textContent =
                "Eres menor de edad.";
        }



        // Mostrar modal

        document.getElementById("modalEdad").style.display =
            "flex";



        // Mostrar pruebas en la consola

        console.log(
            "Nombre válido:",
            soloLetras(nombre)
        );

        console.log(
            "Apellidos válidos:",
            soloLetras(apellido)
        );

        console.log(
            "Teléfono válido:",
            validarTelefono(telefono)
        );

        console.log(
            "Longitud del código válida:",
            validarLongitud(codigo, 4)
        );

        console.log(
            "Fecha válida:",
            validarFechaNoFutura(fechaNacimiento)
        );

        console.log(
            "Edad:",
            calcularEdad(fechaNacimiento)
        );

        console.log(
            "Mayor de edad:",
            esMayorDeEdad(fechaNacimiento)
        );
    }

});



// Cerrar modal

let botonCerrar =
    document.getElementById("cerrarModal");


botonCerrar.addEventListener("click", function() {

    document.getElementById("modalEdad").style.display =
        "none";

});



// Regresar al login

let botonRegresar =
    document.getElementById("regresarLogin");


botonRegresar.addEventListener("click", function() {

    window.location.href = "login.html";

});