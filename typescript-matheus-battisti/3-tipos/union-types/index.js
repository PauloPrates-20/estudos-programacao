// 10 - Union type
// Determina dois ou mais tipos para a variável
// sintaxe variável: tipo1 | tipo2 | etc.
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(100);
showBalance("500");
var ARR_2 = [1, "teste", true];
console.log(ARR_2);
// 11 - Avancando em union types
// validacao de tipos
function showUserRole(role) {
    if (typeof (role) === "boolean") {
        return "Usuario nao aprovado";
    }
    return "A funcao do usuario e ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole("Gerente"));
