// 1 - Interfaces | Utilizado para simplificar a tipagem de objetos
interface Produto {
  name: string,
  price: number,
  isAvailable: boolean
}

function showProductDeaitls(produto: Produto) {
  console.log(`O nome do produto é ${produto.name} e seu preço pe R$${produto.price}`);
  if(produto.isAvailable) {
    console.log("O produto está disponível");
  }
}

const shirt: Produto = {
  name: 'Camisa',
  price: 19.99,
  isAvailable: true
}

showProductDeaitls(shirt);
showProductDeaitls({name: "Tênis", price: 49.99, isAvailable: false});

// 2 - Propriedades opcionais em interfaces
interface User {
  email: string,
  role?: string
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o e-mail: ${user.email}`);

  if (user.role) {
    console.log(`A função do usuário é ${user.role}`);
  }
}

const u1: User = {email: "paulo@mail.com", role: "admin"}
const u2: User = {email: "joao@mail.com"}

showUserDetails(u1);
showUserDetails(u2);

// 3 - Propriedades readonly | cria valores somente leitura, ou seja, que só podem ser alterados uma vez, na criação do objeto
interface Car {
  brand: string
  readonly wheels: number
}

const fusca: Car = {
  brand: "VW",
  wheels: 4
}

console.log(fusca);

// fusca.wheels = 5

// Index Signature | utilizado quando não se sabe o nome das chaves mas os tipos são conhecidos
interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {x: 4};

coords.y = 15;

console.log(coords);

// coords.z = "teste"

// Extending Types | utilizado como herança para criar tipos mais complexos a partir de interfaces, através da instrução extends
interface Human {
  nome: string,
  age: Number
}

interface SuperHuman extends Human {
  superPowers: string[]
}

const humano: Human = {
  nome: "Paulo",
  age: 30
};

const goku: SuperHuman = {
  nome: "Goku",
  age: 50,
  superPowers: ["Kamehameha", "Genki Dama"]
};

console.log(goku);
console.log(goku.superPowers[1]);