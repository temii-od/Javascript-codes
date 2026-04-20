// sort in decreasing order
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr);


// sort in ascending order
let arr2 = [2, 4, 6, 12, 20, 10];
arr2.sort((a, b) => a-b)
console.log(arr2);


// copy and sort array
 function copySorted(arr3){
    return arr3.slice().sort();
}
let arr3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr3);

console.log(arr3);
console.log(sorted);
