const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

loginBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "#f3c7f3"; // Color activo
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; // Color inactivo

    loginForm.style.left = "50%";
    registerForm.style.left = "150%";

    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;
});

registerBtn.addEventListener('click', () => {
    registerBtn.style.backgroundColor = "#f3c7f3"; // Color activo
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; // Color inactivo

    loginForm.style.left = "-50%";
    registerForm.style.left = "50%";
    registerForm.style.transform = "translateX(-50%)";

    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;
    
});

document.addEventListener("DOMContentLoaded", function() {
    const logInputField = document.getElementById("logPassword");
    const logInputIcon = document.getElementById("log-pass-icon");

    const regInputField = document.getElementById("regPassword");
    const regInputIcon = document.getElementById("reg-pass-icon");

    const loginBtn = document.querySelector("#login");
    const registerBtn = document.querySelector("#register");
    
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");

    function togglePassword(inputField, icon) {
        if (inputField.type === "password") {
            inputField.type = "text";
            icon.name = "eye-off-outline"; // Cambia a icono de ojo cerrado
        } else {
            inputField.type = "password";
            icon.name = "eye-outline"; // Cambia a icono de ojo abierto
        }
    }

    function clearForm(form) {
        const inputs = form.querySelectorAll(".input-field");
        inputs.forEach(input => {
            input.value = ""; // Borra el valor del input
        });
    }

    if (logInputField && logInputIcon) {
        logInputIcon.addEventListener("click", function() {
            togglePassword(logInputField, logInputIcon);
        });
    }

    if (regInputField && regInputIcon) {
        regInputIcon.addEventListener("click", function() {
            togglePassword(regInputField, regInputIcon);
        });
    }

    loginBtn.addEventListener("click", () => {
        loginBtn.style.backgroundColor = "#f3c7f3"; // Color activo
        registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; // Color inactivo

        loginForm.style.left = "50%";
        registerForm.style.left = "150%";

        loginForm.style.opacity = 1;
        registerForm.style.opacity = 0;

        clearForm(registerForm); // Limpia los campos al cambiar a login
    });

    registerBtn.addEventListener("click", () => {
        registerBtn.style.backgroundColor = "#f3c7f3"; // Color activo
        loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; // Color inactivo

        loginForm.style.left = "-50%";
        registerForm.style.left = "50%";
        registerForm.style.transform = "translateX(-50%)";

        loginForm.style.opacity = 0;
        registerForm.style.opacity = 1;

        clearForm(loginForm); // Limpia los campos al cambiar a registro
    });
});

// Función para cambiar el icono cuando el usuario escribe
function changeIcon(inputField, icon) {
    if (inputField.value.length > 0) {
        icon.name = "eye-outline"; // Muestra el ojo cuando hay texto
    } else {
        icon.name = "lock-closed-outline"; // Muestra el candado si está vacío
    }
}

// Agrega el evento a los campos de contraseña para detectar la entrada de texto
const logInputField = document.getElementById("logPassword");
const logInputIcon = document.getElementById("log-pass-icon");

const regInputField = document.getElementById("regPassword");
const regInputIcon = document.getElementById("reg-pass-icon");

if (logInputField && logInputIcon) {
    logInputField.addEventListener("input", function () {
        changeIcon(logInputField, logInputIcon);
    });
}

if (regInputField && regInputIcon) {
    regInputField.addEventListener("input", function () {
        changeIcon(regInputField, regInputIcon);
    });
}

// Funcionalidad de registro y login con localStorage
const registerFormElement = document.querySelector(".register-form");
const loginFormElement = document.querySelector(".login-form");

document.querySelector(".register-form .submit-btn").addEventListener("click", (event) => {
    event.preventDefault();

    const username = registerFormElement.querySelector('input[placeholder="Usuario"]').value;
    const email = registerFormElement.querySelector('input[placeholder="Correo electronico"]').value;
    const password = registerFormElement.querySelector('#regPassword').value;

    // Guarda los datos en localStorage (solo para un día)
    localStorage.setItem('user', JSON.stringify({ username, email, password }));

    alert("Registro exitoso! Ahora puedes iniciar sesión.");
    registerFormElement.reset();
});

document.querySelector(".login-form .submit-btn").addEventListener("click", (event) => {
    event.preventDefault();

    const username = loginFormElement.querySelector('input[placeholder="Usuario"]').value;
    const password = loginFormElement.querySelector('#logPassword').value;

    // Verifica si los datos de login coinciden con los almacenados
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        window.location.href = "valentine.html"; // Cambia esto por la URL deseada
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});
