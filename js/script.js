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
    chiamata(numeroChiamate) {
        this.credito -= numeroChiamate * 0.2;
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
console.log("stato iniziale => ", user);
user.ricarica(10);
console.log("ricarica di 10 => ", user);
user.numeroChiamate = 5;
console.log("Minuti in chiamata", user.getNumeroChiamata());
user.chiamata(user.numeroChiamate);
console.log("Credito dopo chiamata di 5 minuti => ", user.chiama404());
user.azzeraChiamate();
console.log("Stato sim aggiornato", user);
