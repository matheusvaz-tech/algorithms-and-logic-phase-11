let option;
let items = [];
let i = 0;

// Switch... case

while (option !== 3) {
  option = Number(
    prompt(`Olá! Digite o número da opção desejada:

  1. Cadastrar um item na lista;
  2. Mostrar itens cadastrados;
  3. Sair do programa.`)
  );

  switch (option) {
    case 1:
      let item = prompt("Digite o nome do item:");
      items.push(item);
      break;

    case 2:
      if (items.length === 0) {
        alert("Não existem itens cadastrados.");
      } else {
        alert(`Sua lista de itens é: ${items.join(", ")}.`);
      }
      break;

    default:
      alert("Tchau tchau! Volte sempre.");
  }
}
