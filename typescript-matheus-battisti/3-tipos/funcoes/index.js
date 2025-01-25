"use strict";
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
