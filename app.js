let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
let bebeDiv = document.createElement('div');
document.body.appendChild(bebeDiv);

// Tableau 1:
let tableauExposant = tableauUn.map(x => x ** x);
bebeDiv.innerHTML += tableauExposant + "<br>";

let tableauMultiplication = tableauUn.map(x => x * 10);
bebeDiv.innerHTML += tableauMultiplication + "<br>";

let tableauAjoutDivi = tableauUn.map(x => (x + 2) /21);
bebeDiv.innerHTML += tableauAjoutDivi + "<br>";

let tableauFiltreSup2 = tableauUn.filter(x => x > 2);
bebeDiv.innerHTML += tableauFiltreSup2 + "<br>";

let tableauFiltreDiv = tableauUn.filter(x => 0 === (x % 2));
bebeDiv.innerHTML += tableauFiltreDiv + "<br>";

let tableauFiltreMul3 = tableauUn.filter(x => (x * 3) > 10);
bebeDiv.innerHTML += tableauFiltreMul3 + "<br>";

// Tableau 2:
let bebeDiv2 = document.createElement('div');
document.body.appendChild(bebeDiv2);

let tableauLongueur = tableauDeux.map(x => x.length);
bebeDiv.innerHTML += tableauLongueur + "<br>";

let tableauAddLongVal = tableauDeux.map (x => x + (x.length));
bebeDiv.innerHTML += tableauAddLongVal + "<br>";

let tableauConca = tableauDeux.map (x => x + x);
bebeDiv.innerHTML += tableauConca+ "<br>";

let tableauLongSup2 = tableauDeux.filter( x => x.length > (2 + 2));
bebeDiv.innerHTML += tableauLongSup2 + "<br>";

let tableauDiv2 = tableauDeux.filter( x => 0 === (x.length % 2) );
bebeDiv.innerHTML += tableauDiv2 + "<br>";

let tableauLongMin = tableauDeux.filter( x => (x.length - 3) > 10 );
bebeDiv.innerHTML += tableauLongMin + "<br>";

