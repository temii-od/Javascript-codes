// using set
let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
set.add(pete);

console.log(set.size);

for(let user of set){
    console.log(user.name);
}

// filter unique array members
function unique(arr) {
    return Array.from(new Set(arr));
}
