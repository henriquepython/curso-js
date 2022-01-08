const paragrafos = document.querySelector('.paragrafos');
//seleciona varios elementos pois o queryselector puro so pega um elemento e o all pega todos
const ps = paragrafos.querySelectorAll('p');

//pega todos os estilos
const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;
console.log(backgroundColorBody);

//colocando a cor do p com o mesmo do body
for(let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff'
}