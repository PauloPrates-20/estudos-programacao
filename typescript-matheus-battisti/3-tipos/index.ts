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

console.log(ARR_2)