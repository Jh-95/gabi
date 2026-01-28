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
  const r1 = document.querySelector('input[name="enq1"]:checked');
  const r2 = document.querySelector('input[name="enq2"]:checked');
  const r3 = document.querySelector('input[name="enq3"]:checked');
  const resultado = document.getElementById("enquete-resultado");

  if (!r1 || !r2 || !r3) {
    alert("Responda todas as perguntas antes de enviar.");
    return;
  }

  [
    ...document.querySelectorAll('input[name="enq1"]'),
    ...document.querySelectorAll('input[name="enq2"]'),
    ...document.querySelectorAll('input[name="enq3"]'),
  ].forEach(r => r.disabled = true);

  const botao = document.querySelector('.enquete-submit');
  if (botao) botao.disabled = true;

  if (resultado) {
    resultado.textContent = "Respostas registradas!";
  }
}
