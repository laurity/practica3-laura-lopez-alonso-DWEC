export let nombre;
export let apellidos;
export let fecha;
export let nombreCompleto;
export let nombreCompletoLonguitud;

export const saludo = () =>{
   nombre= prompt("Hola, dígame su nombre");
   while(nombre === undefined || nombre === ""){
    nombre=prompt("Introduzca un nombre válido");
}
    apellidos= prompt("Dígame sus apellidos");
    while(apellidos === undefined ||apellidos === ""){
    apellidos=prompt("Introduzca valores válidos");
}
}
export const longitud = () =>{
    nombreCompleto = nombre + " " + apellidos;
    nombreCompletoLonguitud = nombreCompleto.length; 
}
