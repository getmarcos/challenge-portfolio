const nameInput = document.querySelector('#nome');
const emailInput = document.querySelector('#e-mail');
const assuntoInput = document.querySelector('#assunto');
const mensagemInput = document.querySelector('#mensagem');
const submitButton = document.querySelector('#enviar');

const errorMessage = document.querySelector('.mensagem');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const assuntoValue = assuntoInput.value;
    const mensagemValue = mensagemInput.value;

    if (nameValue == '' || emailValue == '' || assuntoValue == '' || mensagemValue == '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.classList = 'erro';
    }

    setTimeout(() => {
        errorMessage.textContent = '';
        errorMessage.classList = '';
    }, 3000)
})