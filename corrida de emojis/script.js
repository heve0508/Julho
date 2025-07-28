const emoji1 = document.getElementById('emoji1');
const emoji2 = document.getElementById('emoji2');
const resultado = document.getElementById('resultado');
const resultadoAposta = document.getElementById('resultado-aposta');
const apostaAtual = document.getElementById('aposta-atual');
const btnCorrida = document.getElementById('btn-corrida');
const btnApostarTartaruga = document.getElementById('apostar-tartaruga');
const btnApostarCoelho = document.getElementById('apostar-coelho');

let pos1 = 0;
let pos2 = 0;
let corridaAtiva = false;
let apostaEscolhida = null;

function fazerAposta(emoji) {
    if (corridaAtiva) return;

    apostaEscolhida = emoji;

    btnApostarTartaruga.classList.remove('selecionado');
    btnApostarCoelho.classList.remove('selecionado');

    if (emoji === 'emoji1') {
        btnApostarTartaruga.classList.add('selecionado');
        apostaAtual.textContent = 'Você apostou na Tartaruga! 🐢';
    } else {
        btnApostarCoelho.classList.add('selecionado');
        apostaAtual.textContent = 'Você apostou no Coelho! 🐇';
    }

    btnCorrida.disabled = false;

    resultado.textContent = '';
    resultadoAposta.textContent = '';
}
function comecarCorrida() {
    if (corridaAtiva || !apostaEscolhida) return;

    corridaAtiva = true;
    pos1 = 0;
    pos2 = 0;
    emoji1.style.left = '0px';
    emoji2.style.left = '0px';
    resultado.textContent = '';
    resultadoAposta.textContent = '';

    btnCorrida.disabled = true;
    btnApostarTartaruga.disabled = true;
    btnApostarCoelho.disabled = true;
    const intervalo = setInterval(() => {

    pos1 += Math.random() * 10;
    pos2 += Math.random() * 10;
    emoji1.style.left = `${pos1}px`;
    emoji2.style.left = `${pos2}px`;

    if (pos1 >= 700 || pos2 >= 700) {
      clearInterval(intervalo);
      corridaAtiva = false;

      const vencedorAleatorio = Math.random() < 0.5 ? 'emoji1' : 'emoji2';

      let vencedorTexto;
      letapostouCerto = false;

      if ( vencedorAleatorio === 'emoji1') {
        resultado.textContent = "🏆🐢 Tartaruga venceu a corrida!🏆"
        vencedorTexto = 'Tartaruga';
        apostouCerto = apostaEscolhida === 'emoji1';
      } else {
        resultado.textContent = "🏆🐇 Coelho venceu a corrida! 🏆";
        vencedorTexto = 'Coelho';
        apostouCerto = apostaEscolhida === 'emoji2';
      }

      setTimeout (() => {
        if (apostouCerto) {
            resultadoAposta.textContent = '🎊 Parabéns! você ganhou a aposta!🎊';
            resultadoAposta.className = 'ganhou';

        } else {
            resultadoAposta.textContent = '😢 Que pena! Você perdeu a aposta. Tente Novamente!';
            resultadoAposta.className = 'perdeu';
        }


        btnApostarTartaruga.disabled = false;
        btnApostarCoelho.disabled = false;

        setTimeout(() => {
            btnApostarTartaruga.classList.remove('selecionado');
            btnApostarCoelho.classList.remove('selecionado');
            apostaEscolhida = null;
            apostaAtual.textContent = '';
            btnCorrida,disabled = true;
        }, 3000);
    }, 1000);
}
    }, 100);
}