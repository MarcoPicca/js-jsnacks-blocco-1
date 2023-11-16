// Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

let numeriDispari = document.querySelector('container');

let arrayNumeriDispari = [];

let firstNumber = parseInt(prompt('Inserisci il primo numero'));
let secondNumber = parseInt(prompt('Inserisci il secondo numero'));
let thirdNumber = parseInt(prompt('Inserisci il terzo numero'));
let fourthNumber = parseInt(prompt('Inserisci il quarto numero'));
let fifthNumber = parseInt(prompt('Inserisci il quinto numero'));
let sixthNumber = parseInt(prompt('Inserisci il sesto numero'));

if (firstNumber % 2 === 0){
    console.log('è pari');
} else {
    arrayNumeriDispari.push(firstNumber);
}

if (secondNumber % 2 === 0){
    console.log('è pari');
} else {
    arrayNumeriDispari.push(secondNumber);
}

if (thirdNumber % 2 === 0){
    console.log('è pari');
} else {
    arrayNumeriDispari.push(thirdNumber);
}

if (fourthNumber % 2 === 0){
    console.log('è pari');
} else {
    arrayNumeriDispari.push(fourthNumber);
}

if (fifthNumber % 2 === 0){
    console.log('è pari');
} else {
    arrayNumeriDispari.push(fifthNumber);
}

if (sixthNumber % 2 === 0){
    console.log('è pari');
} else {
    arrayNumeriDispari.push(sixthNumber);
}

console.log(arrayNumeriDispari);
document.getElementById("container").innerHTML = arrayNumeriDispari;

