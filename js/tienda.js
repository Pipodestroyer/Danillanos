const baseDeDatosProductos = [
    // --- CARNES Y EMBUTIDOS ---
    {
        id: 1, nombre: "Chorizo Cuncia", categoria: "carnes",
        precio: 20550, unidad: "Paquete x10 unidades", stock: 150,
        descripcion: "Chorizo marinado en especias de la casa.",
        imagen: "src/productos/chorizo.jpeg"
    },
    {
        id: 2, nombre: "Papas Francesas", categoria: "carnes",
        precio: 23000, unidad: "Bolsa 2,5KG", stock: 80,
        descripcion: "Importadas, congeladas y listas para freir.",
        imagen: "src/productos/francesas.jpeg"
    },
    {
        id: 3, nombre: "Costillas Ahumadas", categoria: "carnes",
        precio: 16300, unidad: "Paquete 450g", stock: 100,
        descripcion: "Embutido con receta artesanal propia, listo para asar.",
        imagen: "src/productos/costillas.jpeg"
    },
    {
        id: 4, nombre: "Tocineta Ahumada", categoria: "carnes",
        precio: 28000, unidad: "KG", stock: 45,
        descripcion: "Tocineta de cerdo ahumada naturalmente, ideal para hamburguesas.",
        imagen: "src/media/darkmode.png"
    },
    // --- SALSAS Y ADEREZOS ---
    {
        id: 5, nombre: "Salsa de Tomate Industrial", categoria: "salsas",
        precio: 25000, unidad: "Galón (4 Litros)", stock: 60,
        descripcion: "Salsa de tomate de alto rendimiento para comidas rápidas.",
        imagen: "src/media/darkmode.png"
    },
    {
        id: 6, nombre: "Mayonesa Comercial", categoria: "salsas",
        precio: 32000, unidad: "Galón (4 Litros)", stock: 50,
        descripcion: "Mayonesa consistente, excelente para salsamentarías.",
        imagen: "src/media/darkmode.png"
    },
    {
        id: 7, nombre: "Bolsitas de Salsas Mixtas", categoria: "salsas",
        precio: 12000, unidad: "Display x100 Unidades", stock: 300,
        descripcion: "Sachets individuales (Tomate, Mayonesa, Mostaza).",
        imagen: "src/media/darkmode.png"
    },
    // --- CONGELADOS ---
    {
        id: 8, nombre: "Papas Fritas Porcionadas", categoria: "congelados",
        precio: 15000, unidad: "Bolsa x2.5 KG", stock: 120,
        descripcion: "Papas a la francesa corte clásico, congeladas y listas para freír.",
        imagen: "src/media/darkmode.png"
    },
    {
        id: 9, nombre: "Milanesa de Pollo", categoria: "congelados",
        precio: 24000, unidad: "Caja x10 Unidades", stock: 40,
        descripcion: "Filetes de pechuga empanizados y congelados.",
        imagen: "src/media/darkmode.png"
    },
    {
        id: 10, nombre: "Empanadas de Carne Congeladas", categoria: "congelados",
        precio: 20000, unidad: "Bolsa x20 Unidades", stock: 0,
        descripcion: "Empanadas listas para freír, relleno abundante.",
        imagen: "src/media/darkmode.png"
    },
    // --- INSUMOS Y DULCES ---
    {
        id: 11, nombre: "Sazonador en Polvo Multiusos", categoria: "insumos",
        precio: 18000, unidad: "KG", stock: 200,
        descripcion: "Sazón industrial para carnes y sopas.",
        imagen: "src/media/darkmode.png"
    },
    {
        id: 12, nombre: "Arequipe Repostero", categoria: "insumos",
        precio: 16000, unidad: "Tarro x2.5 KG", stock: 35,
        descripcion: "Ideal para postres y obleas. Textura firme.",
        imagen: "src/media/darkmode.png"
    },
    {
        id: 13, nombre: "Salsa Dulce de Mora", categoria: "insumos",
        precio: 14000, unidad: "Litro", stock: 45,
        descripcion: "Salsa de mora concentrada para helados y obleas.",
        imagen: "src/media/darkmode.png"
    },
    {
        id: 14, nombre: "Obleas Tradicionales", categoria: "insumos",
        precio: 8000, unidad: "Paquete x100 Unidades", stock: 90,
        descripcion: "Galleta de oblea fresca y crujiente.",
        imagen: "src/media/darkmode.png"
    },
    {
        id: 15, nombre: "Miga de Pan Panko", categoria: "insumos",
        precio: 12000, unidad: "KG", stock: 150,
        descripcion: "Miga de pan extra crujiente para apanar.",
        imagen: "src/media/darkmode.png"
    }
];

// --- SISTEMA DE CARRITO ---
let carrito = JSON.parse(localStorage.getItem('danillanos_carrito')) || [];

function guardarCarrito() {
    localStorage.setItem('danillanos_carrito', JSON.stringify(carrito));
}

