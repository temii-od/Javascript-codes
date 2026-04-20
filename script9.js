// sum input numbers
// going to use a loop
 function sumInput(){
    let nos = [];

    while(true) {
        let value = prompt("Enter a number:",0);
    }
    if (value === "" || value === null || !isFinite(value)) break;

    no.push(+value); // this takes the number and adds it to the end of the arrray because without push each user will ooverwrite the old one
}

let sum = 0;
for (let no of nos ) {
    sum += no;
}
    return sum;
 
alert(sumInput());
