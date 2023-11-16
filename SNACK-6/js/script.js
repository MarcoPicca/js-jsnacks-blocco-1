let invitati = [
    'aldo',
    'carlo',
    'gialdo',
    'baldo',
];

let userName = prompt('inserisci nome');

let puoEntrare = false;

for (let i=0; i < invitati.length; i++) {
    if (userName === invitati[i]){
        puoEntrare = true;
    }
}

if (puoEntrare){
    console.log('Può Entrare');
} else {
    console.log('Non può entrare');
}