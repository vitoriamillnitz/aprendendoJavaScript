const fichaDaVi = {
    nome: "Vitoria",
    idade: 24,
    profissao: "programadora",
    temFilhos: false,
};

console.log('Ficha da Vi:', fichaDaVi);

console.log('Nome: ' +fichaDaVi.nome);

fichaDaVi.carro = "TCross";

console.log('Ficha Da Vi', fichaDaVi);

delete fichaDaVi.carro;

console.log('Ficha da Vi', fichaDaVi);

console.log('Nome: ' + fichaDaVi.nome)
