const bienvenida = document.getElementById("bienvenida");
const login = document.getElementById("login");
const boton = document.getElementById("siguiente");

boton.addEventListener("click", function () {
  bienvenida.classList.add("oculto");   
  login.classList.remove("oculto");     
});
