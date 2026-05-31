const baseDeDatosProductos = [
    {
        id: 1, nombre: "Chorizo Cuncia", categoria: "carnes",
        precio: 20550, unidad: "Paquete x10 unidades", stock: 150,
        descripcion: "Chorizo marinado en especias de la casa.",
        imagen: "src/productos/chorizo.jpeg"
    },
    {
        id: 2, nombre: "Papas Francesas", categoria: "congelados",
        precio: 23000, unidad: "Bolsa 2,5KG", stock: 80,
        descripcion: "Importadas, congeladas y listas para freir.",
        imagen: "src/productos/francesas.jpeg"
    },
    {
        id: 3, nombre: "Costillas Ahumadas", categoria: "carnes",
        precio: 16300, unidad: "Paquete 450g", stock: 100,
        descripcion: "Marinadas con nuestra receta artesanal propia, listas para asar.",
        imagen: "src/productos/costillas.jpeg"
    },
    {
        id: 4, nombre: "Alitas Ahumadas", categoria: "carnes",
        precio: 15000, unidad: "Paquete 500g", stock: 45,
        descripcion: "Alitas de pollo ahumadas, sasonadas y listas para freir.",
        imagen: "src/productos/alitasahumadas.jpeg"
    },
    {
        id: 5, nombre: "Butifarra", categoria: "carnes",
        precio: 10400, unidad: "Paquete 450g", stock: 60,
        descripcion: "Butifarras sasonadas a la perfección, listas para asar.",
        imagen: "src/productos/butifarras.jpeg"
    },
    {
        id: 6, nombre: "Carne de hamburguesa", categoria: "carnes",
        precio: 26300, unidad: "Paquete x10 unidades", stock: 50,
        descripcion: "Carnes de hamburguesa sasonadas, listas para asar.",
        imagen: "src/productos/carnehamburg.jpeg"
    },
    {
        id: 7, nombre: "Chorizo mini cuncia x4", categoria: "carnes",
        precio: 5900, unidad: "Paquete x4", stock: 300,
        descripcion: "Nuestro chorizo cuncia artesanal, mismo sabor, tamaño mini.",
        imagen: "src/productos/chorizominicuncia.jpeg"
    },
    {
        id: 8, nombre: "Chorizo mini cuncia x8", categoria: "carnes",
        precio: 10900, unidad: "Paquete x8", stock: 300,
        descripcion: "Nuestro chorizo cuncia artesanal, mismo sabor, tamaño mini.",
        imagen: "src/productos/chorizominicuncia.jpeg"
    },
    {
        id: 9, nombre: "Chorizo santarrosano x5", categoria: "carnes",
        precio: 10900, unidad: "Paquete x5", stock: 40,
        descripcion: "Nuestro chorizo artesanal santarrosano.",
        imagen: "src/productos/chorizosanta.jpeg"
    },
    {
        id: 10, nombre: "Chorizo santarrosano x10", categoria: "carnes",
        precio: 21350, unidad: "Paquete x10", stock: 40,
        descripcion: "Nuestro chorizo artesanal santarrosano.",
        imagen: "src/productos/chorizosanta.jpeg"
    },
    {
        id: 11, nombre: "Costilla cali", categoria: "carnes",
        precio: 75900, unidad: "3KG", stock: 200,
        descripcion: "3KG de nuestra costilla carnuda.",
        imagen: "src/productos/costillacali.jpeg"
    },
    {
        id: 12, nombre: "Costilla premium", categoria: "carnes",
        precio: 14300, unidad: "Paquete 450g", stock: 35,
        descripcion: "Ideales para todas tus preparaciones.",
        imagen: "src/productos/costillapremium.jpeg"
    },
    {
        id: 13, nombre: "Costilla sin hueso", categoria: "carnes",
        precio: 8000, unidad: "Paquete 250g", stock: 45,
        descripcion: "Costillas sin hueso, ideales para todo tipo de preparaciones.",
        imagen: "src/productos/costillasinhueso.jpeg"
    },
    {
        id: 14, nombre: "Costilla sin hueso", categoria: "carnes",
        precio: 16000, unidad: "Paquete 500g", stock: 45,
        descripcion: "Costillas sin hueso, ideales para todo tipo de preparaciones.",
        imagen: "src/productos/costillasinhueso.jpeg"
    },
    {
        id: 15, nombre: "Papa criolla", categoria: "congelados",
        precio: 11800, unidad: "Paquete 1000g", stock: 150,
        descripcion: "Papas criollas congeladas listas para freir.",
        imagen: "src/productos/criolla.jpeg"
    },
    {
        id: 16, nombre: "Papa criolla", categoria: "congelados",
        precio: 6100, unidad: "Paquete libra", stock: 200,
        descripcion: "Papas criollas congeladas listas para freir.",
        imagen: "src/productos/criolla.jpeg"
    },
    {
        id: 17, nombre: "Hamburguesa de pollo apanado", categoria: "carnes",
        precio: 14000, unidad: "Paquete 5 unidades", stock: 99,
        descripcion: "Hamburguesa de pollo apanada, congelada y lista para freir en casa.",
        imagen: "src/productos/hamburgdepolloapanado.jpeg"
    },
    {
        id: 18, nombre: "Hamburguesa de pollo apanado", categoria: "carnes",
        precio: 64200, unidad: "Paquete 22 unidades", stock: 180,
        descripcion: "Hamburguesa de pollo apanada, congelada y lista para freir en casa.",
        imagen: "src/productos/hamburgdepolloapanado.jpeg"
    },
    {
        id: 19, nombre: "Hamburguesa llanera", categoria: "carnes",
        precio: 20200, unidad: "Paquete 90g", stock: 122,
        descripcion: "Carne de hamburguesa artesanal y con todo el sabor llanero, lista para asar.",
        imagen: "src/productos/hamburgllanera.jpeg"
    },
    {
        id: 20, nombre: "Hamburguesa preasada", categoria: "carnes",
        precio: 6000, unidad: "Paquete 500g", stock: 253,
        descripcion: "Hamburguesa preasada, congelada y lista para freir en casa.",
        imagen: "src/productos/hamburgpollo.jpeg"
    },
    {
        id: 21, nombre: "Jamon ahumado JJ", categoria: "embutidos",
        precio: 7800, unidad: "Paquete 500g", stock: 83,
        descripcion: "Jamón con el toque ahumado.",
        imagen: "src/productos/jamonahumado.jpeg"
    },
];

