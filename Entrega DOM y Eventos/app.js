class Producto {

  constructor(nombre, precio, id, img) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
    this.img = img;
    this.stock = "En stock";
  }

  sinStock() {
    this.stock = "Sin Stock";
  }

}

const java = new Producto(
  "Java",
  1500,
  1,
  "https://i.imgur.com/FU9IURu.png"
);
const spring = new Producto(
  "Spring Boot",
  2000,
  2,
  "https://miro.medium.com/max/1400/1*8KX5TdvTf6HlEjls69uPjw.png"
);
const angular = new Producto(
  "Angular",
  1500,
  3,
  "https://i1.wp.com/blog.enriqueoriol.com/wp-content/uploads/2018/01/AngularLogo.jpg?w=1200"
);
const react = new Producto(
  "React",
  1800,
  4,
  "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png?fm=webp"
);


const productos = [];

productos.push(java, spring, angular, react);



for (const producto of productos) {
  let cardNueva = document.createElement("div"); //  A cada elemento se lo guarda en un class que luego se puede tocar por css
  cardNueva.innerHTML = ` 
  <img src= ${producto.img} class="card-img-top" alt="...">
  <h5 class="card-title">${producto.nombre}</h5>
  <div class="card-body text-center">
   
    <p class="card-text">$ ${producto.precio}</p>
    <button id="${producto.id}" class="third">Añadir<i class="fa fa-shopping-cart in-card" aria-hidden="true"></i> </button>
  </div>

    `; 

  document.getElementById("cards").append(cardNueva); 

  cardNueva.classList.add("card", "col-4", "m-3"); 
}


const arrayCarrito = [];

const botones = document.querySelectorAll(".third");

const cartContainer = document.querySelector("#cart");

const contadorCarrito = document.querySelector("#cart-counter");

console.log(botones); 
for (const boton of botones) {
  boton.addEventListener("click", agregarProducto);
}

function agregarProducto(e) {
  cartContainer.innerHTML = ""; 

  e.target.setAttribute("disabled", true); 
  e.target.innerHTML = "Añadido"; 
  e.target.style.minWidth = "202px"; 

  let productoClickeado = productos.find((item) => item.id == e.target.id); 

  console.log(productoClickeado);

  arrayCarrito.push(productoClickeado);

  for (const productoAgregado of arrayCarrito) {
   

    let cardCarrito = document.createElement("div");
    cardCarrito.innerHTML = ` <div class="d-flex justify-content-between align-items-center mt-3 p-4 items rounded border-bottom border-top" >
    <img class="rounded border" src=${productoAgregado.img} width="100">
        <div class="ml-2"><span class="font-weight-bold d-block m-2">${productoAgregado.nombre}</span><span class="d-block ml-5 font-weight-bold">$${productoAgregado.precio}</span></div>
        <div class="ml-2 rounded"> <span><i class="fa fa-minus " aria-hidden="true"></i> </span> <span class ="item-count rounded">1</span>  <span><i class="fa fa-plus rounded" aria-hidden="true"></i> </span>  </div>
        <span class="eliminar-item" id= "#${productoAgregado.id}"><i class="fa fa-trash" aria-hidden="true"></i> </span>
        </div>`;

    cardCarrito.classList.add("card"); // estilos de Bootstrap

    cartContainer.append(cardCarrito);
  }

  contadorCarrito.innerText = arrayCarrito.length; // contador del carrito
}
