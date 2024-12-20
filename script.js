// Inicializa AOS para animaciones al hacer scroll
AOS.init();

// Agrega animaciones adicionales con GSAP
gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from(".card", { opacity: 0, scale: 0.5, stagger: 0.2, duration: 1, delay: 1.5 });

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Detener el comportamiento predeterminado del formulario

    // Obtener valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validar que todos los campos tengan contenido
    if (!name || !email || !message) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear mensaje para WhatsApp
    const whatsappMessage = `Hola, me gustaría contactar con ustedes. Mis datos son:%0A%0A` +
                            `*Nombre:* ${encodeURIComponent(name)}%0A` +
                            `*Correo Electrónico:* ${encodeURIComponent(email)}%0A` +
                            `*Mensaje:* ${encodeURIComponent(message)}`;

    // Número de WhatsApp
    const whatsappNumber = '51907698346'; // Cambiar al número correspondiente

    // Crear el enlace de WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Abrir el enlace en una nueva pestaña
    window.open(whatsappURL, '_blank');
});