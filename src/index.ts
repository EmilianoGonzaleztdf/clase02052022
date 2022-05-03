btnaltura.addEventListener("click", () => {
  console.log();

rotulo.innerHTML = "indique la altura de la persona";
let dato = document.getElementById("dato");

let alturaPermitida : number = 1.3;
let alturaPersona : number = dato.value;
//let dato : number = Number(dato.value);
if (alturaPersona <= alturaPermitida) {
console.log("La persona no puede subir al juego");
} else {
console.log("La persona puede subir al juego");
}}
