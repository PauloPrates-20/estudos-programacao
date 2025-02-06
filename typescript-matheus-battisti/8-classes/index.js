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
// 1 - campos em classe
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
;
var paulo = new User();
paulo.name = "Paulo";
paulo.age = 21;
console.log(paulo);
// 2 - constructors
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
;
var willian = new NewUser("Willian", 13);
console.log(willian);
var pedro = new NewUser("Pedro", 24);
// 3 - campos readonly nas classes
var Car = /** @class */ (function () {
    function Car(name) {
        this.wheels = 4;
        this.name = name;
    }
    return Car;
}());
;
var fusca = new Car('Fusca');
console.log(fusca);
fusca.name = 'Fusca Turbo';
// Não altera propriedade readonly
// fusca.wheels = 2;
// 4 - herança e super
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    return Machine;
}());
;
var trator = new Machine('Trator');
var KillerMachine = /** @class */ (function (_super) {
    __extends(KillerMachine, _super);
    function KillerMachine(name, weapons) {
        var _this = _super.call(this, name) || this;
        _this.weapons = weapons;
        return _this;
    }
    return KillerMachine;
}(Machine));
;
var destroyer = new KillerMachine('Destroyer', 4);
console.log(trator, destroyer);
// 5 - métodos
var Dwarf = /** @class */ (function () {
    function Dwarf(name) {
        this.name = name;
    }
    Dwarf.prototype.greeting = function () {
        console.log("Hey, Stranger!");
    };
    return Dwarf;
}());
;
var jimmy = new Dwarf('Jimmy');
console.log(jimmy);
jimmy.greeting;
// 6 - this
var Truck = /** @class */ (function () {
    function Truck(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    Truck.prototype.showDetails = function () {
        console.log("Caminh\u00E3o do modelo ".concat(this.model, " que tem ").concat(this.hp, " cavalos de pot\u00EAncia."));
    };
    return Truck;
}());
;
var volvo = new Truck('Volvo', 400);
var scania = new Truck('Scania', 600);
volvo.showDetails();
scania.showDetails();
// 7 - getters
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        // getters são definidos com a palavra reservada 'get' e precisam retornar valores
        get: function () {
            return this.name + ' ' + this.surname;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
;
var pauloPrates = new Person('Paulo', 'Prates');
// getters devem ser chamados como uma propriedade não como um método
console.log(pauloPrates.fullName);
// 8 - setters
var Coords = /** @class */ (function () {
    function Coords() {
    }
    Object.defineProperty(Coords.prototype, "fillX", {
        set: function (x) {
            if (x === 0) {
                return;
            }
            this.x = x;
            console.log('x inserido com sucesso');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "fillY", {
        set: function (y) {
            if (y === 0) {
                return;
            }
            this.y = y;
            console.log('y inserido com sucesso');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "getCoords", {
        get: function () {
            return "X: ".concat(this.x, " Y: ").concat(this.y);
        },
        enumerable: false,
        configurable: true
    });
    return Coords;
}());
;
var myCoords = new Coords();
myCoords.fillX = 2;
myCoords.fillY = 0;
myCoords.fillY = 10;
console.log(myCoords.getCoords);
