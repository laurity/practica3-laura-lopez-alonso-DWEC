import { longitud, saludo } from "./functions.js";

import {nombre } from "./functions.js";
import { nombreCompletoLonguitud } from "./functions.js";

document.addEventListener("DOMContentLoaded", function(){
    saludo();
    longitud();
    write();
});
const write = () =>{
        document.open();
        document.write(`<p>Buenos días, <b>${nombre}</b></p>`)
        document.write(`<p>Tu nombre tiene <b>${nombreCompletoLonguitud}</b> caracteres, incluidos espacios.</p>`)
        document.close();
}