"use strict";
// 1 - arrays
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers[2]);
// numbers = "Teste";
const NOMES = ["Paulo", "Algum outro"];
// NOMES.push(4);
// 2 - sintaxe alternativa para arrays
const NUMS = [100, 200, 300];
NUMS.push(400);
console.log(NUMS);
// NUMS.push("teste");
console.log(NUMS[1]);
// 3 - any
const ARRAY_1 = [1, "teste", true, [], { nome: "paulo" }];
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
    return `Olá ${nome}`;
}
console.log(greeting("Paulo"));
// console.log(greeting(123));,
// 6 - funções anônimas
setTimeout(function () {
    const SALARY = 1000;
    // console.log(parseFloat(SALARY));
    // console.log(SALARY);
}, 2000);
// 7 - tipagem de objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const OBJ_COORD = { x: 329, y: 84.2 };
passCoordinates(OBJ_COORD);
// passCoordinates([1, 2]);
const OBJ_PESSOA = { nome: "Paulo", sobrenome: "Prates" };
// mais comum utilizar inferência para objetos
// 8 - propriedades opcionais (utiliza uma interrogação)
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - validando argumentos opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return console.log(`Olá ${firstName} ${lastName}. Tudo bem?`);
    }
    return console.log(`Olá ${firstName}. Tudo bem?`);
}
advancedGreeting("Paulo", "Prates");
advancedGreeting("Paulo");
// 10 - Union type
// Determina dois ou mais tipos para a variável
// sintaxe variável: tipo1 | tipo2 | etc.
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
const ARR_2 = [1, "teste", true];
console.log(ARR_2);
// 11 - Avancando em union types
// validacao de tipos
function showUserRole(role) {
    if (typeof (role) === "boolean") {
        return "Usuario nao aprovado";
    }
    return `A funcao do usuario e ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Gerente"));
