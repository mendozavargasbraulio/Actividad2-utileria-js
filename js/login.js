let formulario = document.getElementById("formLogin");


formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    let errorCorreo = document.getElementById("errorCorreo");
    let errorPassword = document.getElementById("errorPassword");

    errorCorreo.textContent = "";
    errorPassword.textContent = "";


    let correcto = true;


    // Validar correo

    if (correo === "") {

        errorCorreo.textContent = "Ingresa tu correo.";
        correcto = false;

    } else if (!validarCorreo(correo)) {

        errorCorreo.textContent = "El correo no es válido.";
        correcto = false;
    }


    // Validar contraseña

    if (password === "") {

        errorPassword.textContent = "Ingresa tu contraseña.";
        correcto = false;

    } else if (!validarPassword(password)) {

        errorPassword.textContent =
            "Debe tener mínimo 8 caracteres, mayúscula, minúscula, número y carácter especial.";

        correcto = false;
    }


    // Si los datos cumplen las validaciones

    if (correcto) {

        window.location.href = "index.html";
    }

});



// Mostrar u ocultar contraseña

let mostrarPassword = document.getElementById("mostrarPassword");

mostrarPassword.addEventListener("change", function() {

    let password = document.getElementById("password");

    if (mostrarPassword.checked) {

        password.type = "text";

    } else {

        password.type = "password";
    }

});