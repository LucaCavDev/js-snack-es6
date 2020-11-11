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

console.log(arrayObj);



//devo creare una copia del primo array. se faccio il classico var newarray = oldarray, in console log vengono richiamati gli oggetti del primo console loge, quindi mi posizionerebbe la "posizione" anche nel primo arrayObj

//devo dunque copiare si il primo array, ma nell'array copiato devo copiare singolarmente i contenuti rendendo il nuovo array effettivamente slegato dal primo

//creo un nuovo array vuoto
var newArray = [];

//faccio un ciclo lungo quanto l'array che voglio copiare
for (var i = 0; i < arrayObj.length; i++) {

  //Aggiungo ogni ciclo un nuovo oggetto con dentro la proprietà position al quale assegno una lettera casuale...

  var letteraRandom = String.fromCharCode(97+Math.floor(Math.random() * 26));// al posto del 97 mettere 65 se si volgiono le lettere maiuscole
  newArray.push({position: letteraRandom});

  //infine copio le key dell'array vecchio dentro quello nuovo
  for (var key in arrayObj[i]) {
    newArray[i][key] = arrayObj[i][key];
  }
}

//metto in ordine alfabetico le key nel nuovo array, ma si vedono in ordine alfabetico solo se apro i vari oggetti nel console.log(), se no restano con position primo, che è il primo che ho inserito nel nuovo array e poi gli altri che ho copiato ciclandoli dall'arrayvecchio
newArray.sort(function(a, b) {
  return a.distance - b.distance;
});
console.log(newArray);


//funzioni generiche:
//numeri random
function getRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}
