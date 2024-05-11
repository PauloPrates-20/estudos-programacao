// 15 - literal types
// permite colocar valores como tipos

let teste: "testando";

teste = "testando";

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direcao e ${direction}`);
}

showDirection("right");
// showDirection("top");
