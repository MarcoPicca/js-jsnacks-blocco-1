let words = document.getElementById('container');

let firstWord = prompt('write first word');
let secondWord = prompt('write second word');

if (firstWord.length < secondWord.length){
    console.log(secondWord, firstWord);
} else if (firstWord > secondWord){
    console.log(firstWord, secondWord);
} else {
    console.log('pari');
}