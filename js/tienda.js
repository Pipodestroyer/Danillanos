const baseDeDatosProductos = [
    // --- CARNES Y EMBUTIDOS ---
    {
        id: 1, nombre: "Chorizo Cuncia", categoria: "carnes",
        precio: 35000, unidad: "Paquete x10 unidades", stock: 150,
        descripcion: "Chorizo marinado en especias de la casa.",
        imagen: "../src/productos/chorizo.jpeg"
    },
    {
        id: 2, nombre: "Papas Francesas", categoria: "carnes",
        precio: 22000, unidad: "Bolsa 5,5Kg", stock: 80,
        descripcion: "Preparadas con especias exclusivas del distribuidor. 150gr c/u.",
        imagen: "../src/productos/francesas.jpeg"
    },
    {
        id: 3, nombre: "Costillas Ahumadas", categoria: "carnes",
        precio: 18000, unidad: "Paquete 500g", stock: 200,
        descripcion: "Embutido con receta artesanal propia, listo para asar.",
        imagen: "../src/productos/costillas.jpeg"
    },
    {
        id: 4, nombre: "Tocineta Ahumada", categoria: "carnes",
        precio: 28000, unidad: "KG", stock: 45,
        descripcion: "Tocineta de cerdo ahumada naturalmente, ideal para hamburguesas.",
        imagen: "../src/media/darkmode.png"
    },
    // --- SALSAS Y ADEREZOS ---
    {
        id: 5, nombre: "Salsa de Tomate Industrial", categoria: "salsas",
        precio: 25000, unidad: "Galón (4 Litros)", stock: 60,
        descripcion: "Salsa de tomate de alto rendimiento para comidas rápidas.",
        imagen: "../src/media/darkmode.png"
    },
    {
        id: 6, nombre: "Mayonesa Comercial", categoria: "salsas",
        precio: 32000, unidad: "Galón (4 Litros)", stock: 50,
        descripcion: "Mayonesa consistente, excelente para salsamentarías.",
        imagen: "../src/media/darkmode.png"
    },
    {
        id: 7, nombre: "Bolsitas de Salsas Mixtas", categoria: "salsas",
        precio: 12000, unidad: "Display x100 Unidades", stock: 300,
        descripcion: "Sachets individuales (Tomate, Mayonesa, Mostaza).",
        imagen: "../src/media/darkmode.png"
    },
    // --- CONGELADOS ---
    {
        id: 8, nombre: "Papas Fritas Porcionadas", categoria: "congelados",
        precio: 15000, unidad: "Bolsa x2.5 KG", stock: 120,
        descripcion: "Papas a la francesa corte clásico, congeladas y listas para freír.",
        imagen: "../src/media/darkmode.png"
    },
    {
        id: 9, nombre: "Milanesa de Pollo", categoria: "congelados",
        precio: 24000, unidad: "Caja x10 Unidades", stock: 40,
        descripcion: "Filetes de pechuga empanizados y congelados.",
        imagen: "../src/media/darkmode.png"
    },
    {
        id: 10, nombre: "Empanadas de Carne Congeladas", categoria: "congelados",
        precio: 20000, unidad: "Bolsa x20 Unidades", stock: 0, // Sin stock para probar filtro
        descripcion: "Empanadas listas para freír, relleno abundante.",
        imagen: "../src/media/darkmode.png"
    },
    // --- INSUMOS Y DULCES ---
    {
        id: 11, nombre: "Sazonador en Polvo Multiusos", categoria: "insumos",
        precio: 18000, unidad: "KG", stock: 200,
        descripcion: "Sazón industrial para carnes y sopas.",
        imagen: "../src/media/darkmode.png"
    },
    {
        id: 12, nombre: "Arequipe Repostero", categoria: "insumos",
        precio: 16000, unidad: "Tarro x2.5 KG", stock: 35,
        descripcion: "Ideal para postres y obleas. Textura firme.",
        imagen: "../src/media/darkmode.png"
    },
    {
        id: 13, nombre: "Salsa Dulce de Mora", categoria: "insumos",
        precio: 14000, unidad: "Litro", stock: 45,
        descripcion: "Salsa de mora concentrada para helados y obleas.",
        imagen: "../src/media/darkmode.png"
    },
    {
        id: 14, nombre: "Obleas Tradicionales", categoria: "insumos",
        precio: 8000, unidad: "Paquete x100 Unidades", stock: 90,
        descripcion: "Galleta de oblea fresca y crujiente.",
        imagen: "../src/media/darkmode.png"
    },
    {
        id: 15, nombre: "Miga de Pan Panko", categoria: "insumos",
        precio: 12000, unidad: "KG", stock: 150,
        descripcion: "Miga de pan extra crujiente para apanar.",
        imagen: "../src/media/darkmode.png"
    }
];

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
                    <button class="add-cart" onclick="alert('Añadido al carrito')" ${producto.stock === 0 ? 'disabled' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h520v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40Z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// LÓGICA DE FILTRADO
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

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    // Si estamos en el index, renderizamos solo 3
    const liteContainer = document.getElementById('lite-product-grid');
    if (liteContainer) {
        liteContainer.innerHTML = baseDeDatosProductos.slice(0, 3).map(generarCard).join('');
    }

    // Si estamos en catálogo, aplicamos filtros base (muestra todos)
    if (document.getElementById('full-product-grid')) {
        aplicarFiltros();
    }
});