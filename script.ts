interface Smartphone {
  credito: number;
  numeroChiamate: number;

  // aggiunge credito, prende il parametro del credito
  ricarica(credito: number): void;

  // aggiorna il credito residuo in base ai minuti trascorsi in chiamata
  chiamata(numeroChiamate: number): void;

  // ritorna il credito disponibile
  chiama404(): number;

  getNumeroChiamata(): number;

  azzeraChiamate(): void;
}

class User implements Smartphone {
  nome: string;
  cognome: string;

  credito: number = 0;
  numeroChiamate: number = 0;

  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
  }

  ricarica(totRicarica: number): void {
    this.credito += totRicarica;
  }

  chiamata(numeroChiamate: number): void {
    this.credito -= numeroChiamate * 0.2;
  }

  chiama404(): number {
    return this.credito;
  }

  getNumeroChiamata(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
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