window.addToCart = function(id) {
    const producto = baseDeDatosProductos.find(p => p.id === id);
    if (!producto) return;
    const item = carrito.find(p => p.id === id);
    if (item) {
        item.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    guardarCarrito();
    actualizarCarritoUI();

    if (typeof enableCart === "function") enableCart();
}

window.removeFromCart = function(id) {
    carrito = carrito.filter(p => p.id !== id);
    guardarCarrito();
    actualizarCarritoUI();
    if(typeof renderCheckoutSummary === "function") renderCheckoutSummary();
}

window.clearCart = function() {
    carrito = [];
    guardarCarrito();
    actualizarCarritoUI();
    if(typeof renderCheckoutSummary === "function") renderCheckoutSummary();
}

function actualizarCarritoUI() {
    const maincart = document.querySelector('.maincart');
    const btnCheckout = document.querySelector('.mainbuy');
    const btnClear = document.getElementById('deletethecart');

    if (!maincart) return;

    if (carrito.length === 0) {
        maincart.innerHTML = `
            <svg class="bag" xmlns="http://www.w3.org/2000/svg" fill="var(--over)" viewBox="0 -960 960 960" width="80" height="80" style="margin-bottom: 15px;"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
            <strong>Tu carrito esta vacio.</strong><br><span style="font-size: 14px; margin-top:5px; display:inline-block;">Explora nuestra tienda para añadir elementos.</span>
        `;
 
        if (btnCheckout) { btnCheckout.disabled = true; btnCheckout.style.opacity = '0.4'; btnCheckout.style.cursor = 'not-allowed'; }
        if (btnClear) { btnClear.disabled = true; btnClear.style.opacity = '0.4'; btnClear.style.cursor = 'not-allowed'; }
        return;
    }


    if (btnCheckout) { btnCheckout.disabled = false; btnCheckout.style.opacity = '1'; btnCheckout.style.cursor = 'pointer'; }
    if (btnClear) { btnClear.disabled = false; btnClear.style.opacity = '1'; btnClear.style.cursor = 'pointer'; }

    let total = 0;
    maincart.innerHTML = '<div style="width: 100%; height:75vh; overflow-y: auto; text-align:left; display:flex; flex-direction:column; gap:15px; padding-bottom:10px;">' + 
        carrito.map(item => {
            total += item.precio * item.cantidad;
            return `
            <div style="display:flex; gap:15px; align-items:center; border-bottom: 1px solid var(--over); padding-bottom:10px;">
                <img src="/${item.imagen}" style="width:60px; height:60px; object-fit:cover; border-radius:8px;">
                <div style="flex:1;">
                    <h4 style="margin:0; font-size:14px; color: var(--text);">${item.nombre}</h4>
                    <p style="margin:2px 0 0 0; font-size:12px; color:var(--contrast);">${item.cantidad} x $${item.precio.toLocaleString('es-CO')}</p>
                </div>
                <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:var(--main); cursor:pointer; font-size:18px; padding:5px;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--contrast)"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
            </div>`;
        }).join('') + '</div>' + 
        `<div style="margin-top:auto; margin-bottom:8px; width:100%; text-align:center; font-weight:bold; font-size:18px; padding-top:15px; color: var(--text); border-top: 1px solid var(--over);">Total: $${total.toLocaleString('es-CO')}</div>`;
}

function generarCard(producto) {
    const disponiblidad = producto.stock > 0 
        ? `<span class="stock-badge">Disponibles: ${producto.stock}</span>` 
        : `<span class="stock-badge out-stock">Agotado</span>`;

    return `
        <div class="product-card">
            <div class="product-img" style="background-image: url('${producto.imagen}')">
                ${disponiblidad}
            </div>
            <div class="product-info">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <div class="product-bottom">
                    <div>
                        <span class="price">$${producto.precio.toLocaleString('es-CO')}</span>
                        <span class="unit-text"> / ${producto.unidad}</span>
                    </div>
                    <button class="add-cart" onclick="addToCart(${producto.id})" ${producto.stock === 0 ? 'disabled' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h520v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40Z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderizarProductos(productos) {
    const container = document.getElementById('full-product-grid');
    if (container) {
        if(productos.length === 0){
            container.innerHTML = `<p style="grid-column: 1/-1; text-align:center;">No se encontraron productos con estos filtros.</p>`;
        } else {
            container.innerHTML = productos.map(generarCard).join('');
        }
    }
}

function aplicarFiltros() {
    const categoriaFiltro = document.getElementById('filter-categoria').value;
    const precioFiltro = parseInt(document.getElementById('filter-precio').value);
    const stockFiltro = document.getElementById('filter-stock').checked;

    const filtrados = baseDeDatosProductos.filter(producto => {
        let pasaCategoria = (categoriaFiltro === 'todos') || (producto.categoria === categoriaFiltro);
        let pasaPrecio = producto.precio <= precioFiltro;
        let pasaStock = stockFiltro ? (producto.stock > 0) : true;
        return pasaCategoria && pasaPrecio && pasaStock;
    });

    renderizarProductos(filtrados);
}

function actualizarPrecioDisplay() {
    const val = document.getElementById('filter-precio').value;
    document.getElementById('price-display').innerText = "$" + parseInt(val).toLocaleString('es-CO');
}


document.addEventListener('DOMContentLoaded', () => {
    
    const liteContainer = document.getElementById('lite-product-grid');
    if (liteContainer) liteContainer.innerHTML = baseDeDatosProductos.slice(0, 3).map(generarCard).join('');

    
    if (document.getElementById('full-product-grid')) aplicarFiltros();
    
   
    actualizarCarritoUI();

    const btnClear = document.getElementById('deletethecart');
    if(btnClear) btnClear.addEventListener('click', clearCart);

    const btnCheckout = document.querySelector('.mainbuy');
    if(btnCheckout) {
        btnCheckout.addEventListener('click', () => {
            if(carrito.length > 0) window.location.href = '/checkout.html';
        });
    }

    if (typeof renderCheckoutSummary === "function") renderCheckoutSummary();
});