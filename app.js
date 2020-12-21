let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */

// Tableau 1:
let tableauExposant = tableauUn.map(x => x % x);
let tableauMultiplication = tableauUn.map(x => x * 10);
let tableauAjoutDivi = tableauUn.map(x => (x + 2) /22);

let tableauFiltre = tableauUn.map(x => x > 2);

console.log(tableauExposant);
console.log(tableauMultiplication);
console.log(tableauAjoutDivi);

console.log(tableauFiltre);

// Tableau 2:
let tableauLongueur = tableauDeux.map(x => x.length);
let tableauAddLongVal = tableauDeux.map (x => x + (x.length));
let tableauConca = tableauDeux.map (x => x + x);

console.log(tableauLongueur);
console.log(tableauAddLongVal);
console.log(tableauConca);


