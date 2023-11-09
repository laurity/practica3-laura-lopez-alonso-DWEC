import {
  calcularEdad,
  quitarLetras,
  ultimaLetra,
  primeraLetra,
  longitud,
  saludo,
  calcularCoseno,
} from "./functions.js";

import { nombre } from "./functions.js";
import { nombreCompleto } from "./functions.js";
import { nombreCompletoLonguitud } from "./functions.js";
import { primero } from "./functions.js";
import { ultimo } from "./functions.js";
import { quitar } from "./functions.js";
import { edad } from "./functions.js";
import {coseno} from "./functions.js";
import {mayor} from "./functions.js";
import { random } from "./functions.js";


document.addEventListener("DOMContentLoaded", function () {
  saludo();
  longitud();
  primeraLetra();
  ultimaLetra();
  quitarLetras();
  calcularEdad();
  calcularCoseno();
  write();
});
const write = () => {
  document.open();
  document.write(`<p>Buenos días, <b>${nombre}</b></p>`);
  document.write(
    `<p>Tu nombre tiene <b>${nombreCompletoLonguitud}</b> caracteres, incluidos espacios.</p>`
  );
  document.write(
    `<p>La <b>primera letra 'A'</b> de tu nombre completo está en la posición <b>${primero}</b></p>`
  );
  document.write(
    `<p>La <b>última letra 'A'</b> de tu nombre completo está en la posición <b>${ultimo}</b></p>`
  );
  document.write(
    `<p>Tu nombre <b>menos las tres primeras letras es ${quitar}</b></p>`
  );
  document.write(
    `<p>Tu nombre todo en <b>MAYÚSCULAS</b> es <b>${nombreCompleto.toUpperCase()}</b></p>`
  );
  document.write(`<p>Tu <b>edad</b> es ${edad} </p>`);
  document.write(`<p>El <b>coseno de 180 </b> es <b>${coseno}</b> </p>`);
  document.write(`<p>El número mayor de <b>(34, 67, 23, 75, 35, 19)</b> es ${mayor}</p>`);
  document.write(`<p>Ejemplo de número al azar entre 0 y 100: <b>${random}</b></p>`);
  document.close();
};
