let option;
let items = [];
let i = 0;

while (option !== 3) {
  option = Number(
    prompt(`Olá! Digite o número da opção desejada:

  1. Cadastrar um item na lista;
  2. Mostrar itens cadastrados;
  3. Sair do programa.`)
  );

  if (option === 1) {
    let item = prompt("Digite o nome do item:");
    items.push(item);
  } else if (option === 2) {
    if (items.length === 0) {
      alert("Não existe itens cadastrados.");
    } else {
      alert(`Sua lista de itens é: ${items.join(", ")}.`);
    }
  } else {
    alert("Tchau tchau! Volte sempre.");
    break;
  }
}
