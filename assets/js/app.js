// Forma 1 de resolver o problema

// let value = 0;
// const randomValue = Number(Math.round(Math.random() * 10));
// let i = 0;

// console.log(randomValue);

// do {
//   i += 1;

//   value = Number(
//     prompt("Adivinhe o número no qual estou pensando? Ele está entre 0 e 10.")
//   );

//   if (value === randomValue) {
//     alert(`Parabéns! Você adivinhou o número em ${i} tentativas.`);
//     break;
//   } else {
//     alert("Erro! Tente novamente!");
//   }
// } while (value !== randomValue);

// Forma 2 de resolver o problema

let result = prompt(
  "Adivinhe o número no qual estou pensando? Ele está entre 0 e 10."
);

const randomNumber = Math.round(Math.random() * 10);

let x = 1;

while (Number(result) !== randomNumber) {
  result = prompt("Erro! Tente novamente!");
  x++;
}

alert(
  `Parabéns! O número que pensei foi o ${randomNumber} e você adivinhou em ${x} tentativas.`
);
