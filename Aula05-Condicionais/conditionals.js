const idadeVitoria = 16;
const maioridade = 18;

if (idadeVitoria >= 18) {
    console.log("Vitoria pode dirigir");
} else {
    const anosFaltantes = maioridade - idadeVitoria;
    console.log("Vitoria NÃO pode dirigir");
    console.log(`Faltam ${anosFaltantes} anos para Vitoria poder dirigir`);
}

// operadores ternários

idadeVitoria >= maioridade
    ? console.log("Vitoria pode dirigir")
    : console.log("Vitoria NÃO pode dirigir");

// 0 a 12 anos -> infãncia
// 13 a 17 anos -> adolescência
// 18 a 25 anos -> jovem adulto
// 26 a 60 anos -> adulto
// mais que 60 anos -> idoso

const idadePessoa = 61;

if (idadePessoa >= 0 && idadePessoa <= 12) {
    console.log("Infância");
} else if (idadePessoa >= 13 && idadePessoa <= 17) {
    console.log("Adolescência");
} else if (idadePessoa >= 18 && idadePessoa <= 25) {
    console.log("Jovem Adulto");
} else {
    console.log("Idoso");
}
