// Example map to objects
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user =>({
    // remember objects are key value pairs
    FullName: `${user.name} ${user.surname}`,
    UserId: user.id
}));

console.log(usersMapped[0].UserId);
console.log(usersMapped[0].FullName);
console.log(usersMapped[1].UserId);
console.log(usersMapped[1].FullName);
console.log(usersMapped[2].UserId);
console.log(usersMapped[2].FullName);

