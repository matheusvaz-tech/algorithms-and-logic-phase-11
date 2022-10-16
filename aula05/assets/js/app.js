let items = [];

for (let item = 0; item < 10; item++) {
  items[item] = prompt(`Digite o ${item + 1}º item da lista:`);
}

alert(`Sua lista de compras está composta por:
${items.join(", ")}.`);
