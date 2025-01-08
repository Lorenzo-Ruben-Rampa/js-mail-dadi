// Mail //
// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito 
// del controllo, utilizzando un ciclo for.

let listaEmail = ["Lorenzo@gmail.com", "Angelica@gmail.com", "Roberto@gmail.com", "Enrica@gmail.com"];
let email = prompt("Inserisci la tua email");
let presente = false;

for (let i = 0; i < listaEmail.lenght; i++) {
    if (email === listaEmail[i]) {
        presente = true;
    }    
}

if (presente) {
    console.log("Puoi entrare");
} else {
    console.log("Non puoi entrare");
}