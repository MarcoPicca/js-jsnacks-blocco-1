// Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande (almeno quattro cifre):
//  moltiplica il primo numero per 2 finche' non arriva ad essere maggiore del secondo numero.

let firstNum = prompt('Inserisci un numero di 2 cifre');
let secondNum = prompt('Inserisci un numero di 4 cifre');


for (let i=firstNum; i < secondNum; i=i*2){
    firstNum = i;
    if (firstNum < secondNum){
        let finalNum = 0;
        finalNum = firstNum * 2;
        console.log(finalNum);
    } 
}