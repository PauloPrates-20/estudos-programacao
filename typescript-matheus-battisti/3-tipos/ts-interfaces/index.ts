// 13 - interfaces
// outra maneira de nomear tipos de objetos

interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}

const COORD_OBJ: Point = {x: 100, y: 200, z: 100.5};

showCoords(COORD_OBJ);

// 14 - type alias x interface
// interface pode ser alterada ao longo do codigo
// alias nao pode

interface Person {
    name: string
}

interface Person {
    age: number
}

const SOME_PERSON: Person = {name: "Paulo", age: 20};

console.log(SOME_PERSON);

type personType = {
    name: string
}

// type personType = {
//     age: number
// }
