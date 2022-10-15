let number_1 = prompt("Digite o 1º número:");
let number_2 = prompt("Digite o 2º número:");

let sum = Number(number_1) + Number(number_2);
let sub = Number(number_1) - Number(number_2);
let div = Number(number_1) / Number(number_2);
let mul = Number(number_1) * Number(number_2);
let res = Number(number_1) % Number(number_2);

alert(`A soma dos números é: ${sum};
A subtração dos números é: ${sub};
A divisão dos números é: ${div};
A multiplicação dos números é: ${mul};
O resto da divisão dos números é: ${res}.`);
