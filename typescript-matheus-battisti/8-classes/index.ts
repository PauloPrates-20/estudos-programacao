// 1 - campos em classe
class User {
  name!: string;
  age!: number;
};

const paulo = new User();

paulo.name = "Paulo";
paulo.age = 21;

console.log(paulo);

// 2 - constructors
class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
};

const willian = new NewUser("Willian", 13);

console.log(willian);

const pedro = new NewUser("Pedro", 24);

// 3 - campos readonly nas classes
class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
};

const fusca = new Car('Fusca');

console.log(fusca);

fusca.name = 'Fusca Turbo';
// Não altera propriedade readonly
// fusca.wheels = 2;

// 4 - herança e super
class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
};

const trator = new Machine('Trator');

class KillerMachine extends Machine {
  weapons;

  constructor(name: string, weapons: number) {
    super(name);
    this.weapons = weapons;
  }
};

const destroyer = new KillerMachine('Destroyer', 4);

console.log(trator, destroyer);

// 5 - métodos
class Dwarf {
  name;

  constructor(name: string) {
    this.name = name
  }

  greeting() {
    console.log("Hey, Stranger!");
  }
};

const jimmy = new Dwarf('Jimmy');

console.log(jimmy);
jimmy.greeting;

// 6 - this
class Truck {
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(`Caminhão do modelo ${this.model} que tem ${this.hp} cavalos de potência.`);
  }
};

const volvo = new Truck('Volvo', 400);
const scania = new Truck('Scania', 600);

volvo.showDetails();
scania.showDetails();

// 7 - getters
class Person {
  name;
  surname;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  // getters são definidos com a palavra reservada 'get' e precisam retornar valores
  get fullName(): string {
    return this.name + ' ' + this.surname;
  }
};

const pauloPrates = new Person('Paulo', 'Prates');
// getters devem ser chamados como uma propriedade não como um método
console.log(pauloPrates.fullName);

// 8 - setters
class Coords {
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }

    this.x = x;
    console.log('x inserido com sucesso')
  }

  set fillY(y: number) {
    if (y === 0) {
      return;
    }

    this.y = y;
    console.log('y inserido com sucesso')
  }

  get getCoords() {
    return `X: ${this.x} Y: ${this.y}`
  }
};

const myCoords = new Coords();
myCoords.fillX = 2;
myCoords.fillY = 0;
myCoords.fillY = 10;
console.log(myCoords.getCoords);

// 9 - herança de interfaces (implements)
interface showTitle {
  itemTitle(): string;
}

class BlogPosts implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle() {
    return `O título do post é ${this.title}`;
  }
};

const myPost = new BlogPosts('My post');
console.log(myPost.itemTitle());

class TestingInterface implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle() {
    return `O título é ${this.title}`;
  }
}

// 10 - override de métodos
// uma técnica utilizada para substituir um método herdado por uma classe
// Basta criar um método com o mesmo nome na classe filha
class Base {
  someMethod() {
    console.log('Alguma coisa');
  }
};

class Nova extends Base {
  someMethod() {
    console.log('Testando outra coisa');
  }
}

const myObject = new Nova();
myObject.someMethod();

// 11 - visibilidade
// 11.1 - public
class C {
  public x = 10;
};

class D extends C {

};

const cInstance = new C();
const dInstance = new D();

console.log(cInstance.x);
console.log(dInstance.x);


// 11.2 - protected
class E {
  protected x = 10;


};

class F extends E {
  get getX() {
    return this.x;
  }
}

// Propriedades protected só podem ser acessadas por métodos dentro da classe e das subclasses
const eInstance = new E();
const fInstace = new F();
console.log(fInstace.getX);

// 11.3 - private
// propriedades e métodos private só podem ser acessadas por métodos dentro da classe que as definiu
class PrivateClass {
  private name = 'Private';

  get getName() {
    return this.name;
  }

  private privateMethod() {
    console.log('Método privado');
  }

  showPrivateMethod() {
    this.privateMethod();
  }
};

// Não pode acessar o método privado
// class TestePrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod();
//   }
// };

const pObj = new PrivateClass();

console.log(pObj.getName);
pObj.showPrivateMethod();

// const testeObj = new TestePrivate();


