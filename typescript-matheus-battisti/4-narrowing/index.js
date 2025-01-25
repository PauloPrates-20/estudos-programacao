"use strict";
// 1 - type guard | verificação de tipo com typeof retorna os tipos em strings
function soma(a, b) {
    if (typeof (a) === "string" && typeof (b) === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof (a) === "number" && typeof (b) === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma!");
    }
}
soma("32", "34");
soma(32, 33);
soma("32", 7);
// 2 - checando se o valor existe
function operacoes(arr, operacao) {
    if (operacao) {
        if (operacao === "soma") {
            const soma = arr.reduce((i, total) => i + total);
            console.log(soma);
        }
        else if (operacao === "mult") {
            const mult = arr.reduce((i, total) => i * total);
            console.log(mult);
        }
    }
    else {
        console.log("Por favor, defina a operação!");
    }
}
operacoes([1, 2, 3]);
operacoes([
    1, 2, 3
], "soma");
operacoes([
    1, 3, 4
], "mult");
// 3 - instance of || verifica se o dado pertence a uma determinada classe,
// servindo até para classes personalizadas
class Usuario {
    constructor(nome) {
        this.nome = nome;
    }
}
class superUsuario extends Usuario {
    constructor(nome) {
        super(nome);
    }
}
const victor = new Usuario("Victor");
const paulo = new superUsuario("Paulo");
console.log(victor);
console.log(paulo);
function greeting(usuario) {
    if (usuario instanceof superUsuario) {
        console.log(`Olá. ${usuario.nome}. Deseja acessar os dados do sistema?`);
    }
    else if (usuario instanceof Usuario) {
        console.log(`Olá, ${usuario.nome}`);
    }
}
greeting(victor);
greeting(paulo);
// 4 - operador in || utilizado para checar se uma propriedade existe no objeto
class Cachorro {
    constructor(nome, raca) {
        this.nome = nome;
        if (raca) {
            this.raca = raca;
        }
    }
}
const turca = new Cachorro("Turca");
const bob = new Cachorro("Bob", "Pastor Alemão");
function mostrarDetalhes(cachorro) {
    if ("raca" in cachorro) {
        console.log("O cachorro é da raça " + cachorro.raca);
    }
    else {
        console.log("O cachorro não é de raça");
    }
}
mostrarDetalhes(turca);
mostrarDetalhes(bob);
// desafio 3
function review(nota) {
    if (typeof nota === "number") {
        switch (nota) {
            case 1:
                console.log("Muito Ruim");
                break;
            case 2:
                console.log("Ruim");
                break;
            case 3:
                console.log("Razoável");
                break;
            case 4:
                console.log("Bom");
                break;
            case 5:
                console.log("Muito Bom");
                break;
        }
    }
    else {
        console.log("Não avaliado");
    }
}
review(1);
review(2);
review(3);
review(4);
review(false);
