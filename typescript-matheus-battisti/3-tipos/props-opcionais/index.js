"use strict";
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
