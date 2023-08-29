class Suplemento {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Carrito {
  constructor() {
    this.items = [];
  }

  agregarItem(suplemento) {
    this.items.push(suplemento);
    alert(`"${suplemento.nombre}" se agregó al carrito.`);
  }

  calcularTotal() {
    let total = 0;
    this.items.forEach(item => {
      total += item.precio;
    });
    alert(`Total de la compra: $${total}`);
  }

  mostrarContenido() {
    if (this.items.length === 0) {
      alert("El carrito está vacío.");
    } else {
      const contenidoCarrito = this.items.map(item => item.nombre).join("\n");
      alert(`Contenido del carrito:\n\n${contenidoCarrito}`);
    }
  }
  
  buscarItemPorNombre(nombre) {
    return this.items.find(item => item.nombre === nombre);
  }
}

const suplementos = [
  new Suplemento("Creatina", 15.955),
  new Suplemento("Proteina", 9.133),
  new Suplemento("PreWork", 11.715),
  new Suplemento("Shaker", 1520)
];

const carrito = new Carrito();

while (true) {
  const opcion = prompt(
    "Bienvenido al carrito de compras de suplementos deportivos.\n" +
    "Productos disponibles:\n" +
    suplementos.map((producto, index) => `${index + 1}. ${producto.nombre}: $${producto.precio}`).join('\n') +
    "\nSeleccione el número del producto que desea agregar al carrito:\n" +
    (suplementos.length + 1) + ". Ver contenido del carrito\n" +
    (suplementos.length + 2) + ". Calcular total de la compra\n" +
    (suplementos.length + 3) + ". Salir\n"
  );

  const opcionNumero = parseInt(opcion);
  
  if (opcionNumero === suplementos.length + 1) {
    carrito.mostrarContenido();
  } else if (opcionNumero === suplementos.length + 2) {
    carrito.calcularTotal();
  } else if (opcionNumero === suplementos.length + 3) {
    alert("Gracias por utilizar el carrito de compras. ¡Hasta luego!");
    break;
  } else if (opcionNumero >= 1 && opcionNumero <= suplementos.length) {
    const productoElegido = suplementos[opcionNumero - 1];
    carrito.agregarItem(productoElegido);
  } else {
    alert("Opción no válida. Por favor, selecciona una opción válida.");
  }
}
