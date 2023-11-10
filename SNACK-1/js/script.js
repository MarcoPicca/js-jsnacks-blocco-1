let ageFirstPerson = prompt('inserire età del primo soggetto');
let ageSecondPerson = prompt('inserire età del secondo soggetto');

if (ageFirstPerson > ageSecondPerson) {
    alert(ageFirstPerson);
} if else (ageSecondPerson > ageFirstPerson) {
    alert(ageSecondPerson);
} else {
    alert(ageFirstPerson, ageSecondPerson);
};