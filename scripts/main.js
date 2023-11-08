import {
  quitarLetras,
  ultimaLetra,
  primeraLetra,
  longitud,
  saludo,
} from "./functions.js";

import { nombre } from "./functions.js";
import { nombreCompleto } from "./functions.js";
import { nombreCompletoLonguitud } from "./functions.js";
import { primero } from "./functions.js";
import { ultimo } from "./functions.js";
import { quitar } from "./functions.js";
import {fecha} from "./functions.js";

document.addEventListener("DOMContentLoaded", function () {
  saludo();
  longitud();
  primeraLetra();
  ultimaLetra();
  quitarLetras();
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
    `<p>Tu nombre todo en <b>MAYÚSCULAS es <b>${nombreCompleto.toUpperCase()}</b></p>`
  );
  document.write(`<p>Tu <b>edad</b> es ${fecha} </p>`)
  document.close();
};
