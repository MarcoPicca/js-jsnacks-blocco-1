// Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.


let containerResult = document.querySelector('container');


let num = prompt('Inserire un numero di 7 cifre');



if (num.length === 7){
    let sommaNum = 0;

    for (let i = 0; i < num.length; i++) {
        sommaNum += parseInt(num[i]);
    }
    console.log("La somma dei numeri che compongono il tuo numero è...", sommaNum);
    // document.getElementById('container').innerHTML = sommaNum; <---------- non funziona.

} else {
    alert('Inserire un numero valido');
}



