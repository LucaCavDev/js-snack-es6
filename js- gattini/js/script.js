//stampare in un div questo array con gli oggetti in colonna, dove si vede gattino colorato e nome in ogni riga
//poi sotto stampare femmine a sinistra e maschi a destra mostrando anche il fiocchetto
//poi sotto stampare di nuovo tutti assieme ma prima femmine poi maschi e con il fiocchetto
//abbiamo gia la struttura in html e css che non tocchiamo



/*
icone:
<i class="fas fa-cat" style="color:......"></i>
<i class="fas fa-ribbon" style="color:.....; filter: opacity(....);"> </i>
nome gatto
*/

//abbiamo dei gattini
const cats = [
  {
    name: 'Adam',
    age: 0.3,
    color: '#00ffff',
    gender: 'male'
  },
  {
    name: 'Emily',
    age: 0.8,
    color: '#f700ff',
    gender: 'female'
  },
  {
    name: 'Willoby',
    age: 1.3,
    color: '#ff6600',
    gender: 'male'
  },
  {
    name: 'Poppy',
    age : 0.2,
    color: '#00ff00',
    gender: 'female'
  }
];
console.log('stampa base dell array iniziale', cats);
console.log('______________________________________________________________________________________');
//1-------- step stampare i gattini in fila(verticale) nel 'container'  utilizzando forEach e TemplateLiteral
//1:50:15
//outputUno è la costante che andrò a stampare ducumentetct è dove poi vaddo a stampare, nel div con id container
const outputUno = document.getElementById("container");

//forma base del foreach dove stampo gli elementi dell'array in consoleLog
cats.forEach((element) => {console.log('stampa basilare dei singoli elementi dell array cats', element);});
console.log('______________________________________________________________________________________');

//ciclando il forEach devo crearmi ogni volta un div con dentro il nome del gatto e l'icona, a ogni cliclo mi salvo nel riferimento outputUno un nuovo div connome gatto e icona
cats.forEach((element) => {
  //devo crearmi una variabile interna allo scope
  //in questa variabile dovrò mettere a ogni ciclo un div con dentro nome e icona del singolo elemento
  //questo div creato deve andare dentro una variabile interna allo scope, che ogni ciclo
  //innerHTML perchè va in html
  let contenuto = outputUno.innerHTML; //quindi da vuoto va dentro un div poi un altro etc
  //conenuto viene incrementato e diventa outputUno che va in innerHTML
  //console.log(contenuto);//debug per vedere ciò che è presente in ogni ciclo

  outputUno.innerHTML = //qua dentro usiamo il template literal e ci mettiamo letteralmente quello che ho messo in let contenuto, ovvero prima è vuoto, poi 1 div col primo gatto, poi 2 div etc + il nuovo div con dentro appunto l'icona del gatto e il nome del gatto
  // si usa element.color e element.name per estrapolare il nome e il colore dello specifico gatto di ogni ciclo
  `${contenuto}
  <div>
    <i class="fas fa-cat" style="color:${element.color}"></i>
    ${element.name}
  </div>`
});
//fine 2.00.00
console.log('______________________________________________________________________________________');

//2:09:00 mettiamo un fiocco colorato ad ogni gattino,
//base rosa femmine
//base blue maschi,
//il fiocco deve essere più chiaro se più giovane più scuro se più vecchio
//creaiamo solo dati ma output facciam dopo divisi
//colori base
const pink = '#ff00e6';
const blue = '#0084ff';
//usiamo map per creare nuovo array con aggiunta prop ribbon {color, opacity} [..rest/destructuring opTernario]
// opacity sarà in base all'age [age*100]

