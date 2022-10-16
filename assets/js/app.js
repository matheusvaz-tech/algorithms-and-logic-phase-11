let value = 0;
let valueRandom = Number((Math.random() * 10).toFixed(0));
let i = 0;

console.log(valueRandom);

do {
  i += 1;

  value = Number(
    prompt("Adivinhe o número no qual estou pensando? Ele está entre 0 e 10.")
  );

  if (value === valueRandom) {
    alert(`Parabéns! Você adivinhou o número em ${i} tentativas.`);
    break;
  } else {
    alert("Erro! Tente novamente!");
  }
} while (value !== valueRandom);
