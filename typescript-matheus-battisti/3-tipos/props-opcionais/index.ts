// 8 - propriedades opcionais (utiliza uma interrogação)

function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a);
    console.log("B: " + b);
    if(c) {
        console.log("C: " + c);
    }
}

showNumbers(1, 2, 3);
showNumbers(4, 5);

// 9 - validando argumentos opcionais

function advancedGreeting(firstName: string, lastName?: string) {
    if(lastName !== undefined) {
       return console.log(`Olá ${firstName} ${lastName}. Tudo bem?`);
    } 

    return console.log(`Olá ${firstName}. Tudo bem?`);
}

advancedGreeting("Paulo", "Prates");
advancedGreeting("Paulo");
