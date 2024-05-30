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
