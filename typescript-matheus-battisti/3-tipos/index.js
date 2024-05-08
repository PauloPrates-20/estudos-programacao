// 1 - arrays
var numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers[2]);
// numbers = "Teste";
var NOMES = ["Paulo", "Algum outro"];
// NOMES.push(4);
// 2 - sintaxe alternativa para arrays
var NUMS = [100, 200, 300];
NUMS.push(400);
console.log(NUMS);
// NUMS.push("teste");
console.log(NUMS[1]);
// 3 - any
var ARRAY_1 = [1, "teste", true, [], { nome: "paulo" }];
console.log(ARRAY_1);
ARRAY_1.push([1, 2, 3]);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(10, 2);
// soma("a", "b");
// 5 - retorno de funções
function greeting(nome) {
    // return 5;
    return "Ol\u00E1 ".concat(nome);
}
console.log(greeting("Paulo"));
// console.log(greeting(123));,
// 6 - funções anônimas
setTimeout(function () {
    var SALARY = 1000;
    // console.log(parseFloat(SALARY));
    // console.log(SALARY);
}, 2000);
// 7 - propriedades tipadas
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
var OBJ_COORD = { x: 329, y: 84.2 };
passCoordinates(OBJ_COORD);
// passCoordinates([1, 2]);
var OBJ_PESSOA = { nome: "Paulo", sobrenome: "Prates" };
// mais comum utilizar inferência para objetos
