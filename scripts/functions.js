//Variables que interactuan con nombre/apellido
export let nombre;
let apellidos;
export let nombreCompleto;
export let nombreCompletoLonguitud;
export let primero;
export let ultimo;
export let quitar;
//Variables que interactuan con la fecha
export let fechaNacimiento = new Date();
let fechaNow = new Date();
export let edad;
export let estacion;
export let anio;

//Variables matemáticas
export let coseno;
export let mayor = Math.max(34, 67, 23, 75, 35, 19);
export let random = Math.round(Math.random() * 100);

/**
 * Introducimos el nombre/apellidos/fecha de nacimiento
 */
export const saludo = () => {
  nombre = prompt("Hola, dígame su nombre").trim();
  while (nombre === undefined || nombre === "") {
    nombre = prompt("Introduzca un nombre válido").trim();
  }
  apellidos = prompt("Dígame sus apellidos").trim();
  while (apellidos === undefined || apellidos === "") {
    apellidos = prompt("Introduzca valores válidos").trim();
  }
  fechaNacimiento = prompt(
    "introduzca la fecha de nacimiento en el siguiente formato YYYY/MM/DD"
  ).trim();
  while (
    fechaNacimiento === undefined ||
    fechaNacimiento === "" ||
    fechaNacimiento.length !== 10 ||
    fechaNacimiento > fechaNow
  ) {
    fechaNacimiento = prompt("introduzca valores válidos").trim();
  }
};
/**
 * Introduce la longitud del nombre y apellidos junto
 */
export const longitud = () => {
  nombreCompleto = nombre + " " + apellidos;
  nombreCompletoLonguitud = nombreCompleto.length;
};
/**
 * Primera letra que contenga A
 */
export const primeraLetra = () => {
  primero = nombreCompleto.toUpperCase().indexOf("A", 0) + 1;
  if (primero === 0) {
    primero = "Ninguna, porque no contiene A";
  }
};
/**
 * Última letra que contenga A
 */
export const ultimaLetra = () => {
  ultimo =
    nombreCompleto.toUpperCase().lastIndexOf("A", nombreCompleto.length) + 1;
  if (ultimo === 0) {
    ultimo = "Ninguna, porque no contiene A";
  }
};
/**
 * Quitamos las 3 primeras letras
 */
export const quitarLetras = () => {
  quitar = nombreCompleto.slice(3);
};
/**
 * Calculamos las edad
 */
export const calcularEdad = () => {
  const fechaNac = new Date(fechaNacimiento);
  const fechaActual = new Date();
//Restamos el año del sistema con la nuestra de nacimiento
  edad = fechaActual.getFullYear() - fechaNac.getFullYear();

//Filtro también por mes y día para que salga la fecha exacta
  if (
    fechaNac.getMonth() > fechaActual.getMonth() ||
    (fechaNac.getMonth() === fechaActual.getMonth() &&
      fechaNac.getDate() > fechaActual.getDate())
  ) {
    edad--;
  }
};
/**
 * Calcular la estación del año en la que coincide la fecha de nacimiento
 */
export const calcularEstacion = () => {
  let fechaNac = new Date(fechaNacimiento);
  let fechaMes = fechaNac.getMonth();
  let fechaDia = fechaNac.getDate();
  //GetMonth va de 0 a 11
  if (
    (fechaMes === 2 && fechaDia >= 20) ||
    (fechaMes >= 3 && fechaMes <= 4) ||
    (fechaMes === 5 && fechaDia <= 19)
  ) {
    estacion = "primavera";
  } else if (
    (fechaMes === 5 && fechaDia >= 20) ||
    (fechaMes >= 6 && fechaMes <= 7) ||
    (fechaMes === 8 && fechaDia <= 21)
  ) {
    estacion = "verano";
  } else if (
    (fechaMes === 8 && fechaDia >= 22) ||
    (fechaMes >= 9 && fechaMes <= 10) ||
    (fechaMes === 11 && fechaDia <= 20)
  ) {
    estacion = "otoño";
  } else {
    estacion = "invierno";
  }
//Muestra el año de nacimiento
  anio = new Date(fechaNacimiento).getFullYear();
};
/**
 * Calculamos el coseno
 */
export const calcularCoseno = () => {
  //Calculamos en primer lugar los radianes.
  let radianes = 180 * (Math.PI / 180);

  coseno = Math.cos(radianes);
};
