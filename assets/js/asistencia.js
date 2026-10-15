const tabla = document.getElementById("tabla");
const autenticar = document.getElementById("autenticar");
const siguiente = document.getElementById("siguiente");

siguiente.addEventListener("click", function () {
  tabla.classList.add("oculto");         
  autenticar.classList.remove("oculto");  
});
