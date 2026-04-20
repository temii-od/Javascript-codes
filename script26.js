// get the property of an Object
/* let user = {
    name: "Temi"
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(JSON.stringify(descriptor, null, 2) );
*/

// AN EXAMPLE TO make an object property non writable
/* let user = {
    name: "Temi"
};

Object.defineProperty(user, "name",{
    writable: false
});

user.name = "Lola";
console.log(user.name); 
*/

// AN EXAMPLE TO SHOW NON CONFIGURABLE
let user = {
    name: "Temi"
};

Object.defineProperty(user, "name", {
    configurable: false,
    writable: false
});

user.name = "Pete";
delete user.name;
console.log(user.name);
