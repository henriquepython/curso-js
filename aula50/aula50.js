/*
const conta = (...args) => {
  console.log(args);
};
conta('+', 1, 20, 30, 40, 50);
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, ,segundoNumero, ...resto] = numeros;

console.log(resto);

/*
function fucao([valor1,valor2,valor3]){
  console.log(valor1,valor2,valor3);
}
let array = ['g', 'j', 'm'];
fucao(array);
*/