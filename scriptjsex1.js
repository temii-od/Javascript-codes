// Simple calculator function
let calculator = {
    read(){
        this.a = +prompt("A?",0);
        this.b = Number(prompt("B?",0));
    },
    sum(){
        return this.a + this.b;
    },
    multiply(){
        return this.a * this.b;
    },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.multiply());