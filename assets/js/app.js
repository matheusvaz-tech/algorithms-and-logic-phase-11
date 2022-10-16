let student = prompt("Qual é o seu nome?");

let grade_1 = prompt("Qual foi sua a nota dna 1ª prova do bimestre?");
let grade_2 = prompt("E qual foi a 2ª nota?");
let grade_3 = prompt("E a 3ª?");

grade_1 = Number(grade_1);
grade_2 = Number(grade_2);
grade_3 = Number(grade_3);

let average = (grade_1 + grade_2 + grade_3) / 3;

if (average >= 7) {
  alert(
    `Parabéns pelo seu empenho, ${student}. Você foi aprovado com a média ${average.toFixed(
      2
    )}.`
  );
} else {
  alert(
    `Infelizmente você não passou direto, ${student}. Sua média foi ${average.toFixed(
      2
    )}, mas com esforço e dedicação você se sairá bem no exame de recuperação.`
  );
}
