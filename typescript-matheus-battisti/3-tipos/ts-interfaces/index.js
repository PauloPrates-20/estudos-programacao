"use strict";
// 13 - interfaces
// outra maneira de nomear tipos de objetos
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const COORD_OBJ = { x: 100, y: 200, z: 100.5 };
showCoords(COORD_OBJ);
const SOME_PERSON = { name: "Paulo", age: 20 };
console.log(SOME_PERSON);
// type personType = {
//     age: number
// }
