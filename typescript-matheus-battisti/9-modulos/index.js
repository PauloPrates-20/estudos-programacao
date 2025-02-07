"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - importação de arquivos
var greet_1 = require("./greet");
(0, greet_1.default)();
// 2 - importar e exportar variáveis
var variable_1 = require("./variable");
console.log(variable_1.x);
// 3 - múltiplas importações
var multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
(0, multiple_1.myFunction)();
// 4 - alias de importações
var alias_1 = require("./alias");
console.log(alias_1.someName);
// 5 - importar tudo
var numbers = require("./numbers");
console.log(numbers);
console.log(numbers.n1);
console.log(numbers.n2);
console.log(numbers.n3);
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
;
var paulo = new User('Paulo', 22);
console.log(paulo);
