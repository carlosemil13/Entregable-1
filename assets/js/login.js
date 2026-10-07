// 1. Guardamos los elementos que vamos a usar
const bienvenida = document.getElementById("bienvenida");
const login = document.getElementById("login");
const boton = document.getElementById("siguiente");

// 2. Cuando hagan clic en "Siguiente"...
boton.addEventListener("click", function () {
  bienvenida.classList.add("oculto");    // escondemos la bienvenida
  login.classList.remove("oculto");      // mostramos el login
});