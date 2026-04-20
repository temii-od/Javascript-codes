// Function that takes string as input and returns the string reversed
/* function ReverseString(str){
    return str.split("").reverse().join("");
}

let userInput = prompt("Enter a word: ");
let word = ReverseString(userInput);

console.log(word);
console.log("The reversed string is " + word);
*/ 

// A function that returns total number of vowels in the string
 function countVowel(str){
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let character of str) {
        if(vowels.includes(character)){
            count ++;
        }
    }
    return count;
}

let userInput = prompt("Enter a word: ");
console.log("Number of vowel: " + countVowel(userInput));