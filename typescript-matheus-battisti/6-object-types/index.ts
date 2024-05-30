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

// 4 - Index Signature | utilizado quando não se sabe o nome das chaves mas os tipos são conhecidos
interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {x: 4};

coords.y = 15;

console.log(coords);

// coords.z = "teste"

// 5 - Extending Types | utilizado como herança para criar tipos mais complexos a partir de interfaces, através da instrução extends
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

// 6 - Intersection Types | Utiliza operado & para concatenar interfaces
interface Character {
  name: string,
}

interface Gun {
  type: string,
  caliber: Number
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12
};

console.log(arnold);
console.log(arnold.caliber)

// 7 - ReadOnly Array | aplica a propriedade somente leitura e tipa o array, os itens podem ser modificados mas
// o comprimento do array não
let myArray: ReadonlyArray<string> = ['maçã', 'laranja', 'banana'];

// myArray[3] = 'mamão';

console.log(myArray);

myArray.forEach(item => {
  console.log('Fruta: ' + item);
})

myArray = myArray.map(item => {
  return `Fruta: ${item}`
});

console.log(myArray);

// 8 - Tuplas | um array onde definimos o tamanho e o tipo dos elementos
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6]
// const mixedArray: fiveNumbers = [1, true, 'teste', 4, 5];

console.log(myNumberArray);

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ['Paulo', 20];

console.log(anotherUser[0]);

anotherUser[0] = 'João';
// anotherUser[1] = 'Paulo';

// 9 - Tuplas com readonly | similar às tuplas de python, tem tamanho e tipo restritos e são imutáveis
function showNumbers(numbers: readonly [number, number]) {
  numbers.forEach(number => {
    console.log(number);
  });
}

showNumbers([1, 2]);