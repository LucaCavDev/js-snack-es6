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




const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'}
];

arrayObj.forEach((element) => {
  console.log(`${element.name} is the name, is a ${element.type} and it's color is ${element.color}`);
});

console.log('_____________________________________________________________________________');

arrayObj.forEach((element) => {
  var letteraRandom = String.fromCharCode(65+Math.floor(Math.random() * 26));

  element.position = letteraRandom;
  console.log(`${element.name} is the name, is a ${element.type} and it's color is ${element.color} and it is stored in room ${element.position}`);
});

//funzioni generiche:
//numeri random
function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}
