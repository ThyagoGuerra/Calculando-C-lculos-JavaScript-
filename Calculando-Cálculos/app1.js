const formula = document.querySelector('#formulario');
const num1 = document.querySelector('input#num1');
const num2 = document.querySelector('input#num2');
const resu = document.querySelector('#resultado');

formula.addEventListener('submit', function (event) {
    event.preventDefault();

    const valor1 = Number(num1.value);
    const valor2 = Number(num2.value);

    resu.innerHTML = '';

    resu.innerHTML += `A soma dos valores é: ${valor1 + valor2} <br>`;
    resu.innerHTML += `A subtração dos valores é: ${valor1 - valor2} <br>`;
    resu.innerHTML += `A multiplicação dos valores é: ${valor1 * valor2} <br>`;
    resu.innerHTML += `A divisão dos valores é: ${valor1 / valor2} <br>`;
});