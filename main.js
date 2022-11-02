// Ciao ragazzi,
// Esercizio di oggi: Griglia Campo Minato
// nome repo: js-campominato-grid
// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno:  :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.


//  PARTE 2 

// Consegna
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS:
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

const griglia = document.getElementById("griglia");

const bottone = document.getElementById("btnHtml");

let display = document.getElementById("displayHTML");

let arrayBombe = [];

let sommaPunteggio = 0;

let giocoFinito = false;

for (let k = 0; k < 16; k++) {
    let funcNumRandom = numeroRandomPC(0, 64);
    arrayBombe.push(funcNumRandom);
}

console.log(arrayBombe)

bottone.addEventListener('click', function () {

    for (let i = 1; i <= 64; i++) {
        let elementoCorrente = quadrati(i);

        elementoCorrente.addEventListener('click', function () {
            if (!giocoFinito) {
                

                let valoreELemento = parseInt(this.innerText);

                if (arrayBombe.includes(valoreELemento)) {
                    console.log("bomba");
                    this.classList.add("bomba");
                    display.innerHTML = (`Hai calpestato una bomba! Il tuo punteggio: ${sommaPunteggio}`);
                    giocoFinito = true;
                } else {
                    if (!this.classList.contains("active")) {
                        this.classList.add('active');
                        console.log("niente bomba");
                        sommaPunteggio++;
                        display.innerHTML = (`Il tuo punteggio è ${parseInt(sommaPunteggio)}`);
                    }
                }
            }
        })
        elementoCorrente.innerHTML = i;
        elementoCorrente.classList.add("text-center", "align-items-center");
        griglia.append(elementoCorrente);

    }



}, { once: true });


console.log(sommaPunteggio);



// FUNZIONI 


function quadrati(num) {
    const div = document.createElement("div");
    div.classList.add("quadrato");
    div.innerHTML = num;
    return div;
}

function numeroRandomPC(min, max) {

    let numeroRandom = Math.floor(Math.random() * (max - min + min)) + min;

    return numeroRandom;
}






