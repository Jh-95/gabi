const audio = document.getElementById("musica");

if (audio) {
  audio.loop = true;
}

function tocarMusica() {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play().catch(() => {
    alert("Ative o som ou toque novamente para iniciar a música 🎵");
  });
}

function abrirSegredo() {
  const senha = prompt("Digite a senha 💖");

  if (senha === "hjtem") {
    document.getElementById("segredo").style.display = "block";
    const botaoInquete = document.getElementById("btn-inquete");
    if (botaoInquete) {
      botaoInquete.style.display = "inline-block";
    }
    const blocoEnquete = document.getElementById("enquete");
    if (blocoEnquete) {
      blocoEnquete.style.display = "grid";
    }
  } else {
    alert("Senha incorreta 😅 tenta de novo");
  }
}

function irParaInquete() {
  const blocoEnquete = document.getElementById("enquete");
  if (blocoEnquete) {
    blocoEnquete.style.display = "grid";
    blocoEnquete.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function enviarEnquete() {
  const selecionada = document.querySelector('input[name="resposta"]:checked');
  const resultado = document.getElementById("enquete-resultado");
  if (!selecionada) {
    alert("Escolha uma opção antes de enviar.");
    return;
  }
  const radios = document.querySelectorAll('input[name="resposta"]');
  radios.forEach(r => r.disabled = true);
  const botao = document.querySelector('.enquete-submit');
  if (botao) botao.disabled = true;
  if (resultado) {
    resultado.textContent = "Resposta registrada!";
  }
}
