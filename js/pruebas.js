
//pregunta de edad
let edad = parseInt(prompt("Ingrese su edad"));
if(edad < 18){
  alert("Sos menor de edad. Prohibida la venta");
}else{
  alert("Puedes beber alcohol con moderación");
}


//stock de productos
const productos = [
    { id: 1, articulo: "Gin", marca: "Bombay", precio: 2500 },
    { id: 2, articulo: "Gin", marca: "Tanqueray", precio: 3000 },
    { id: 3, articulo: "Vino", marca: "Trumpeter", precio: 1200 },
    { id: 4, articulo: "Vino", marca: "Santa Julia", precio: 800 },
    { id: 5, articulo: "Fernet", marca: "Branca", precio: 2000 },
    { id: 6, articulo: "Vodka", marca: "Absolut", precio: 1800 },
    { id: 7, articulo: "Whisky", marca: "Jim Beam", precio: 35000 },
    { id: 8, articulo: "Cerveza", marca: "Stella", precio: 400 },
    { id: 9, articulo: "Cerveza", marca: "Patagonia", precio: 500 },
];

//control de stock
for (let stock = 0; stock < productos.length; stock++) {
    const inventario = productos[stock];
    console.log(stock, inventario);
   }

//registro de clientes
function Cliente(nombre, telefono, direccion){
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
}

const cliente1 = new Cliente("Mariana", 3434155433, "25 de mayo 471");
const cliente2 = new Cliente("Juan", 343562547, "Ramirez 5466");

console.log(cliente2.direccion);

//calcular carrito
let totalPedido = 0;
let precioUnitario = 0;
let contador = 0;

alert(`Vamos a sumar los precios de los productos que agregaste al carrito y te mostraremos el total`);

function ingresarPrecio() {
  precioUnitario = Number(prompt(`Ingrese el precio del producto` + (contador + 1) + `:`));

while (precioUnitario > 0) {
  totalPedido = calcularTotal(precioUnitario);
  contador++;
  precioUnitario = Number(prompt(`Ingrese el precio del producto` + (contador + 1) + `:`));
}
if (precioUnitario <= 0 || isNaN(precioUnitario)) {
  console.log(`Ha introducido un número no válido`);
}
}

function calcularTotal(precioUnitario) {
  return totalPedido + precioUnitario;
}

function mostrarTotal() {
  console.log(`Cantidad de productos: ` + contador);
  console.log(`El precio total es $ ` + totalPedido);
}

ingresarPrecio();
calcularTotal();
mostrarTotal();