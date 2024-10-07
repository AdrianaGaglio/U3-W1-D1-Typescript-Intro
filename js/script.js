"use strict";
class User {
    constructor(nome, cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.nome = nome;
        this.cognome = cognome;
    }
    ricarica(totRicarica) {
        this.credito += totRicarica;
    }
    chiamata(durata) {
        //inizio extra
        if (this.credito - durata * 0.2 < 0) {
            console.log("Impossibile effettuare la chiamata");
            return;
        }
        //fine extra
        this.credito -= durata * 0.2;
        this.numeroChiamate += 1;
    }
    chiama404() {
        return this.credito;
    }
    getNumeroChiamata() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const user = new User("Adriana", "Gaglio");
console.log(user);
user.ricarica(10);
console.log(user);
user.chiamata(5);
console.log(user);
user.chiamata(2);
user.chiamata(2);
user.chiamata(2);
user.chiamata(10);
user.chiamata(15);
user.chiamata(7);
user.chiamata(25);
console.log(user.chiama404());
console.log(user.getNumeroChiamata());
