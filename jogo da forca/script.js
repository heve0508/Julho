const palavras = [
    'BABYMONSTER',
    'AHYEON',
    'HOT SAUCE',
    'GHOST',
    'CHIQUITA',
    'RAMI',
    'LOVE IN MY HEART',
    'BILLIONAIRE',
    'RORA',
    'WOKE UP IN TOKYO',
    'ASA',
    'PHARITA',
    'SHEESH',
    'DRIP',
    'RUKA'
];
let palavraSecreta = '';
let letrasCorretas = [];
let letrasErradas = [];
let tentativasRestantes = 6;
const palavraEl = document.getElementById("palavra");
const letrasEl = document.getElementById("letras");
const tentativasEl = document.getElementById("tentativas");
const entrada = document.getElementById("entrada");
const mensagem = document.getElementById("mensagem");
const continuarBtn = document.getElementById("continuar");

const partes = [
    document.querySelector(".cabeca"),
    document.querySelector(".tronco"),
    document.querySelector(".braco-esq"),
    document.querySelector(".braco-dir"),
    document.querySelector(".perna-esq"),
    document.querySelector(".perna-dir"),
];

function sortearPalavra() {
    const index = Math.floor(Math.random() * palavras.length);
    return palavras[index];
}

function iniciarJogo() {
    palavraSecreta = sortearPalavra();
    letrasCorretas = [];
    letrasErradas = [];
    tentativasRestantes = 6;
    entrada.disabled = false;
    entrada.focus();
    mensagem.textContent = '';
    atualizarTela();
}

function atualizarTela() {
    palavraEl.textContent = palavraSecreta
        .split('')
        .map(letra => (letrasCorretas.includes(letra) ? letra : '-'))
        .join('');

    letrasEl.textContent = letrasErradas.join(', ');
    tentativasEl.textContent = tentativasRestantes;

    partes.forEach((parte, index) => {
        parte.style.display = index < letrasErradas.length ? 'block' : 'none';
    });

    if (!palavraEl.textContent.includes('-')) {
        mensagem.textContent = '🎉 Você venceu!';
        entrada.disabled = true;
    }

    if (tentativasRestantes <= 0) {
        mensagem.textContent = `💀 Você perdeu! A palavra era ${palavraSecreta}`;
        entrada.disabled = true;
    }
}

entrada.addEventListener("input", () => {
    const letra = entrada.value.toUpperCase();
    entrada.value = '';

    // Validação da letra
    if (!letra.match(/[A-Z]/) || letra.length !== 1 ||
        letrasCorretas.includes(letra) || letrasErradas.includes(letra)) {
        return;
    }

    if (palavraSecreta.includes(letra)) {
        letrasCorretas.push(letra);
    } else {
        letrasErradas.push(letra);
        tentativasRestantes--;
    }

    atualizarTela();
});

continuarBtn.addEventListener("click", iniciarJogo);

// Inicia o jogo ao carregar a página
iniciarJogo();