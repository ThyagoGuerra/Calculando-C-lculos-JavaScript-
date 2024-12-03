const form = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('input#txtname').value.trim();
    const sobrenome = document.querySelector('input#txtsobre').value.trim();
    const email = document.querySelector('input#txtemail').value.trim();
    const senha = document.querySelector('input#txtpassword').value.trim();

    resultado.innerHTML = '';

    if (!name || !sobrenome || !email || !senha) {
        resultado.innerHTML = `Cadastro incompleto!`;
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        resultado.innerHTML = `Digite um email válido!`;
        return;
    }

    if (senha.length < 6) {
        resultado.innerHTML = `No minimo a senha precisa ter 6 caracteres!`;
        return;
    }

    resultado.style.background = 'green';
    resultado.style.color = 'white';
    resultado.style.padding = '10px';
    resultado.style.borderRadius = '10px';
    resultado.innerHTML = `Cadastro realizado`;
});