let carrito = JSON.parse(localStorage.getItem('danillanos_carrito')) || [];

function guardarCarrito() {
    localStorage.setItem('danillanos_carrito', JSON.stringify(carrito));
}

window.addToCart = function(id, fromCard = false) {
    const producto = baseDeDatosProductos.find(p => p.id === id);
    if (!producto) return;
    
    let cantidadAAgregar = 1;
    if (fromCard) {
        const inputQty = document.getElementById(`qty-${id}`);
        if (inputQty) cantidadAAgregar = parseInt(inputQty.value) || 1;
    }

    const item = carrito.find(p => p.id === id);
    if (item) {
        item.cantidad += cantidadAAgregar;
    } else {
        carrito.push({ ...producto, cantidad: cantidadAAgregar });
    }
    
    guardarCarrito();
    actualizarCarritoUI();
    if (typeof enableCart === "function") enableCart();
}

// Nueva función para cambiar cantidades DESDE el carrito
window.updateQty = function(id, change) {
    const item = carrito.find(p => p.id === id);
    if (item) {
        item.cantidad += change;
        if (item.cantidad <= 0) {
            removeFromCart(id);
            return;
        }
    }
    guardarCarrito();
    actualizarCarritoUI();
    if(typeof renderCheckoutSummary === "function") renderCheckoutSummary();
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
        if (btnCheckout) { btnCheckout.disabled = true; btnCheckout.style.opacity = '0.4'; }
        if (btnClear) { btnClear.disabled = true; btnClear.style.opacity = '0.4'; }
        return;
    }

    if (btnCheckout) { btnCheckout.disabled = false; btnCheckout.style.opacity = '1'; }
    if (btnClear) { btnClear.disabled = false; btnClear.style.opacity = '1'; }

    let total = 0;
    maincart.innerHTML = '<div style="width: 100%; height:75vh; overflow-y: auto; text-align:left; display:flex; flex-direction:column; gap:15px; padding-bottom:10px;">' + 
        carrito.map(item => {
            total += item.precio * item.cantidad;
            return `
            <div style="display:flex; gap:10px; align-items:center; border-bottom: 1px solid var(--over); padding-bottom:10px;">
                <img src="/${item.imagen}" style="width:50px; height:50px; object-fit:cover; border-radius:8px;">
                <div style="flex:1;">
                    <h4 style="margin:0; font-size:14px; color: var(--text);">${item.nombre}</h4>
                    <p style="margin:2px 0 0 0; font-size:12px; color:var(--contrast);">
                        $${item.precio.toLocaleString('es-CO')} c/u
                    </p>
                    <div style="display:flex; align-items:center; gap:8px; margin-top:5px;">
                        <button onclick="updateQty(${item.id}, -1)" style="width:25px; height:25px; border-radius:50%; border:none; background:var(--over); fill:var(--text); cursor:pointer;"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z"/></svg></button>
                        <span style="font-size:14px; font-weight:bold;">${item.cantidad}</span>
                        <button onclick="updateQty(${item.id}, 1)" style="width:25px; height:25px; border-radius:50%; border:none; background:var(--over); fill:var(--text); cursor:pointer;"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z"/></svg></button>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:var(--main); cursor:pointer; padding:5px;">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--contrast)"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
            </div>`;
        }).join('') + '</div>' + 
        `<div style="margin-top:15px; margin-bottom:15px; width:100%; text-align:center; font-weight:bold; font-size:18px; padding-top:15px; color: var(--text); border-top: 1px solid var(--over);">Total: $${total.toLocaleString('es-CO')}</div>`;
}

