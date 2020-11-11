// CONSEGNA:
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

var squadre = [
  {
    "nome": "Milan",
    "puntiFatti": 0,
    "falliSubiti": 0
  },
  {
    "nome": "Inter",
    "puntiFatti": 0,
    "falliSubiti": 0
  },
  {
    "nome": "Juventus",
    "puntiFatti": 0,
    "falliSubiti": 0
  },
  {
    "nome": "Barcellona",
    "puntiFatti": 0,
    "falliSubiti": 0
  },
  {
    "nome": "Foggia",
    "puntiFatti": 0,
    "falliSubiti": 0
  }
];
console.log(squadre);  //mi aspettavo uscisse tutto 0, ma console log mi prende la variabile aggiornata. per stampare l'array con tutto 0 0 0  avrei dovuto stamparla in html


// STEP”:
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
// consegna 12.25

for (var i = 0; i < squadre.length; i++) {

  var puntiRandom = getRandom(100);
  var falliRandom = getRandom(100);
  // var puntiRandom = Math.floor(Math.random() * 100 + 1);
  // var falliRandom = Math.floor(Math.random() * 100 + 1);

  squadre[i].puntiFatti = puntiRandom;
  squadre[i].falliSubiti = falliRandom;
}

console.log(squadre);


squadre.sort(function(a,b) {
  return b.puntiFatti - a.puntiFatti;
});
console.log("Classifica ordinata:", squadre);


//funzioni generiche:
//numeri random
function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}
