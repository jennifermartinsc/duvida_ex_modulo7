const form = document.getElementById('form-comparativo');
const campoA = parseFloat(document.getElementById('campo-a'));
const campoB = parseFloat(documnt.getElementById('campo-b'));

function validarValor(campoA, campoB){
    return campoB > campoA;
}

form.addEventListener('submit', function, (e) {
    e.preventDefault();

    formEValido = validarValor(campoA, campoB);

    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valorA.value = '';
        valorB.value = '';

    } else {
        campoA.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

if (!formEValido) {
    valorA.classlist.add('error');
    document.querySelector('.error-message').style.display = 'block';
} else {
    valorB.classList.add('success');
    valorA.classlist.remove('error');
    document.querySelector('.success-message').style.display = 'block';
};