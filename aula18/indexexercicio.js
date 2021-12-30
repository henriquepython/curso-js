/*const pessoal = {
    nome: 'joao',
    sobrenome: 'batista',
    idade: 25
};

console.log(pessoal.nome);*/
/* 
function criaPessoa(nome, sobrenome, idade) {
    return{
        nome,
        sobrenome,
        idade
    };
}

const pessoa = criaPessoa('joao', 'batista', 25)

console.log(pessoa.nome)
*/
//this referencia algo dentro do bloco do objeto ou função em questão
const pessoal = {
    nome: 'joao',
    sobrenome: 'batista',
    idade: 25,

    fala() {
        console.log(`Ola mundo ${this.nome}`)
    }

};

pessoal.fala()