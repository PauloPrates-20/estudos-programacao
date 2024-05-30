function showProductDeaitls(produto) {
    console.log("O nome do produto \u00E9 ".concat(produto.name, " e seu pre\u00E7o pe R$").concat(produto.price));
    if (produto.isAvailable) {
        console.log("O produto está disponível");
    }
}
var shirt = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: true
};
showProductDeaitls(shirt);
showProductDeaitls({ name: "Tênis", price: 49.99, isAvailable: false });
function showUserDetails(user) {
    console.log("O usu\u00E1rio tem o e-mail: ".concat(user.email));
    if (user.role) {
        console.log("A fun\u00E7\u00E3o do usu\u00E1rio \u00E9 ".concat(user.role));
    }
}
var u1 = { email: "paulo@mail.com", role: "admin" };
var u2 = { email: "joao@mail.com" };
showUserDetails(u1);
showUserDetails(u2);
var fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
var coords = { x: 4 };
coords.y = 15;
console.log(coords);
var humano = {
    nome: "Paulo",
    age: 30
};
var goku = {
    nome: "Goku",
    age: 50,
    superPowers: ["Kamehameha", "Genki Dama"]
};
console.log(goku);
console.log(goku.superPowers[1]);
var arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - ReadOnly Array | aplica a propriedade somente leitura e tipa o array, os itens podem ser modificados mas
// o comprimento do array não
var myArray = ['maçã', 'laranja', 'banana'];
// myArray[3] = 'mamão';
console.log(myArray);
myArray.forEach(function (item) {
    console.log('Fruta: ' + item);
});
myArray = myArray.map(function (item) {
    return "Fruta: ".concat(item);
});
console.log(myArray);
var myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumbers = [1, true, 'teste', 4, 5];
console.log(myNumberArray);
var anotherUser = ['Paulo', 20];
console.log(anotherUser[0]);
anotherUser[0] = 'João';
// anotherUser[1] = 'Paulo';
// 9 - Tuplas com readonly | similar às tuplas de python, tem tamanho e tipo restritos e são imutáveis
function showNumbers(numbers) {
    numbers.forEach(function (number) {
        console.log(number);
    });
}
showNumbers([1, 2]);
