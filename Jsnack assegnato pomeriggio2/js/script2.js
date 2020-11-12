//jsnack 2
// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
// //Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'}
];

arrayObj.forEach((element) => {
  console.log(`${element.name} is the name, is a ${element.type} and it's color is ${element.color}`);
});

console.log('_____________________________________________________________________________');
/* questo l'ho fatto ieri
arrayObj.forEach((element) => {
  var letteraRandom = String.fromCharCode(65 + getRandom(26));

  element.position = letteraRandom;
  console.log(`${element.name} is the name, is a ${element.type} and it's color is ${element.color} and it is stored in room ${element.position}`);
});
*/
//______________________________________________________________________________________________
//abbiamo detto a lezione che conviene creare un array vuoti e riempirlo con copie vere e non riferimenti degli oggetti e proprietà dentro all'array.

//abbiamo detto che map è simile ad  forEach ma si differenzia perchè ritorna un nuovo array
//da slide 268 prendiamo sintassi:
// var arrayNuovo = arrayObj.map((element) => { return 'qualcosa'(se c'è una condizione ma non c'è in questo caso);  return element; });
// var arrayNuovo = arrayObj.map((element) => {
//   return element;
// });
// console.log(arrayNuovo);
//abbiamo creato un nuovo array contenente tutti gli elementi del vecchio array che viene stampato senza bug

// a questo nuovo array devo aggiungere la proprietà con la lettera random
//var letterRandom = String.fromCharCode(65 + getRandom(26));

//________________________________inizialmente questa var l'avevo lasciata esterna e giustamente mi dava una lettera uguale a tutti gli oggetti. sistamento infilandola  nell'arrayNuovo

//per prima cosa rendo piu leggibile il codice creando una var con dentro la lettera casuale da associare ai vari oggetti, che verrà assegnata ciclo per ciclo dentro a MAP
//ora devo riempirlo con name type color e la nuova position
/*
var arrayNuovo = arrayObj.map((element) => {
  return {posizione: letterRandom};
  return element;
});
console.log(arrayNuovo);
NON FUNZIONA mi prende una volta il primo return poi mi dice che non accede al codice scritto dopo, devo provare a scrivere tutto in un unico return
*/
console.log('_________________________');
var arrayNuovo = arrayObj.map((element) => {
  var letterRandom = String.fromCharCode(65 + getRandom(26));

  return {...element, position: letterRandom};  //perso mezzora perchè fra element e position avevo messo ;
});
console.log(arrayNuovo);
console.log('_________________________');
arrayNuovo.forEach((element) => {
  console.log(`${element.name} is the name, is a ${element.type} and it's color is ${element.color} and the position is ${element.position}`);
});


//funzioni generiche:
//numeri random
function getRandom(max) {
  return Math.floor(Math.random() * max);
}
