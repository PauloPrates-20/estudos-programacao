// 1 - exemplo decorator como function
// pode trabalhar com argumentos especiais que são: target, propertyKey e descriptor
function myDecorator() {
  console.log('Iniciando o decorator');

  // target tem tipo any
  // propertyKey tem tipo string
  // descriptor tem tipo PropertyDescriptor
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('Executando decorator');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  }
}

class MyClass {
  name!: string;
  
  @myDecorator()
  testing() {
    console.log('Terminando execução do método');
  }
}

const myObj = new MyClass();
myObj.testing();

// 2 - múltiplos decorators
function a() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('executou a');
  }
}

function b() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('executou b');
  }
}

function c() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('executou c');
  }
}

class MultipleDecorators {
  @c()
  @a()
  @b()
  testing() {
    console.log('terminando execução do método');
  }
}

const multiple = new MultipleDecorators();
multiple.testing();

// 3 - class decorator
// está ligado ao contrutor da classe
// permite adicionar propriedades e métodos à classe
function classDec(constructor: Function) {
  console.log(constructor.name);
  if (constructor.name === 'User') {
    console.log('Criando usuário');
  }
}

@classDec
class User {
  name

  constructor(name: string) {
    this.name = name;
  }
}

const paulo = new User('Paulo');

// 4 - method decorator
// modifica a execução do método
// precisa ser colocado antes da declaração do método
// executa antes do método
function enumerable(value: boolean) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  }
}

class Machine {
  name

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(false)
  showName() {
    console.log(this);
    return `O nome da máquina é ${this.name}`;
  }
}

const trator = new Machine('Trator');

console.log(trator.showName());

// 5 - accessor decorator
// semelhante ao decorator de método
// serve apenas para getters e setters
class Monster {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`;
  }

  @enumerable(true)
  get showAge() {
    return `Idade do monstro: ${this.age}`;
  }
}

const charmander = new Monster('Charmander', 10);

console.log(charmander);

// 6 - property decorator
// é utilizada nas propriedades das classes
// permite ativar funções ao definir propriedades (i.e.: validações)
function formatNumber() {
  return function(target: Object, propertyKey: string) {
    let value: string;

    const getter = function() {
      return value;
    }

    const setter = function(newVal: string) {
      value = newVal.padStart(5, '0');
    }

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    });
  };
}

class ID {
  @formatNumber()
  id

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID('1');

console.log(newItem.id);

// 7 - exemplo real com class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

@createdDate
class Pen {
  id
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

const book = new Book(12);
const pen = new Pen(55);

console.log(book.createdAt);
console.log(pen.createdAt);

// 8 - exemplo real com method decorator
function checkIfUserPosted() {
  return function(target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
    const childFunction = descriptor.value;
    console.log(childFunction);
    descriptor.value = function(...args: any[]) {
      if(args[1] === true) {
        console.log('Usuário já postou');
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    }
    
    return descriptor;
  }

}

class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`)
  }
}

const newPost = new Post();
newPost.post('Meu primeiro post!', newPost.alreadyPosted);
newPost.post('Meu segundo post!', newPost.alreadyPosted);
newPost.post('Meu terceiro post!', newPost.alreadyPosted);

// 9 - exemplo real com property decorator
function max(limit: number) {
  return function(target: Object, propertyKey: string) {
    let value: string;

    const getter = function() {
      return value;
    }

    const setter = function(newVal: string) {
      if(newVal.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} dígitos`);
        return;
      } else {
        value = newVal;
      }
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    });
  };
}

class Admin {
  @max(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

const pedro = new Admin('pedroadmin12345');
const lee = new Admin('lee'); 