//jsnack 1
//Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente


var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
console.log(myArray);

var unoPrompt = myArray.length - 2;
var duePrompt = myArray.length - 1;

//dato l'array di 6 elementi, le posizioni vanno da 0 a 5

//in var uno parto da 0 e arrivo a richiedere fino a 4 ( posizione 5 è la piu grande, cio renderebbe impossibile richiede un numero piu grande nel prompt successivo)
var uno = parseInt(prompt("inserisci un numero fra 0 e " + unoPrompt + " !"));

//in var due parto da 1 e arrivo a richiedere fino a 5 ( posizione 0 è la piu piccola, cio renderebbe impossibile la richiesta di un numero piu piccolo nel prompt precedente)
var due = parseInt(prompt("inserisci un numero fra 1 e " + duePrompt + " !"));

console.log(uno);
console.log(due);

var due = due + 1;

var newArray = myArray.slice(uno, due);

console.log(newArray);
