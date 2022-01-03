const pessoa = {
    nome: 'joao',
    sobrenome: 'batista',
    idade: 25,
    endereco: {
        rua: 'av.gracindo',
        numero: 249
    }
};

//atribuição via desestruturação(objetos)
const { nome, ...resto } = pessoa;

console.log(nome, resto);