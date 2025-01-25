"use strict";
// 18 - tipo symbol | tipo não padronizado
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