//ok dunque dobbiamo fare una copia dell'array iniziale dove ad ogni oggetto, oltre alle proprietà name age gender color si aggiunge ribbon che a sua volta ha come proprietà color e opaciy
//nuovo array  = array vecchio copiato con .map e arrowfunction
var ribbonCats = cats.map((element) =>{//per ogni elemento,
  return { //ritornami
    ...element, //TUTTI GLI ELEMENTI DI CATS (... è lo spread operator )
    ribbon: { //a ogni elemento gli aggiungo la proprietà ribbon alla quale poi assegnole proprietà color e opacity
      //se il genere è female, sarà color: pink ( che è '#ff00e6')
      //color: if (element.gender === 'female') {pink} else {blue}
      color: element.gender === "female" ? pink : blue, //operatore ternario. sintassi alternativa ad if else.   se ci sono gli else if è scomodo
      opacity: element.age * 100
    }
  }
  /* in alternatia potevo usare una variabile d'appoggio. un passaggio in piu ma forse piu chiaro
  let item = {
    ...element,
    ribbon: {color: element.gender === "female" ? pink : blue}
  return item
  }
  */
} );
console.log(cats, ribbonCats); //vediamo che ribbonCats ha la propruetà ribbon e funziona
console.log('______________________________________________________________________________________');
//USO FILTER
// dividiamoli per sesso [2 nuovi array con filter]
//creo un array di gatti femmine, partendo da array ribbon, fare filter e mettere la condizione che gender sia female
const femaleCats = ribbonCats.filter((element) => element.gender === 'female');
console.log(femaleCats);
//copia incolla per i maleCats
const maleCats = ribbonCats.filter((element) => element.gender === 'male');
console.log(maleCats);

// adesso stampo nei due div gia pronti in css
//iniziamo con i female, poi copio incollo per i male
const femaleContainer = document.getElementById('female');
const maleContainer = document.getElementById('male');
//uso stessa logica del primo div.    copio incollo ma si potrebbe fare anche tramite funzioni

femaleCats.forEach((element) => {
  let contenuto = femaleContainer.innerHTML;
  femaleContainer.innerHTML = ` ${contenuto}
    <div>
      <i class="fas fa-cat" style="color:${element.color}"></i>
      <i class="fas fa-ribbon" style="color:${element.ribbon.color}; filter: opacity(${element.ribbon.opacity}%);"> </i>
      ${element.name}
    </div>
  `
});

maleCats.forEach((element) => {
  let contenuto = maleContainer.innerHTML;
  maleContainer.innerHTML = ` ${contenuto}
    <div>
      <i class="fas fa-cat" style="color:${element.color}"></i>
      <i class="fas fa-ribbon" style="color:${element.ribbon.color}; filter: opacity(${element.ribbon.opacity}%);"> </i>
      ${element.name}
    </div>
  `
});
//ps % mi serve dal punto di vista del css.       il css ha bisogno del simbolo percentuale perchè il numero che io ricavo (age*100) per dare opacity va visto in percentuale
console.log('______________________________________________________________________________________');

//creiamo una versione [nuovo arr] con prima femmine poi maschi [spread-rest]
const ordCats = [...femaleCats,...maleCats];    //si fa una copia superficiale degli array (le proprietà vengono copiate solo in riferimento)

// console.log('ordCats: ', ordCats);


// ne facciamo output in 'container-new'
const containerNew = document.getElementById('container-new');
// stampiamo tutti i gattini in fila
ordCats.forEach((element) => {
  let contenuto = containerNew.innerHTML;
  containerNew.innerHTML = ` ${contenuto}
    <div>
      <i class="fas fa-cat" style="color:${element.color}"></i>
      <i class="fas fa-ribbon" style="color:${element.ribbon.color}; filter: opacity(${element.ribbon.opacity}%);"> </i>
      ${element.name}
    </div>
  `
});



//altro array con obj di soli ribbon and name [destructuring in map]
const propCats = ribbonCats.map((element) => {
  let {name, ribbon} = element;
  let myobj =  {
    name,
    ribbon
  }
   return myobj
});

console.log(propCats);

//DOMANDE DA FARE
//nel primo div, quando faccio il forEach per stampare i gatti faccio il console log di let contenuto, mi aspetto di vedere in console log ultimo output i 4 gatti ma ne stampa in console solo 3. come mai?
