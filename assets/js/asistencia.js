// 1. Guardamos los elementos que vamos a usar
const tabla = document.getElementById("tabla");
const autenticar = document.getElementById("autenticar");
const siguiente = document.getElementById("siguiente");

// 2. Cuando hagan clic en "Siguiente"...
siguiente.addEventListener("click", function () {
  tabla.classList.add("oculto");           // escondemos la tabla
  autenticar.classList.remove("oculto");   // mostramos la autenticación
});