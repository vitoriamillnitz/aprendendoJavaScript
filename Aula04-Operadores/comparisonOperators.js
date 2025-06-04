const idadeVitoria = 24;
const idadeGabriel = 25;

console.log("Vitoria é mais velha que Gabriel? ", idadeVitoria > idadeGabriel);
console.log("Gabriel é mais velho que Vitória? ", idadeGabriel > idadeVitoria);

const maioridade = 18;

console.log("Vitoria é maior de idade? ", idadeVitoria >= maioridade);

const x = 10;
const y = 20;
const z = "10";

console.log("O número " + x + " é igual ao número " + y, x === y);
console.log("O número " + x + " é igual ao número " + z, x == z); // operador de igualdade frouxo
console.log("O número " + x + " é igual ao número " + z, x === z); // operador de igualdade estrito

console.log("O número " + x + " é diferente do número " + y, x !== y);
console.log("O número " + x + " é diferente do número " + z, x !== z); // operador de desigualdade estrito
console.log("O número " + x + " é diferente do número " + z, x != z); // operador de desigualdade frouxo

// Sempre optar pelos operadores ESTRITOS quando for tratar de igual e desigualdade