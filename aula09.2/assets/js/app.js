// Trabalhando com objetos e funções

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 110,
    height: 183,
  },

  {
    name: "Alexandra",
    age: 28,
    weight: 72,
    height: 177,
  },

  {
    name: "Josivaldo",
    age: 35,
    weight: 94,
    height: 191,
  },
];

function printPatientIMC(patient) {
  alert(
    `O paciente ${patient.name} possui o IMC de ${(
      patient.weight /
      (patient.height / 100) ** 2
    ).toFixed(2)}`
  );
}

let count = 0;

for (let patient of patients) {
  printPatientIMC(patient);
}
