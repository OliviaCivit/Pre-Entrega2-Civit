let carrito = [];
const precios = {
  Creatina: 15.955,
  Proteina: 9.133,
  PreWork: 11.715,
  Shaker: 1520
};

function agregarAlCarrito(suplemento) {
  carrito.push(suplemento);
  alert(`"${suplemento}" se agregó al carrito.`);
}

function mostrarProductos() {
  let productosEnumerados = "";
  for (const [producto, precio] of Object.entries(precios)) {
    productosEnumerados += `${producto}: $${precio}\n`;
  }
  return productosEnumerados;
}

function mostrarCarrito() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
  } else {
    alert(`Contenido del carrito:\n\n${carrito.join("\n")}`);
  }
}

function calcularTotal() {
  let total = 0;
  for (const item of carrito) {
    total += precios[item];
  }
  alert(`Total de la compra: $${total}`);
}

while (true) {
  const opcion = prompt(
    "Bienvenido al carrito de compras de suplementos deportivos.\n" +
    "Productos disponibles:\n" +
    mostrarProductos() +
    "\nSeleccione el número del producto que desea agregar al carrito:\n" +
    "1. Creatina\n" +
    "2. Proteina\n" +
    "3. PreWork\n" +
    "4. Shaker\n" +
    "5. Ver contenido del carrito\n" +
    "6. Calcular total de la compra\n" +
    "7. Salir\n"
  );

  switch (opcion) {
    case "1":
    case "2":
    case "3":
    case "4":
      const productoElegido = Object.keys(precios)[parseInt(opcion) - 1];
      agregarAlCarrito(productoElegido);
      break;
    case "5":
      mostrarCarrito();
      break;
    case "6":
      calcularTotal();
      break;
    case "7":
      alert("Gracias por utilizar el carrito de compras. ¡Hasta luego!");
      exit(0);
    default:
      alert("Opción no válida. Por favor, selecciona una opción válida.");
  }
}
