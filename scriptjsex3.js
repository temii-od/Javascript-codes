function Calculator(){
    this.read = function(){
        this.a = Number(prompt("Enter a first number:", 0));
        this.b = Number(prompt("Enter a second number: "));
    };
    this.sum = function(){
        return this.a + this.b;

    };
    this.mul = function(){
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();
console.log(calculator.sum());
console.log("Multiplication = " + " " + calculator.mul());