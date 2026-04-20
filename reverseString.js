
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