window.changeQtyInput = function(id, change) {
    const input = document.getElementById(`qty-${id}`);
    if (!input) return;
    
    let currentValue = parseInt(input.value) || 1;
    let max = parseInt(input.getAttribute('max')) || 999;
    let min = parseInt(input.getAttribute('min')) || 1;
    
    let newValue = currentValue + change;
    
    if (newValue > max) newValue = max;
    if (newValue < min) newValue = min;
    
    input.value = newValue;
}

function generarCard(producto) {

    const disponiblidad = producto.stock > 0 
        ? `<span class="stock-badge">Disponibles: ${producto.stock}</span>` 
        : `<span class="stock-badge out-stock">Agotado</span>`;

    const colorFondoStock = producto.stock > 0 ? "var(--over)" : "#ffe5e5";
    const colorTextoStock = producto.stock > 0 ? "var(--contrast)" : "#d93025";
    const bordeStock = producto.stock > 0 ? "var(--contrast)" : "#d93025";
    const textoStock = producto.stock > 0 ? `Stock: ${producto.stock}` : `Agotado`;

    const pastillas = `
        <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
            <span style="background: ${colorFondoStock}; color: ${colorTextoStock}; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: bold;">
                ${textoStock}
            </span>
            <span style="background: var(--over); color: var(--contrast); padding: 4px 10px; border-radius: 20px; font-size: 11px; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">
                ${producto.categoria}
            </span>
            <span style="background: var(--main); color: #fff; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: bold;">
                ${producto.unidad}
            </span>
        </div>
    `;

    return `
        <div class="product-card">
            <div class="product-img" style="background-image: url('${producto.imagen}')">
                ${disponiblidad}
            </div>
            <div class="product-info" style="display: flex; flex-direction: column; flex: 1;">
                
                ${pastillas}
                
                <h3 style="margin: 0 0 5px 0; font-size: 18px;">${producto.nombre}</h3>
                <p style="margin: 0 0 15px 0; flex-grow: 1; font-size: 14px; color: var(--contrast);">${producto.descripcion}</p>
                
                <div class="price" style="font-size: 22px; font-weight: bold; color: var(--text); margin-bottom: 15px;">
                    $${producto.precio.toLocaleString('es-CO')}
                </div>

                <div class="product-actions" style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; border:none; border-radius: 8px; background: var(--over); height: 45px; overflow: hidden;">
                        
                        <button onclick="changeQtyInput(${producto.id}, -1)" ${producto.stock === 0 ? 'disabled' : ''} style="width: 50px; height: 100%; background: transparent; border: none; fill: var(--text); cursor: pointer; font-size: 20px; font-weight: bold; transition: background 0.2s; opacity: 0.5; display:flex; align-items:center; justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M240-440q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Z"/></svg></button>
                        
                        <input type="number" id="qty-${producto.id}" value="1" min="1" max="${producto.stock > 0 ? producto.stock : 1}" style="width: 100%; height: 100%; text-align: center; border: none; background: transparent; color: var(--text); font-weight: bold; outline: none; font-size: 16px;" ${producto.stock === 0 ? 'disabled' : ''}>
                        
                        <button onclick="changeQtyInput(${producto.id}, 1)" ${producto.stock === 0 ? 'disabled' : ''} style="width: 50px; height: 100%; background: transparent; border: none; fill: var(--text); cursor: pointer; font-size: 20px; font-weight: bold; transition: background 0.2s; opacity: 0.5; display:flex; align-items:center; justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z"/></svg></button>
                    </div>

                    <button class="add-cart" onclick="addToCart(${producto.id}, true)" ${producto.stock === 0 ? 'disabled' : ''} style="width: 100%; height: 45px; border-radius: 8px; background: var(--main); color: #fff; border: none; cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 8px; font-weight: bold; font-size: 15px; transition: opacity 0.3s;">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h520v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40Z"/></svg>
                        Añadir al Carrito
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

window.enviarPedidoWhatsApp = function(datosEnvio) {
    if (carrito.length === 0) return;

    const numeroWhatsApp = "573182841896"; 
    
    let mensaje = "¡Hola Danillanos! Me gustaría hacer el siguiente pedido:\n\n";
    
    let total = 0;
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        mensaje += `${item.cantidad}x ${item.nombre} - $${subtotal.toLocaleString('es-CO')}\n`;
    });

    mensaje += `\n*Total a Pagar:* $${total.toLocaleString('es-CO')}\n`;
    mensaje += `*Método de Pago:* ${datosEnvio.metodoPago}\n`;

    mensaje += `\n*Datos de envío:*\n`;
    mensaje += `- Nombre: ${datosEnvio.nombre}\n`;
    mensaje += `- Dirección: ${datosEnvio.direccion}\n`;
    mensaje += `- Ciudad: ${datosEnvio.ciudad}\n`;
    mensaje += `- Teléfono: ${datosEnvio.telefono}\n`;

    mensaje += `\n¡Quedo muy atento a su confirmación! Gracias.`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');

    clearCart();
    window.location.href = '/index.html'; 
}