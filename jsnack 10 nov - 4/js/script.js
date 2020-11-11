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

squadre.forEach((element) => {
  console.log(`${element.nome} ha totalizzato ${element.puntiFatti} punti e ha subito ${element.falliSubiti} falli`);
});
//_________________________________
console.log('_______________________________________________now we spread around some points and fouls___________________________________________________________');
//_____________________
//faccio il nuovo e apprezzato forEach
squadre.forEach((element) => {
  let puntiRandom = getRandom(100);
  let falliRandom = getRandom(100);
  element.puntiFatti = puntiRandom;
  element.falliSubiti = falliRandom;
  console.log(`${element.nome} made ${element.puntiFatti} points and got ${element.falliSubiti} fouls`);
});

console.log('____________________________lets order the teams by points_______________________________');

squadre.sort(function(a,b) {
  return b.puntiFatti - a.puntiFatti;
});
console.log("Classifica ordinata:");
squadre.forEach((element) => {
  console.log(`${element.nome} ha totalizzato ${element.puntiFatti} punti e ha subito ${element.falliSubiti} falli`);
});


//funzioni generiche:
//numeri random
function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}
