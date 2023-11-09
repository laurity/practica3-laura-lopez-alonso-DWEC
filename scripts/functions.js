export let nombre;
let apellidos;
export let nombreCompleto;
export let nombreCompletoLonguitud;
export let primero;
export let ultimo;
export let quitar;

export let fechaNacimiento = new Date();
export let edad;

export let coseno;
export const saludo = () => {
  nombre = prompt("Hola, dígame su nombre");
  while (nombre === undefined || nombre === "") {
    nombre = prompt("Introduzca un nombre válido");
  }
  apellidos = prompt("Dígame sus apellidos");
  while (apellidos === undefined || apellidos === "") {
    apellidos = prompt("Introduzca valores válidos");
  }
  fechaNacimiento = prompt('introduzca la fecha de nacimiento en el siguiente formato XX/XX/XXXX')
  while (fechaNacimiento === undefined || fechaNacimiento === ""){
    fechaNacimiento = prompt("introduzca valores válidos")
  }
};
export const longitud = () => {
  nombreCompleto = nombre + " " + apellidos;
  nombreCompletoLonguitud = nombreCompleto.length;
};
export const primeraLetra = () => {
  primero = nombreCompleto.toUpperCase().indexOf("A", 0) + 1;
  if (primero === 0) {
    primero = "Ninguna, porque no contiene A";
  }
};
export const ultimaLetra = () => {
  ultimo =
    nombreCompleto.toUpperCase().lastIndexOf("A", nombreCompleto.length) + 1;
  if (ultimo === 0) {
    ultimo = "Ninguna, porque no contiene A";
  }
};
export const quitarLetras = () => {
  quitar = nombreCompleto.slice(3);
};
export const calcularEdad = () => {
  const fechaNac = new Date(fechaNacimiento);
  const fechaActual = new Date();
  
 edad = fechaActual.getFullYear() - fechaNac.getFullYear();
  

  
};
export const calcularEstacion = () => {

};
export const calcularCoseno = () => {
  let radianes = 180 * (Math.PI / 180);

  coseno = Math.cos(radianes);

};