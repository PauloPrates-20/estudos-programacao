// 1 - var, let e const | let é semelhante ao var porém possui escopo limitado
var x = 10;
var y = 15;

if (y > 10) {
    var x = 5;
    console.log(x);
}

console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
    let a = 5;
    console.log(a);
}

console.log(a);

let i = 100;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

const name = "André";

function logName() {
    const name = "Paulo";
    console.log(name);
}

console.log(name);

// 2 - Arrow Functions
const sum = function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (nome) => {
    if (nome) {
        return `Olá, ${nome}!`;
    }

    return "Olá!"
}

console.log(greeting("Paulo"));
console.log(greeting());

const testeArrow = () => console.log("Testou");

const user = {
    nome: "Paulo",
    idade: 20,
    sayUserName() {
        var self = this;
        setTimeout(function () {
            console.log(self);
            console.log("Username: " + self.nome);
        }, 500);
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log("Username: " + this.nome);
        }, 700);
    }
};

// user.sayUserName(); user.sayUserNameArrow();

// 3 - Filter | Método de array para filtra dados
const arr = [1, 2, 3, 4, 5];

console.log(arr);

const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n;
    }
});

console.log(highNumbers);

const users = [
    {
        nome: "Paulo",
        disponivel: true
    }, {
        nome: "Willian",
        disponivel: false
    }, {
        nome: "André",
        disponivel: false
    }, {
        nome: "Rodrigo",
        disponivel: true
    }
];

console.log(users);

const usuariosDisponiveis = users.filter((user) => user.disponivel);
const usuariosNaoDisponiveis = users.filter((user) => !user.disponivel);

console.log(usuariosDisponiveis);
console.log(usuariosNaoDisponiveis);

// 4 - Map | É um método de array que percorre o array e modifica os elementos
const produtos = [
    {
        nome: "camisa",
        preco: 10.99,
        categoria: "roupas"
    }, {
        nome: "calça",
        preco: 15.99,
        categoria: "roupas"
    }, {
        nome: "prato",
        preco: 8.99,
        categoria: "louças"
    }, {
        nome: "garfo",
        preco: 3.99,
        categoria: "talheres"
    }
];

produtos.map((produto) => {
    if (produto.categoria === "roupas") {
        produto.onSale = true;
    }
});

console.log(produtos);

// 5 - Template literals | permite concatenar strings de forma mais simples
const nome = "Paulo";
const idade = 20;

console.log(`O nome do usuário é ${nome} e ele tem ${idade} anos.`);

// 6 - Destructuring | recurso que pode ser utilizado em array e objetos para
// transformar seus itens em variáveis
const frutas = ["Maçã", "Laranja", "Banana"];

const [f1, f2, f3] = frutas;

console.log(f1);

console.log(f3);

const produto = {
    nome: "Mouse",
    preco: 39.99,
    categoria: "periféricos",
    cor: "preto"
};

const {nome: detalhe, preco, categoria, cor} = produto;

console.log(
    `O nome do produto é ${detalhe}, o preço é R$${preco}, pertence à categoria ${categoria} e é da cor ${cor}`
);

// 7 - Spread operator | utilizado para despejar arrays em outro array ou
// adicionar valores de um objeto a outro
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [
    ...a1,
    ...a2
];

console.log(a3);

const a4 = [
    0, ...a1,
    4
];

console.log(a4);

const carName = {
    nome: "Gol"
};
const carBrand = {
    brand: "VW"
};
const otherInfos = {
    km: 10000,
    preco: 49000
};

const car = {
    ...carName,
    ...carBrand,
    ...otherInfos,
    wheels: 4
};

console.log(car);

// 8 - Classes | Modela objetos similares porém com valores diferentes de forma
// mais simples
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product("Camisa gola v", 20);

console.log(shirt.name);

console.log(shirt.productWithDiscount(50));
console.log(shirt.productWithDiscount(10));

const tenis = new Product("Tenis verde", 120);

console.log(tenis.name);

// 9 - Herança | utiliza a palavra 'extends' para estender as características de
// uma classe para outra. As variáveis da classe pai devem ser passadas
// utilizando a função 'super'
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price);
        this.colors = colors;
    }

    showColors() {
        console.log("As cores são:")
        this
            .colors
            .forEach((color) => {
                console.log(color);
            })
    }
}

const hat = new ProductWithAttributes(
    "Chapéu",
    29.99,
    ["Preto", "Azul", "Verde"]
);

console.log(hat.name);

console.log(hat.productWithDiscount(30));

hat.showColors();
