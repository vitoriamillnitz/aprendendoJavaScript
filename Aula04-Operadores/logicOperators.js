// AND / OR / NOT

console.log("Vitoria foi parada em uma blitz");

const idadeVitoriaMillnitz = 18;
const vitoriaPossuiCNH = true;

console.log("Vitoria vai ser presa?", idadeVitoriaMillnitz >= 18 && !vitoriaPossuiCNH);

console.log("Vitoria foi para a balada e na entrada precisava mostrar documento");

const vitoriPossuiRG = true;
console.log("Vitoria levou seu RG? ", vitoriPossuiRG);

console.log("Vitoria é maior de idade?", idadeVitoriaMillnitz >= 18);

// OR
console.log("Vitoria conseguiu comprovar que é maior de idade?", vitoriPossuiRG === true|| vitoriaPossuiCNH === true);
console.log("Vitoria entrou na balada!");

// NOT
const gostaDeBeber = true;

const vitoriaGostaDeBeber = !gostaDeBeber;
console.log("Vitoria gosta de beber? ", vitoriaGostaDeBeber);