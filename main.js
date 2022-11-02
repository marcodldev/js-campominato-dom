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

const griglia = document.getElementById("griglia");

const bottone = document.getElementById("btnHtml");

bottone.addEventListener('click', function() {

    for (let i = 0; i < 64; i++) {
        let elementoCorrente = quadrati(i);

        elementoCorrente.addEventListener('click', function () {
            this.classList.toggle('active');
        })

        elementoCorrente.innerHTML = i;
        elementoCorrente.classList.add("text-center","align-items-center");


        griglia.append(elementoCorrente);
    }

}, {once : true});

function quadrati(num) {
    const div = document.createElement("div");
    div.classList.add("quadrato");
    div.innerHTML = num;
    return div;
}






