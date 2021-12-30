const numero = Number(prompt('Digite um numero'));

const numerop = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const raiz = numero ** (1/2);
const inter = Number.isInteger(numero);
const notan = Number.isNaN(numero);
const prabaix = Math.floor(numero);
const pracim = Math.ceil(numero);
const twocasas = numero.toFixed(2);

numerop.innerHTML = numero

texto.innerHTML = `<p>Raiz quadrada: ${raiz}.</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${inter}.</p>`
texto.innerHTML += `<p>É NaN: ${notan}.</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${prabaix}.</p>`
texto.innerHTML += `<p>Arredondando para cima: ${pracim}.</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${twocasas}.</p>`

