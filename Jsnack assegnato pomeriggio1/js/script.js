//jsnack 1
//Partendo da un array semplice
//  2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente


const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const [one, two, three, four, five, six] = myArray;
console.log(one, two, three, four, five, six);


var unoPrompt = myArray.length - 2;
var duePrompt = myArray.length - 1;

var uno = parseInt(prompt("inserisci un numero fra 0 e " + unoPrompt + " !"));
var due = parseInt(prompt("inserisci un numero, maggiore del precedente, fra 1 e " + duePrompt + " !"));

console.log(uno);
console.log(due);

var due = due + 1;

const newArray = myArray.slice(uno, due);

console.log(newArray);
