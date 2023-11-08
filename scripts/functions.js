export let nombre;
let apellidos;
export let fecha = new Date();

export let nombreCompleto;
export let nombreCompletoLonguitud;
export let primero;
export let ultimo;
export let quitar;

export const saludo = () => {
  nombre = prompt("Hola, dígame su nombre");
  while (nombre === undefined || nombre === "") {
    nombre = prompt("Introduzca un nombre válido");
  }
  apellidos = prompt("Dígame sus apellidos");
  while (apellidos === undefined || apellidos === "") {
    apellidos = prompt("Introduzca valores válidos");
  }
  fecha = prompt('introduzca la fecha en el siguiente formato XX/XX/XXXX')
  while (fecha = undefined || fecha === ""){
    fecha = prompt("introduzca valores válidos")
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
