const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

cartoes.forEach(cartao => {
    console.log(cartao);
    cartao.addEventListener('click', function () {
        const cartaVirada = cartao.querySelector('.carta-virada');

        //virar o cartão
        cartao.classList.toggle('virar');
        //mostrar o fundo da carta
        cartaVirada.classList.toggle('mostrar-fundo-carta');

        const descricao = cartao.querySelector('.descricao');
        descricao.classList.toggle('esconder');
    });
})

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