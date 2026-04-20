// LEARNING getters and setters
// USING ONLY GETTERS TO READ VALUES
/* let user = {
    name: "Temi",
    surname: "Omodunbi",

// using the get
get Fullname(){
    return `${this.name} ${this.surname}`;
}
};
console.log(user.Fullname);
*/
// USING SETTERS AND GETTERS

let user = {
    name: "Temi",
    surname: "Omodunbi",
 
    get Fullname(){
        return `${this.name} ${this.surname}`
    },

    set Fullname(value){
        [this.name] [this.surname] = value.split(" ");
    }
};

user.Fullname = "Temi Omodunbi";
console.log(user.name);
console.log(user.surname);
console.log(user.Fullname);



function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
Objects.defineProperty(this, "age", 
    get () 
)
}
let animal = {
    eats: tru
}


