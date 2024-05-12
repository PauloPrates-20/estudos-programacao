// 1 - type guard | verificação de tipo com typeof retorna os tipos em strings
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            var soma_1 = arr.reduce(function (i, total) { return i + total; });
            console.log(soma_1);
        }
        else if (operacao === "mult") {
            var mult = arr.reduce(function (i, total) { return i * total; });
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
var Usuario = /** @class */ (function () {
    function Usuario(nome) {
        this.nome = nome;
    }
    return Usuario;
}());
var superUsuario = /** @class */ (function (_super) {
    __extends(superUsuario, _super);
    function superUsuario(nome) {
        return _super.call(this, nome) || this;
    }
    return superUsuario;
}(Usuario));
var victor = new Usuario("Victor");
var paulo = new superUsuario("Paulo");
console.log(victor);
console.log(paulo);
function greeting(usuario) {
    if (usuario instanceof superUsuario) {
        console.log("Ol\u00E1. ".concat(usuario.nome, ". Deseja acessar os dados do sistema?"));
    }
    else if (usuario instanceof Usuario) {
        console.log("Ol\u00E1, ".concat(usuario.nome));
    }
}
greeting(victor);
greeting(paulo);
// 4 - operador in || utilizado para checar se uma propriedade existe no objeto
var Cachorro = /** @class */ (function () {
    function Cachorro(nome, raca) {
        this.nome = nome;
        if (raca) {
            this.raca = raca;
        }
    }
    return Cachorro;
}());
var turca = new Cachorro("Turca");
var bob = new Cachorro("Bob", "Pastor Alemão");
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
