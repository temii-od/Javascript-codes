
function Accumulator(startingValue){
    this.value = startingValue;
    // creating the read method
    this.read = function(){
        this.value += Number(prompt("Enter a number to add: ", 0));
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
