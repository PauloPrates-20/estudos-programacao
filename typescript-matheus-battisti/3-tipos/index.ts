// 1 - arrays
let numbers: number[] = [1, 2, 3, 4];

numbers.push(5);

console.log(numbers[2]);

// numbers = "Teste";

const NOMES : string[] = ["Paulo", "Algum outro"];

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

// 7 - propriedades tipadas

function passCoordinates(coord: {x: number, y: number}) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}

const OBJ_COORD = {x: 329, y: 84.2};

passCoordinates(OBJ_COORD);
// passCoordinates([1, 2]);

const OBJ_PESSOA: {nome: string, sobrenome: string} = {nome: "Paulo", sobrenome: "Prates"};
// mais comum utilizar inferência para objetos

