const form = document.getElementById('form-comparativo');
const campoA = parseFloat(document.getElementById('campo-a')).value;
const campoB = parseFloat(document.getElementById('campo-b')).value;

function validarValor(campoA, campoB){
    return campoB > campoA;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    formEValido = validarValor(campoA, campoB);
    const mensagemSucesso = "Tudo certo, inserção válida!"

    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        valorA.value = '';
        valorB.value = '';

    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.style.display = 'block';
        const containerMensagemErro = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'none';
    }
});