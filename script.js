const products = [
    { id: 1, name: "Netflix", description: "Te Brindamos esta plataforma por un mes.", category: "categoria1", price: 10, img: "netflix.jpg" },
    { id: 2, name: "Movistar Play", description: "Te Brindamos esta plataforma por un mes.", category: "categoria1", price: 20, img: "movistar play.png" },
    { id: 3, name: "Disney plus", description: "Te Brindamos esta plataforma por un mes.", category: "categoria1", price: 10, img: "disney.png" },
    { id: 4, name: "Youtube", description: "Te Brindamos esta plataforma por un mes.", category: "categoria1", price: 7, img: "youtube.png" },
    { id: 5, name: "Paramount", description: "Te Brindamos esta plataforma por un mes.", category: "categoria1", price: 8, img: "paramount.png" },
    { id: 6, name: "HBO", description: "Agotado", category: "categoria1", price: 0, img: "hbo.png" },
    { id: 7, name: "Crunchyroll", description: "Te Brindamos esta plataforma por un mes", category: "categoria1", price: 8, img: "crunchy.png" },
    { id: 8, name: "Claro video", description: "Agotado", category: "categoria1", price: 0, img: "claro.png" },
    { id: 9, name: "Licencia Office", description: "Te Brindamos esta plataforma por un año", category: "categoria2", price: 30, img: "office.png" },
    { id: 10, name: "Lic. Windows 11", description: "Te Brindamos esta plataforma por un año", category: "categoria2", price: 30, img: "w11.png" },
    { id: 11, name: "Lic. Windows 10", description: "Te Brindamos esta plataforma por un año", category: "categoria2", price: 30, img: "w10.png" },
    { id: 12, name: "Prime Video", description: "Te Brindamos esta plataforma por un mes", category: "categoria1", price: 8, img: "prime.png" },
    { id: 13, name: "Flujo Tv", description: "Te Brindamos esta plataforma por un mes", category: "categoria1", price: 14, img: "flujo.png" },
    { id: 14, name: "Vix", description: "Te Brindamos esta plataforma por un mes", category: "categoria1", price: 8, img: "vix.png" },
    { id: 15, name: "Directv Go", description: "Te Brindamos esta plataforma por un mes", category: "categoria1", price: 20, img: "direc.png" },
    { id: 16, name: "Suscriptores", description: "1000 seguidores en tiktok, suscriptores en insta.", category: "categoria3", price: 15, img: "suscri.png" },
    { id: 17, name: "Porn Hub", description: "Te Brindamos esta plataforma por 1 mes", category: "categoria3", price: 8, img: "porn.png" },
    { id: 18, name: "Panel Canva", description: "Te Brindamos esta plataforma por 3 meses", category: "categoria2", price: 8, img: "canva.png" },
    { id: 19, name: "Spotify ", description: "Te Brindamos esta por 1 meses", category: "categoria1", price: 8, img: "spo.png" },
    { id: 20, name: "IPTV S.PRO ", description: "Te Brindamos esta por 1 meses", category: "categoria1", price: 8, img: "iptv.png" }
];

let cart = [];

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;
}

function addToCart(product) {
    cart.push(product);
    updateCart();

    // Datos del mensaje para WhatsApp
    const phone = "51907698346"; // Número de teléfono de destino sin el signo '+'
    const message = `Hola, Servicios NelAngel me gustaría Comprar el siguiente producto:\n- Producto: ${product.name}\n- Precio: $${product.price}\n- Cantidad: 1`;

    // Codificar el mensaje para URL y construir la URL de WhatsApp
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Redireccionar al enlace de WhatsApp
    window.open(url, "_blank");
}

// Función de filtrado de productos por categoría y búsqueda
function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const searchText = document.getElementById('search-input').value.toLowerCase();
    
    const filteredProducts = products.filter(p => {
        const matchesCategory = category === 'all' || p.category === category;
        const matchesSearch = p.name.toLowerCase().includes(searchText) || p.description.toLowerCase().includes(searchText);
        return matchesCategory && matchesSearch;
    });
    
    displayProducts(filteredProducts);
}

// Event listener para el filtro de categoría
document.getElementById('category-filter').addEventListener('change', filterProducts);

// Event listener para la barra de búsqueda
document.getElementById('search-input').addEventListener('input', filterProducts);

// Cargar todos los productos al inicio
displayProducts(products);

function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';  // Limpiar el contenido previo

    productsToDisplay.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>$${product.price}</strong></p>
        `;
        
        // Crear el botón de añadir al carrito
        const button = document.createElement('button');
        button.textContent = "Añadir al carrito";
        button.onclick = () => addToCart(product);

        productCard.appendChild(button);
        productList.appendChild(productCard);
    });
}

// Event listener para el filtro de categoría
document.getElementById('category-filter').addEventListener('change', filterProducts);

// Cargar todos los productos al inicio
displayProducts(products);

// Obtener el botón de palanca
// Obtener el checkbox del modo oscuro
const themeToggle = document.getElementById('theme-toggle');

// Alternar el modo claro/noche
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    
    // Actualizar el icono en el interruptor según el modo
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '🌞'; // Ícono de sol para modo claro
    } else {
        themeToggle.textContent = '🌙'; // Ícono de luna para modo oscuro
    }
});

// script.js o script en el HTML
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Cargar el estado del tema (oscuro o claro) del almacenamiento local
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Cambiar el tema cuando se haga clic en el interruptor
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
