// 17 - tipo bigInt | não padronizado, necessita alterar as configurações do ts para a versão mínima de ES2020

let n: bigint;

n = 1000n;


console.log(n);
console.log(typeof(n));
console.log(n + 100n);