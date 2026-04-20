 let a = +prompt("Enter a first no:" ,0);
let b = +prompt("Enter a 2nd number:",0);

console.log(a + b);

function readNumber(){
    let num;
    do {
        num += prompt("Enter a no:",0);
    } while (!isFinite(num));

    if(num === null || num === "")
        return null;

    return +num;
}
    