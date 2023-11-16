// Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande (almeno quattro cifre):
//  moltiplica il primo numero per 2 finche' non arriva ad essere maggiore del secondo numero.

let firstNum = parseInt(prompt('Inserisci un numero di 2 cifre'));
let secondNum = parseInt(prompt('Inserisci un numero di 4 cifre'));


     
if (firstNum <= secondNum){
    for (let i = firstNum; i <= secondNum; i = i * 2) {
        firstNum = i;
        
    }
    console.log("Il risultato è", firstNum);
} else {
   alert('Inserire dei numeri validi');
}