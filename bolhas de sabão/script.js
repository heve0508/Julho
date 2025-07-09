const container = document.getElementById('container');
const btn = document.getElementById('criarBolha');

btn.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    criarBolha();
  }
});

function criarBolha() {
  const bolha = document.createElement('div');
  bolha.classList.add('bolha');

  const size = Math.random() * 40 + 20; // 20px a 60px
  bolha.style.width = `${size}px`;
  bolha.style.height = `${size}px`;

  bolha.style.left = `${Math.random() * 100}%`;
  bolha.style.animationDuration = `${4 + Math.random() * 6}s`;

  container.appendChild(bolha);

  setTimeout(() => {
    bolha.remove();
  }, 5000);
}