const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

btnAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) return;

    EsconderCartaoSelecionado();

    cartaoAtual++;
    MostrarCartao();
});

btnVoltar.addEventListener('click', function () {
    if (cartaoAtual === 0) return;

    EsconderCartaoSelecionado();

    cartaoAtual--;
    MostrarCartao();
});

function MostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function EsconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.cartao.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}