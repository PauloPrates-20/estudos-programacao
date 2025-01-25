"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData('Testando generic'));
console.log(showData(5));
console.log(showData(true));
console.log(showData([]));
// 2 - constraints em generics
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myObj = { name: 'Porta', cor: 'Branca' };
const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: 'roupa' };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' };
const myPen = { name: 'Caneta BIC', wheels: false, engine: false, color: 'Azul' };
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `O nome do personagem é ${obj[key]}`;
}
const myChar = {
    name: 'Paulo',
    age: 21,
    hasDriveLicense: false
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// 6 - typeof type operator
const userName = 'Paulo';
const userName2 = 'Willian';
const userName4 = 'João';
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para carga leve',
};
function showKm(km) {
    console.log(`O veículo tem a km de ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000,
};
showKm(newCar.km);
const someVar = 5;
const someVar2 = 'Teste';
const testing = 'some text';
