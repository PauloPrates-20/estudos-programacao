// 1 - void
function semRetorno(): void {
  console.log("Esta função não tem retorno");
}

semRetorno();

// 2 - callback como argumento
function greeting(nome: string): string {
  return `Olá, ${nome}!`;
}

function preGreeting(f: (nome: string) => string, userName: string) {
  console.log("Preparando a função!");

  const greet = f(userName);

  console.log(greet);
}

preGreeting(greeting, "Paulo");

// 3 - funções genéricas
function primeiroElemento<T>(arr: T[]): T {
  return arr[0];
}

console.log(primeiroElemento([1, 2, 3]));
console.log(primeiroElemento(["a", "b", "c"]));

function mesclarObjetos<T, U>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2
  }
}

const novoObjeto = mesclarObjetos({nome: "Paulo"}, {idade: 30, profissao: "Vagabundo"});

console.log(novoObjeto);

// 4 - Constraints nas generic functions
function maior<T extends number | string>(a: T, b: T): T {
  let maior: T;

  if(+a > +b) {
    maior = a;
  } else {
    maior = b;
  }

  return maior;
}

console.log(maior(1, 3));
console.log(maior(-3, 2));
console.log(maior("3", "5"));

// 5 - especificar tipo de argumento
function mesclarArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mesclarArrays([1, 2, 3], [4, 5, 6]));
console.log(mesclarArrays<number | string>([1, 2, 3], ["teste", "testando"]));

// 6 - parâmetros opcionais
function modernGreeting(nome: string, greet?: string): string {
  if (greet) {
    return `Olá, ${greet} ${nome}. Tudo bem?`
  }

  return `Olá, ${nome}. Tudo bem?`;
}

console.log(modernGreeting("Paulo"));
console.log(modernGreeting("Paulo", "Sr."));

// 7 - parâmetro default
function somaDefault(n: number, m = 10): number {
  return n + m;
}

console.log(somaDefault(2));
console.log(somaDefault(2, 12));

// 8 - tipo unknow | semelhante ao tipo any, porém só permite a execução se houver uma validação de tipo
function fazerAlgo(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === "number") {
    console.log("X é um número");
  }
}

fazerAlgo([1, 2, 3]);
fazerAlgo(5);

// 9 - tipo never | semelhante ao void porém mais utilizado para retornos de erros
function showErrorMessage(msg: string): never {
  throw new Error(msg);
}

// showErrorMessage("Algum Erro!");

// 10 - Rest Operator
function somarTodos(...n: number[]): number {
  return n.reduce((numero, soma) => soma + numero);
}

console.log(somarTodos(1, 2, 3, 4, 5));
console.log(somarTodos(5, 358, 20093));

// 11 - destructuring como parametro

function showProductDetails({nome, preco}: {nome: string, preco: number}): string {
  return `O nome do produto é ${nome} e ele custa R$${preco}`;
}
const camisa = {nome: "Camisa", preco: 49.99}

console.log(showProductDetails(camisa));