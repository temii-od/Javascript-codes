function aclean(arr) {
    let obj = {};

    for(let i = 0; i < arr.length; i++) {
        // sorted variable
        let sorted = arr[i].toLowerCase().split("").sort().join("");
    }
    return Object.values(arr);
}
let arr = ["nap","teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));
