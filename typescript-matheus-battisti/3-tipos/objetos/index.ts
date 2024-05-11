// 7 - tipagem de objetos

function passCoordinates(coord: {x: number, y: number}) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}

const OBJ_COORD = {x: 329, y: 84.2};

passCoordinates(OBJ_COORD);
// passCoordinates([1, 2]);

const OBJ_PESSOA: {nome: string, sobrenome: string} = {nome: "Paulo", sobrenome: "Prates"};
// mais comum utilizar inferência para objetos
