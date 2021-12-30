/*
function saudacao(nome) {
    return `Bom dia ${nome}`
}

const variavel = saudacao('Luiz')

console.log(variavel)
*/

function soma(x, y) {
    const resultado =x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

const mostra = document.getElementById('tela');

mostra.innerHTML = soma(2, 2)