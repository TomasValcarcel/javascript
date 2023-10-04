const labelCompra = document.querySelector('#labelCompra');
const inputNombre = document.querySelector('#inputNombre');
const inputPrecio = document.querySelector('#inputPrecio');
const divListaDeProductos = document.querySelector('#listaDeProductos')
const seccionGraciasPorTuCompra = document.querySelector('#seccionGraciasPorTuCompra')

const productos = JSON.parse(localStorage.getItem('productos')) || [];

mostrarGraciasPorTuCompra();
class Producto {
  constructor({ nombre, precio }) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

labelCompra.onsubmit = e => {
  e.preventDefault();

  const nombre = inputNombre.value;
  const precio = inputPrecio.value;

  const prod = new Producto({ nombre, precio });

  guardarProd(prod);

  alertaGraciasPorComprar();
}

function guardarProd(prod) {
  productos.push(prod);
  localStorage.setItem('productos', JSON.stringify(productos));
  mostrarGraciasPorTuCompra();
}

function mostrarGraciasPorTuCompra(){
  if (productos.length > 0) {
    seccionGraciasPorTuCompra.style.display = 'block';
    let listaProductoHtml = '<ul>';
    for (const prod of productos) {
      listaProductoHtml += `<li>${prod.nombre}</a></li>`;
    }
    divListaDeProductos.innerHTML = listaProductoHtml + '</ul>';
  }
}

function alertaGraciasPorComprar() {
  Swal.fire('Muchisimas gracias por tu compra. Vuelva prontos!')
}
