const array = [];

for (let i = 1; i < 101; i++){
    
    if (i % 7 === 0){
        array.push(i);
    } else if (i % 8 === 0){
        array.push(i);
    }

}

console.log(array);