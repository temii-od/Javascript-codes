// simple calculator
function Calculator(){
    // first create the objects owned by calculator
    this.methods = {
        "+": (a,b) => a + b,
        "-": (a,b) => a - b
    };

    // this is a method. a function that belongs to the calculator. it takes a string and processses it
    this.calculate = function(str){
        let split = str.split(""),
        a = +split[0];
        b = +split[2];
        op = split[1];

    // the if statement to consider safety
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
    }
    
    return this.methods[op](a,b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}