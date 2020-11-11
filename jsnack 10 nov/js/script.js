// 1A:
// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10

var palla = {
  nome: 'palla',
  peso: 10
};

var {nome, peso} = palla;
console.log(nome, peso);

//----------------------------
// 1B:
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.


var nuovopeso = parseInt(prompt("Inserisci il nuovo peso"));

palla.peso = nuovopeso;

console.log(palla);
