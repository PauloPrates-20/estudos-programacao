var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1 - void
function semRetorno() {
    console.log("Esta função não tem retorno");
}
semRetorno();
// 2 - callback como argumento
function greeting(nome) {
    return "Ol\u00E1, ".concat(nome, "!");
}
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    var greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Paulo");
// 3 - funções genéricas
function primeiroElemento(arr) {
    return arr[0];
}
console.log(primeiroElemento([1, 2, 3]));
console.log(primeiroElemento(["a", "b", "c"]));
function mesclarObjetos(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var novoObjeto = mesclarObjetos({ nome: "Paulo" }, { idade: 30, profissao: "Vagabundo" });
console.log(novoObjeto);
// 4 - Constraints nas generic functions
function maior(a, b) {
    var maior;
    if (+a > +b) {
        maior = a;
    }
    else {
        maior = b;
    }
    return maior;
}
console.log(maior(1, 3));
console.log(maior(-3, 2));
console.log(maior("3", "5"));
// 5 - especificar tipo de argumento
function mesclarArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mesclarArrays([1, 2, 3], [4, 5, 6]));
console.log(mesclarArrays([1, 2, 3], ["teste", "testando"]));
// 6 - parâmetros opcionais
function modernGreeting(nome, greet) {
    if (greet) {
        return "Ol\u00E1, ".concat(greet, " ").concat(nome, ". Tudo bem?");
    }
    return "Ol\u00E1, ".concat(nome, ". Tudo bem?");
}
console.log(modernGreeting("Paulo"));
console.log(modernGreeting("Paulo", "Sr."));
// 7 - parâmetro default
function somaDefault(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
console.log(somaDefault(2));
console.log(somaDefault(2, 12));
// 8 - tipo unknow | semelhante ao tipo any, porém só permite a execução se houver uma validação de tipo
function fazerAlgo(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
fazerAlgo([1, 2, 3]);
fazerAlgo(5);
// 9 - tipo never | semelhante ao void porém mais utilizado para retornos de erros
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Algum Erro!");
// 10 - Rest Operator
function somarTodos() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (numero, soma) { return soma + numero; });
}
console.log(somarTodos(1, 2, 3, 4, 5));
console.log(somarTodos(5, 358, 20093));
// 11 - destructuring como parametro
function showProductDetails(_a) {
    var nome = _a.nome, preco = _a.preco;
    return "O nome do produto \u00E9 ".concat(nome, " e ele custa R$").concat(preco);
}
var camisa = { nome: "Camisa", preco: 49.99 };
console.log(showProductDetails(camisa));
