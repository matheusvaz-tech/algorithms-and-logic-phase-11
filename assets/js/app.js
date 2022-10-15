let firstNumber = prompt("Digite o 1º número:");
let secondNumber = prompt("Digite o 2º número:");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const div = firstNumber / secondNumber;
const mul = firstNumber * secondNumber;
const res = firstNumber % secondNumber;

alert(`A soma dos números é: ${sum};
A subtração dos números é: ${sub};
A divisão dos números é: ${div};
A multiplicação dos números é: ${mul};
O resto da divisão dos números é: ${res}.`);
