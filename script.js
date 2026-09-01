document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registroForm');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Limpiar mensajes anteriores
            document.getElementById('errorNombre').textContent = '';
            document.getElementById('errorEmail').textContent = '';
            document.getElementById('errorPassword').textContent = '';
            document.getElementById('mensajeExito').textContent = '';

            // Obtención de valores
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            let esValido = true;

            // Validación de Nombre
            if (nombre === '') {
                document.getElementById('errorNombre').textContent = 'El nombre completo es obligatorio.';
                esValido = false;
            }

            // Validación de Email
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                document.getElementById('errorEmail').textContent = 'El correo electrónico es obligatorio.';
                esValido = false;
            } else if (!regexEmail.test(email)) {
                document.getElementById('errorEmail').textContent = 'Por favor, ingrese un correo válido (ej: usuario@dominio.cl).';
                esValido = false;
            }

            // Validación de Contraseña
            if (password === '') {
                document.getElementById('errorPassword').textContent = 'La contraseña es obligatoria.';
                esValido = false;
            } else if (password.length < 6) {
                document.getElementById('errorPassword').textContent = 'La contraseña debe tener al menos 6 caracteres.';
                esValido = false;
            }

            // Si todo es válido
            if (esValido) {
                document.getElementById('mensajeExito').textContent = '¡Registro completado exitosamente!';
                form.reset();
            }
        });
    }
});