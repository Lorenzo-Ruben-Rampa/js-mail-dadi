// Gioco dei dadi //
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

let numerocasuale1 = Math.floor(Math.random() * 6) +1;
console.log (numerocasuale1);

let numerocasuale2 = Math.floor(Math.random() * 6) +1;
console.log(numerocasuale2);

if (numerocasuale1 > numerocasuale2) {
    console.log("hai vinto");

} else if(numerocasuale1 == numerocasuale2) {

    console.log("pareggio");
} else {
    console.log("hai perso");
}