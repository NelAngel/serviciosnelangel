const products = [
    { id: 1, name: "Netflix", 
        description: "Te Brindamos esta plataforma por un mes.", 
        category: "categoria1", price: 10, 
        img: "netflix.jpg" },

    { id: 2, name: "Movistar Play", 
        description: "Te Brindamos esta plataforma por un mes.", 
        category: "categoria2", 
        price: 20, 
        img: "movistar play.png" },

    { id: 3, name: "Disney plus", 
        description: "Te Brindamos esta plataforma por un mes.", 
        category: "categoria1", 
        price: 10, 
        img: "disney.png" },

    { id: 4, name: "Youtube", 
        description: "Te Brindamos esta plataforma por un mes.", 
        category: "categoria1", 
        price: 7, 
        img: "youtube.png" },

    { id: 5, name: "Paramount", 
        description: "Te Brindamos esta plataforma por un mes.", 
        category: "categoria1", 
        price: 8, 
        img: "paramount.png" },

    { id: 6, name: "HBO", 
        description: "Agotado", 
        category: "categoria1", 
        price: 0, 
        img: "hbo.png" },

    { id: 7, name: "Crunchyroll", 
        description: "Te Brindamos esta plataforma por un mes", 
        category: "categoria1", 
        price: 8, 
        img: "crunchy.png"},

    { id: 8, name: "Claro video", 
        description: "Agotado", 
        category: "categoria1", 
        price: 0, 
        img: "claro.png" },

    { id: 9, name: "Licencia Office", 
        description: "Te Brindamos esta plataforma por un año", 
        category: "categoria2", 
        price: 30, 
        img: "office.png" },

    { id: 10, name: "Lic. Windows 11", 
        description: "Te Brindamos esta plataforma por un año",
         category: "categoria2", 
         price: 30, 
         img: "w11.png" },

    { id: 11, name: "Lic. Windows 10", 
        description: "Te Brindamos esta plataforma por un año",
         category: "categoria2", 
         price: 30, 
         img: "w10.png" },

    { id: 12, name: "Prime Video", 
        description: "Te Brindamos esta plataforma por un mes", 
        category: "categoria1",
        price: 8, 
        img: "prime.png" },
    { id: 13, name: "Flujo Tv",
         description: "Te Brindamos esta plataforma por un mes", 
         category: "categoria1", 
         price: 14,
         img: "flujo.png" },
    { id: 14, name: "Vix", 
        description: "Te Brindamos esta plataforma por un mes", 
        category: "categoria1",
        price: 8, 
        img: "vix.png" },
    { id: 15, name: "Directv Go", 
        description: "Te Brindamos esta plataforma por un mes", 
        category: "categoria1", 
        price: 20,
         img: "direc.png" },
    { id: 16, name: "Suscriptores", 
        description: "1000 seguidores en tiktok, suscriptores en insta.",
        category: "categoria3",
        price: 15, 
        img: "suscri.png" },
    { id: 17, name: "Porn Hub", 
        description: "Te Brindamos esta plataforma por un mes", 
        category: "categoria3", 
        price: 8, 
        img: "porn.png" },
    { id: 18, name: "Panel Canva", 
        description: "Te Brindamos esta plataforma por 3 meses",
         category: "categoria2", 
         price: 8, 
         img: "canva.png" }
];

let cart = [];

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;
}

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    displayProducts(filteredProducts);
}

function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';  // Limpiar el contenido previo
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>$${product.price}</strong></p>
            <button onclick="addToCart(${JSON.stringify(product)})">Añadir al carrito</button>
        `;
        productList.appendChild(productCard);
    });
}

document.getElementById('category-filter').addEventListener('change', filterProducts);

// Cargar todos los productos al inicio
displayProducts(products);

function addToCart(product) {
    cart.push(product);
    updateCart();

    // Datos del mensaje para WhatsApp
    const phone = "51935170754"; // Número de teléfono de destino sin el signo '+'
    const message = `Hola, Servicios NelAngel me gustaría Comprar el siguiente producto:
- Producto: ${product.name}
- Precio: $${product.price}
- Cantidad: 1`;

    // Codificar el mensaje para URL y construir la URL de WhatsApp
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Redireccionar al enlace de WhatsApp
    window.open(url, "_blank");
}

function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    displayProducts(filteredProducts);
}

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

document.getElementById('category-filter').addEventListener('change', filterProducts);

// Cargar todos los productos al inicio
displayProducts(products);
