/* Exercicio
    const e let */
const nome = 'joão Henrique';
const sobreNome = 'Batista';
const idade = 25;
const peso = 69;
const alturaEmM = 1.86;
let imc = peso/(alturaEmM**2);
let anoNascimento = 2021 - idade;

console.log(`Meu nome é ${nome} ${sobreNome}, tenho ${idade} anos, meu peso é ${peso} quilos,\n tenho ${alturaEmM} de altura, meu imc é ${imc.toFixed(2)} e nasci no ano de ${anoNascimento}`)