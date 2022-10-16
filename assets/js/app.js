let itens = [];

for (let i = 0; i <= 9; i++) {
  itens[i] = prompt(`Digite o ${i + 1}º item da lista:`);
}

alert(`Sua lista de compras está composta por: ${itens.join(", ")}.`);
