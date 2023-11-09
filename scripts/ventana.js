document.getElementById("urlActual").textContent = window.location.href;
document.getElementById("protocolo").textContent = window.location.protocol;

const cerrarVentana = document.getElementById("cerrarVentana");

const close = () => {
  window.close("http://127.0.0.1:5500/ventanaNueva.html");
};

cerrarVentana.addEventListener("click", close);
