
const API = 'https://fakestoreapi.com/products';
const grid = document.getElementById('grid');
const buscar = document.getElementById('buscar');
const cartCountEl = document.getElementById('cart-count');

let productos = []; 
let cartCount = 0;  


const getProductos = async () => {
    try {
        const res = await fetch(API);

        productos = await res.json();
     
        render(productos);
    } catch (error) {
        grid.innerHTML = `<p class="error">Error al cargar productos</p>`;
        console.error(error);
    }
};

const render = (items) => {
    grid.innerHTML = items.map(({ id, title, price, image }) => {
  
        const precioCLP = Math.round(price * 980).toLocaleString('es-CL');

        return `
            <article class="card">
                <img src="${image}" alt="${title}">
                <h3>${title.substring(0, 20)}...</h3>
                <p class="price">$${precioCLP}</p> <button data-id="${id}">Agregar</button>
            </article>
        `;
    }).join('');
};


buscar.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase().trim();
    

    const filtrados = productos.filter(p => p.title.toLowerCase().includes(value));
    
 
    render(filtrados);
});


grid.addEventListener('click', (e) => {

    if (e.target.matches('button[data-id]')) {
    
        cartCount += 1;
        cartCountEl.textContent = cartCount;

      
        const btn = e.target;
        const original = btn.textContent;
        btn.textContent = 'Agregado!';
        
       
        setTimeout(() => {
            btn.textContent = original;
        }, 800,); 
    }
});


getProductos();