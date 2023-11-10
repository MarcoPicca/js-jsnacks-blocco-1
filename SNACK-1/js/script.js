let ageFirstPerson = prompt('inserire età del primo soggetto');
let ageSecondPerson = prompt('inserire età del secondo soggetto');

if (ageFirstPerson > ageSecondPerson) {
    console.log('la prima età è più grande');
} else if (ageSecondPerson > ageFirstPerson) {
    console.log('la seconda età è più grande');
} else {
    console.log('hanno la stessa età');
};