
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
/*
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
*/

//DOM
const catalogo = document.getElementById(`catalogo`)
let producto = [
  {
    codigo: 1,
    articulo: "Gin Bombay",
    precio: 2500,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_819486-MLA50158962519_062022-F.webp",
  },
  {
    codigo: 2,
    articulo: "Gin Tanqueray",
    precio: 2800,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_950817-MLA51307565889_082022-F.webp",
  },
  {
    codigo: 3,
    articulo: "Gin Beefeater",
    precio: 2900,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_713622-MLA48700300946_122021-F.webp",
  },
  {
    codigo: 4,
    articulo: "Gin Beefeater",
    precio: 2900,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_841870-MLA50125632108_052022-O.webp",
  },
  {
    codigo: 5,
    articulo: "Cerveza Patagonia",
    precio: 2900,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_821118-MLA50761563499_072022-F.webp",
  }
]

//renderizado
let carrito = []

producto.forEach(producto => {
  let productoAgregado = document.createElement ("catalogo")
  productoAgregado.innerHTML = `
  <div class="card" style="width: 18rem;">
    <img class="img" src="${producto.imagen}" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto.articulo}</h5>
        <p class="card-text">$${producto.precio}</p>
        <a href="#" class="btn btn-dark" id=${producto.codigo}>Comprar</a>
      </div>
  </div>
`
catalogo.append(productoAgregado)

const boton = document.getElementById(producto.codigo)
boton.addEventListener("click", () => comprarProducto(producto))
})

const comprarProducto = (producto) => {
  let productoExiste = carrito.find(item => item.codigo === producto.codigo)
  if(productoExiste === undefined){
    carrito.push({
      codigo: producto.codigo,
      articulo: producto.articulo,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1
    })
  }else{
    productoExiste.precio = productoExiste + producto.precio
    productoExiste.cantidad = productoExiste.cantidad + 1 
  }
}

boton.addEventListener("click", () => console.log(carrito))



//control de stock
for (let stock = 0; stock < catalogo.length; stock++) {
  const inventario = catalogo[stock];
  console.log(stock, inventario);
}
//evento
/*const boton = document.getElementById(producto.codigo)
boton.addEventListener("click", () => comprar(producto))

const comprar = (producto) => {
  console.log(producto.codigo);
}
*/

//storage
localStorage.setItem("cliente1", "Mariana Perez");
sessionStorage.setItem("clave", "569752");

localStorage.setItem("cliente2", "Juan Gomez");
sessionStorage.setItem("contraseña", "645885");

let mensaje = localStorage.getItem("cliente1");
console.log(mensaje)

localStorage.clear();

//JSON
/*
const guardarStorage = (clave, valor) => {localStorage.setItem(clave, valor)};

carrito.forEach(carrito => {
  guardarStorage(carrito.articulo, JSON.stringify(carrito));
})

localStorage.setItem("carrito", JSON.stringify(carrito));
*/

//operadores avanzados
let edad = parseInt(prompt("Ingrese su edad"));
edad >= 18 ? alert("Puedes comprar") : alert("No puedes comprar");

//Toastify
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  Toastify({
    text: "Chateá con nosotros",
    className: "info",
    destination: "https://whatsapp.com/",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();
});

//buscador
const inputAfter = document.getElementById("inputAfter")
const botonInput = document.getElementById("botonInput")

const buscarProducto = (string) => {
  console.log(string)
  let productoBuscado = productos.find(producto => producto.articulo.includes(string))
  console.log(productoBuscado);
 inputAfter.value = ``
}

inputAfter.addEventListener("input", () => console.log(inputAfter.value))
botonInput.addEventListener("click", () => console.log(inputAfter.value))