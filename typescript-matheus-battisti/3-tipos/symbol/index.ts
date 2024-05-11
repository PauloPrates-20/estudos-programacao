// 18 - tipo symbol | tipo não padronizado

let symbolA: symbol = Symbol("a");
let symbolB: symbol = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);