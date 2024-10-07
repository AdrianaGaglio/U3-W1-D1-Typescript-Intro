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

  chiamata(durata: number): void {
    //inizio extra
    if (this.credito - durata * 0.2 < 0) {
      console.log("Impossibile effettuare la chiamata");
      return;
    }
    //fine extra
    this.credito -= durata * 0.2;
    this.numeroChiamate += 1;
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
