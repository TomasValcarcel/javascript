class Super {
    constructor(nombreDelProducto,precioDelProducto) {
      this.nombreDelProducto = nombreDelProducto
      this.precioDelProducto = precioDelProducto
    }
  }
  


  function procesoDeCompraDelProducto() {
    const nombreDelProducto = prompt('Ingrese el nombre del producto seleccionado')
    const precioDelProducto = parseFloat(prompt('Ingrese el precio del producto'))
    return new Super(nombreDelProducto,precioDelProducto)
  }

  const Productos = []
     
  let continuaComprandoProductos = true
  while (continuaComprandoProductos) {
    const prod = procesoDeCompraDelProducto()
  
    Productos.push(prod)
  
    const respuesta = prompt('Quiere comprar algun item mas? si/no')
    if (respuesta === 'no') {
        continuaComprandoProductos = false
    }
  }


  let total = 0
  const precio = Productos.map(p => p.precioDelProducto)
  precio.forEach(p => { total = total + p })
  
  alert('Precio total de su compra' + ' '  +   total)