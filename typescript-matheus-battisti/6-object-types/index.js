"use strict";
function showProductDeaitls(produto) {
    console.log(`O nome do produto é ${produto.name} e seu preço pe R$${produto.price}`);
    if (produto.isAvailable) {
        console.log("O produto está disponível");
    }
}
const shirt = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: true
};
showProductDeaitls(shirt);
showProductDeaitls({ name: "Tênis", price: 49.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}
const u1 = { email: "paulo@mail.com", role: "admin" };
const u2 = { email: "joao@mail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = { x: 4 };
coords.y = 15;
console.log(coords);
const humano = {
    nome: "Paulo",
    age: 30
};
const goku = {
    nome: "Goku",
    age: 50,
    superPowers: ["Kamehameha", "Genki Dama"]
};
console.log(goku);
console.log(goku.superPowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - ReadOnly Array | aplica a propriedade somente leitura e tipa o array, os itens podem ser modificados mas
// o comprimento do array não
let myArray = ['maçã', 'laranja', 'banana'];
// myArray[3] = 'mamão';
console.log(myArray);
myArray.forEach(item => {
    console.log('Fruta: ' + item);
});
myArray = myArray.map(item => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumbers = [1, true, 'teste', 4, 5];
console.log(myNumberArray);
const anotherUser = ['Paulo', 20];
console.log(anotherUser[0]);
anotherUser[0] = 'João';
// anotherUser[1] = 'Paulo';
// 9 - Tuplas com readonly | similar às tuplas de python, tem tamanho e tipo restritos e são imutáveis
function showNumbers(numbers) {
    numbers.forEach(number => {
        console.log(number);
    });
}
showNumbers([1, 2]);
