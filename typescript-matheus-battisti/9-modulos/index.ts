// 1 - importação de arquivos
import importGreet from "./greet";

importGreet();

// 2 - importar e exportar variáveis
import { x } from './variable';
console.log(x);

// 3 - múltiplas importações
import { a, b, myFunction } from './multiple';
console.log(a);
console.log(b);
myFunction();

// 4 - alias de importações
import { someName as name } from './alias';
console.log(name);

// 5 - importar tudo
import * as numbers from './numbers';
console.log(numbers);
console.log(numbers.n1);
console.log(numbers.n2);
console.log(numbers.n3);

// 6 - importando tipos
import { Human } from "./myType";

class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
};

const paulo = new User('Paulo', 22);
console.log(paulo);