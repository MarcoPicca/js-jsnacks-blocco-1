// Inserisci un <h1> al centro della pagina con un numero randomico all'interno e un bottone sotto. 
// Ad ogni click del bottone aumento il numero nell'h1 di 3 e lo aggiorno in pagina. 

let num = document.querySelector('number');
let buttonPlus = document.getElementById('buttonplus');
let buttonDeg = document.getElementById('buttondeg');

let randomNumber = Math.floor(Math.random() * 200);

document.getElementById('number').innerHTML = randomNumber;

buttonPlus.addEventListener('click', function(){
    randomNumber +=  3;
    document.getElementById('number').innerHTML = randomNumber;
});

buttonDeg.addEventListener('click', function(){
    randomNumber -=  3;
    document.getElementById('number').innerHTML = randomNumber;
});


