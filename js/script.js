const inputs = document.querySelectorAll('.contato__input')
const spans = document.querySelectorAll('.mensagem__erro');

const emailRegex = /^[A-Za-z0-9](([_.-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([.-]?[a-zA-Z0-9]+)*)([.][A-Za-z]{2,4})$/;

const submitButton = document.querySelector('.contato__botao');

inputs[0].addEventListener('input', validaNome);
inputs[1].addEventListener('input', validaEmail);
inputs[2].addEventListener('input', validaAssunto);
inputs[3].addEventListener('input', validaMensagem);

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    validaNome();
    validaEmail();
    validaAssunto();
    validaMensagem();
})

function setErro(index, span, mensgaem) {
    span.textContent = mensgaem
    span.classList = 'mensagem__erro erro';
    inputs[index].parentElement.style.borderBottom = '3px solid #e63636';
    inputs[index].previousElementSibling.color = '#e63636'
}

function removeErro(index, span) {
    span.textContent = ''
    span.classList = 'mensagem__erro erro';
    inputs[index].parentElement.style.borderBottom = '3px solid #2A7AE4';
    inputs[index].previousElementSibling.color = '#2A7AE4'
}

function validaNome() {
    if (inputs[0].value.trim().length > 50) {
        setErro(0, spans[0], 'Nome deve conter no máximo 50 caracteres.');
    } else if (inputs[0].value.trim() == '') {
        setErro(0, spans[0], 'Campo Nome é obrigatório.');
    } else {
        removeErro(0, spans[0]);
    }
}

function validaEmail() {
    if (inputs[1].value.trim() == '') {
        setErro(1, spans[1], 'Campo E-mail é obrigatório.')
    } else if (!emailRegex.test(inputs[1].value.trim())) {
        setErro(1, spans[1], 'Informe um endereço de e-mail válido.')
    } else {
        removeErro(1, spans[1]);
    }
}

function validaAssunto() {
    if (inputs[2].value.trim().length > 50) {
        setErro(2, spans[2], 'Assunto deve conter no máximo 50 caracteres.');
    } else if (inputs[2].value.trim() == '') {
        setErro(2, spans[2], 'Campo Assunto é obrigatório.');
    } else {
        removeErro(2, spans[2]);
    }
}

function validaMensagem() {
    if (inputs[3].value.trim().length > 300) {
        setErro(3, spans[3], 'Mensagem deve conter no máximo 300 caracteres.');
    } else if (inputs[3].value.trim() == '') {
        setErro(3, spans[3], 'Campo Mensagem é obrigatório.');
    } else {
        removeErro(3, spans[3]);
    }
}