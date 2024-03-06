/**
 * 
 */
let arrayUsuario = [];

for (let i = 0; i < 2; i++) {
    let valor = prompt(`Ingrese el valor ${i + 1}:`);
    arrayUsuario.push(valor);
}


let arrayPredefinido = ["dato1", "dato2", "dato3"];


console.log("Array del usuario:", arrayUsuario);
console.log("Tipo de datos del array del usuario:", typeof arrayUsuario);
console.log("Tipo de datos de los valores del array del usuario:");
for (let valor of arrayUsuario) {
    console.log(typeof valor);
}

console.log("\nArray predefinido:", arrayPredefinido);
console.log("Tipo de datos del array predefinido:", typeof arrayPredefinido);
console.log("Tipo de datos de los valores del array predefinido:");
for (let valor of arrayPredefinido) {
    console.log(typeof valor);
}