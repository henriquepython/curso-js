

function meuEscopo () {
    
    let form = document.getElementById('form'); 
    let resultado = document.getElementById('resultado');

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const peso = document.getElementById('peso');
        const altura = document.getElementById('altura');
        const imc = peso.value / (altura.value ** 2);
        if (imc < 18.5) {
            resultado.innerHTML = `<p>Seu imc é ${imc.toFixed(2)} e esta abaixo do peso!</p>`;
        } else if ((imc > 18.5) && (imc <24.9)){
            resultado.innerHTML = `<p>Seu imc é ${imc.toFixed(2)} e esta no peso normal!</p>`;
        } else if ((imc > 25) && (imc <29.9)){
            resultado.innerHTML = `<p>Seu imc é ${imc.toFixed(2)} e esta com sobrepeso!</p>`;
        } else if ((imc > 30) && (imc <34.9)){
            resultado.innerHTML = `<p>Seu imc é ${imc.toFixed(2)} e esta com obesidade grau 1!</p>`;
        } else if ((imc > 35) && (imc <39.9)){
            resultado.innerHTML = `<p>Seu imc é ${imc.toFixed(2)} e esta com obesidade grau 2!</p>`;
        } else if (imc > 40){
            resultado.innerHTML = `<p>Seu imc é ${imc.toFixed(2)} e esta com obesidade grau 3!</p>`;
        } else {
            resultado.innerHTML = `<p>Seu imc é desconhecido</p>`;
        }
        console.log(imc.toFixed(2));
    }


    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();


function meuEscopo () {
    
    let form = document.getElementById('form'); 
    let resultado = document.getElementById('resultado');

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const peso = document.getElementById('peso');
        const altura = document.getElementById('altura');
        const imc = peso.value / (altura.value ** 2);
        if (imc < 18.5) {
            resultado.innerHTML = `<p>Seu imc é ${imc.toFixed(2)} e esta abaixo do peso!</p>`;
        } else if ((imc > 18.5) && (imc <24.9)){
            resultado.innerHTML = `<p>Seu imc é ${imc.toFixed(2)} e esta no peso normal!</p>`;
        } else if ((imc > 25) && (imc <29.9)){
            resultado.innerHTML = `<p>Seu imc é ${imc.toFixed(2)} e esta com sobrepeso!</p>`;
        } else if ((imc > 30) && (imc <34.9)){
            resultado.innerHTML = `<p>Seu imc é ${imc.toFixed(2)} e esta com obesidade grau 1!</p>`;
        } else if ((imc > 35) && (imc <39.9)){
            resultado.innerHTML = `<p>Seu imc é ${imc.toFixed(2)} e esta com obesidade grau 2!</p>`;
        } else if (imc > 40){
            resultado.innerHTML = `<p>Seu imc é ${imc.toFixed(2)} e esta com obesidade grau 3!</p>`;
        } else {
            resultado.innerHTML = `<p>Seu imc é desconhecido</p>`;
        }
        console.log(imc.toFixed(2));
    }


    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();
