// CONSEGNA:
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

var listaBici = [
  {
    "nome": "graziella",
    "peso": 34
  },
  {
    "nome": "mountain-bike",
    "peso": 74
  },
  {
    "nome": "bici-da-corsa",
    "peso": 23
  },
  {
    "nome": "ciclette",
    "peso": 8
  },
  {
    "nome": "bici-lego",
    "peso": 2
  }
];
//provo a stampare l'array con foreach
listaBici.forEach((element) => {
  console.log(`
    ${element.nome}'s weight is ${element.peso}
  `);
});


console.log('qua sotto stampo la bici col peso minore');

listaBici.sort(function (a, b) {
  return a.peso - b.peso
});

//USO DESTRUCTURING
const [primaBici] = listaBici;
console.log(primaBici);
