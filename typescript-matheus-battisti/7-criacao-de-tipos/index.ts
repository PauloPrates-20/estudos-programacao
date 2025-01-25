// 1 - generics
function showData<T>(arg: T): string {
  return `O dado é ${arg}`;
}

console.log(showData('Testando generic'));
console.log(showData(5));
console.log(showData(true));
console.log(showData([]));

// 2 - constraints em generics
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é ${obj.name}`;
}

const myObj = { name: 'Porta', cor: 'Branca' };
const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: 'roupa' };

console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
// console.log(showProductName(thirdObj));

// 3 - interfaces com generics
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' };
const myPen: Pen = { name: 'Caneta BIC', wheels: false, engine: false, color: 'Azul' };

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K): string {
  return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
  hd: '2TB',
  ram: '32GB'
};

console.log(getSomeKey(server, 'ram'));
// console.log(getSomeKey(server, 'teste'));

// 5 - keyof type operator
type Character = { name: string, age: number, hasDriveLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, key: C): string {
  return `O nome do personagem é ${obj[key]}`;
}

const myChar: Character = {
  name: 'Paulo',
  age: 21,
  hasDriveLicense: false
};

console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));

// 6 - typeof type operator
const userName: string = 'Paulo';
const userName2: typeof userName = 'Willian';
// const userName3: typeof userName = 10;

type x = typeof userName;
const userName4: x = 'João';

// 7 - indexed access types
type Truck = { km: number, kg: number, description: string };
type Km = Truck['km'];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Caminhão para carga leve',
};

function showKm(km: Km) {
  console.log(`O veículo tem a km de ${km}`);
}

showKm(newTruck.km);

const newCar = {
  km: 5000,
  kg: 1000,
};

showKm(newCar.km);

// 8 - conditianl expressions type
interface A {

}

interface B extends A {

}

interface Teste {
  showName(): string;
}

type MyType = B extends A ? number : string;

const someVar: MyType = 5;
// const someVar2: MyType = 'teste';

type MyTypeB = Teste extends { showNumber(): number } ? number : string;
const someVar2: MyTypeB = 'Teste';

// 9 - template literals type
type TestA = 'text';

type CustomType = `some ${TestA}`;

const testing: CustomType = 'some text';

type A1 = 'Testando';
type A2 = 'Union';
type A3 = `${A1}` | `${A2}`;