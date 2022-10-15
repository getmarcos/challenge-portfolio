const inputs = document.querySelectorAll('.contato__input');
const nomesInputs = ["Nome", "E-mail", "Assunto", "Mensagem"];
const spans = document.querySelectorAll('.mensagem__erro');

const emailRegex = /^[A-Za-z0-9](([_.-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([.-]?[a-zA-Z0-9]+)*)([.][A-Za-z]{2,4})$/;

const submitButton = document.querySelector('.contato__botao');

inputs[0].addEventListener('input', () => {
    if (inputs[0].value.trim().length > 50) {
        setErro(0, spans[0], 'Nome deve conter no máximo 50 caracteres.');
    } else if (inputs[0].value == '') {
        setErro(0, spans[0], `Campo ${nomesInputs[0]} é obrigatório.`);
    } else {
        removeErro(0, spans[0]);
    }
});

inputs[1].addEventListener('input', () => {
    if (inputs[1].value == '') {
        setErro(1, spans[1], `Campo ${nomesInputs[1]} é obrigatório.`);
    } else if (!emailRegex.test(inputs[1].value.trim())) {
        setErro(1, spans[1], 'Informe um endereço de e-mail válido.');
    } else {
        removeErro(1, spans[1]);
    }
});

inputs[2].addEventListener('input', () => {
    if (inputs[2].value.trim().length > 50) {
        setErro(2, spans[2], 'Assunto deve conter no máximo 50 caracteres.');
    } else if (inputs[2].value == '') {
        setErro(2, spans[2], `Campo ${nomesInputs[2]} é obrigatório.`);
    } else {
        removeErro(2, spans[2]);
    }
});

inputs[3].addEventListener('input', () => {
    if (inputs[3].value.trim().length > 300) {
        setErro(3, spans[3], 'Mensagem deve conter no máximo 300 caracteres.');
    } else if (inputs[3].value == '') {
        setErro(3, spans[3], `Campo ${nomesInputs[3]} é obrigatório.`);
    } else {
        removeErro(3, spans[3]);
    }
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == ""){
            setErro(i, spans[i], `Campo ${nomesInputs[i]} é obrigatório.`);
        }
    }
})

function setErro(index, span, mensagem) {
    span.textContent = mensagem;
    span.classList = 'mensagem__erro erro';
    inputs[index].parentElement.style.borderBottom = '3px solid #e63636';
    inputs[index].previousElementSibling.color = '#e63636';
}

function removeErro(index, span) {
    span.textContent = '';
    span.classList = 'mensagem__erro erro';
    inputs[index].parentElement.style.borderBottom = '3px solid #2A7AE4';
    inputs[index].previousElementSibling.color = '#2A7AE4';
}