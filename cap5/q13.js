let secreto = Math.floor(Math.random() * 101);
let tentativas = 10;

for (let i = 1; i <= tentativas; i++) {
  let palpite = Number(prompt(`Tentativa ${i}/10: Digite seu palpite:`));

  if (palpite === secreto) {
    console.log("Você acertou! O número era:", secreto);
    break;
  } else if (palpite > secreto) {
    console.log("Muito alto! Tente um número menor.");
  } else {
    console.log("Muito baixo! Tente um número maior.");
  }

  if (i === 10) {
    console.log("Fim das tentativas, beta! O número era:", secreto);
  }
}