//time: 49.50


// 1A:
// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10

var palla = {
  "Nome": "palla",
  "Peso": 10
};

//stampa array generico
console.log(palla);
// con il for in si stampano le key(proprietà) ed il valore corrispondente palla[key]
for (var key in palla) {
  console.log(key + " :*" + palla[key] + "*");
}

//----------------------------
// 1B:
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
// 10:31 consegna

var nuovopeso = parseInt(prompt("Inserisci il nuovo peso"));


palla.Peso = nuovopeso;
// palla["Peso"] = nuovopeso  -   alternativa

//stampa array generico
console.log(palla);
// con il for in si stampano le key(proprietà) ed il valore corrispondente palla[key]
for (var key in palla) {
  console.log(key + " :*" + palla[key] + "*");
}

console.log(palla.Peso);
