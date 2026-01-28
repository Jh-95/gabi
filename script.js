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
  } else {
    alert("Senha incorreta 😅 tenta de novo");
  }
}

function irParaInquete() {
  const link = "https://forms.gle/SEU_LINK_AQUI";
  window.open(link, "_blank");
}
