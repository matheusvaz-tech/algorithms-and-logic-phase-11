alert("Iremos somar 2 números e dividi-los por 2");

let number_1 = prompt("Digite um número:");
let number_2 = prompt("Digite um outro número:");

number_1 = parseInt(number_1);
number_2 = parseInt(number_2);

total = (number_1 + number_2) / 2;

alert(
  `A soma do número ${number_1} com o número ${number_2} dividido por 2 é igual a ${total}.`
);
