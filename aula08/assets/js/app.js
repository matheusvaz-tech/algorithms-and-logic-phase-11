// Trabalhando com objetos

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 110,
    height: 1.83,
  },

  {
    name: "Alexandra",
    age: 28,
    weight: 72,
    height: 1.77,
  },

  {
    name: "Josivaldo",
    age: 35,
    weight: 94,
    height: 1.91,
  },
];

let patientsNames = [];

// for... of

let text = "";

for (let patient of patients) {
  text += `${patient.name} que tem ${patient.age} anos, pesa ${
    patient.weight
  }kg e tem ${String(patient.height).replace(".", ",")}m de altura.\n`;
}

alert(`Os pacientes são:\n
${text}`);
