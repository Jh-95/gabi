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

  if (senha === "3011") {
    document.getElementById("segredo").style.display = "block";
  } else {
    alert("Senha incorreta 😅 tenta de novo");
  }
}
