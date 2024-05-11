// 1 - arrays
let numbers: number[] = [1, 2, 3, 4];

numbers.push(5);

console.log(numbers[2]);

// numbers = "Teste";

const NOMES: string[] = ["Paulo", "Algum outro"];

// NOMES.push(4);

// 2 - sintaxe alternativa para arrays

const NUMS: Array<number> = [100, 200, 300];

NUMS.push(400);

console.log(NUMS);

// NUMS.push("teste");

console.log(NUMS[1]);

// 3 - any

const ARRAY_1: any = [1, "teste", true, [], {nome: "paulo"}];

console.log(ARRAY_1);

ARRAY_1.push([1, 2, 3]);

// 4 - parametros tipados

function soma(a: number, b: number) {
    console.log(a + b);
}

soma(10, 2);
// soma("a", "b");

// 5 - retorno de funções

function greeting(nome: string): string {
    // return 5;
    return `Olá ${nome}`;
}

console.log(greeting("Paulo"));
// console.log(greeting(123));,

// 6 - funções anônimas

setTimeout(function() {
    const SALARY: number = 1000;

    // console.log(parseFloat(SALARY));

    // console.log(SALARY);
}, 2000);

// 7 - tipagem de objetos

function passCoordinates(coord: {x: number, y: number}) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}

const OBJ_COORD = {x: 329, y: 84.2};

passCoordinates(OBJ_COORD);
// passCoordinates([1, 2]);

const OBJ_PESSOA: {nome: string, sobrenome: string} = {nome: "Paulo", sobrenome: "Prates"};
// mais comum utilizar inferência para objetos

// 8 - propriedades opcionais (utiliza uma interrogação)

function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a);
    console.log("B: " + b);
    if(c) {
        console.log("C: " + c);
    }
}

showNumbers(1, 2, 3);
showNumbers(4, 5);

// 9 - validando argumentos opcionais

function advancedGreeting(firstName: string, lastName?: string) {
    if(lastName !== undefined) {
       return console.log(`Olá ${firstName} ${lastName}. Tudo bem?`);
    } 

    return console.log(`Olá ${firstName}. Tudo bem?`);
}

advancedGreeting("Paulo", "Prates");
advancedGreeting("Paulo");

// 10 - Union type
// Determina dois ou mais tipos para a variável
// sintaxe variável: tipo1 | tipo2 | etc.

function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`);
}

showBalance(100);
showBalance("500");

const ARR_2: Array<number | string | boolean> = [1, "teste", true];

console.log(ARR_2);

// 11 - Avancando em union types
// validacao de tipos

function showUserRole(role: boolean | string) {
    if(typeof(role) === "boolean") {
        return "Usuario nao aprovado";
    }

    return `A funcao do usuario e ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Gerente"));

// 12 - type alias
// permite criar um tipo e determinar o que ele verifica

type ID = string | number;

function showId(id: ID) {
    console.log(`O id e ${id}`);
}

showId(1);
showId("200");

// 13 - interfaces
// outra maneira de nomear tipos de objetos

interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}

const COORD_OBJ: Point = {x: 100, y: 200, z: 100.5};

showCoords(COORD_OBJ);

// 14 - type alias x interface
// interface pode ser alterada ao longo do codigo
// alias nao pode

interface Person {
    name: string
}

interface Person {
    age: number
}

const SOME_PERSON: Person = {name: "Paulo", age: 20};

console.log(SOME_PERSON);

type personType = {
    name: string
}

// type personType = {
//     age: number
// }

// 15 - literal types
// permite colocar valores como tipos

let teste: "testando";

teste = "testando";

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direcao e ${direction}`);
}

showDirection("right");
// showDirection("top");

// 16 - non-null assertion operator | caractere !

const P = document.getElementById("some-p");

console.log(P!.innerText);