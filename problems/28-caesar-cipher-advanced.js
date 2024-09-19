/*
Write a method caesarCipher(string, num) that takes in a string and a number.
The function should return a new string where every character of the original is
shifted num characters in the alphabet.

Feel free to use this variable: let alphabet = "abcdefghijklmnopqrstuvwxyz";
*/

function caesarCipher(string, num) {
    // Your code here
    let alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    let newStr = ''

    for(let i = 0; i < string.length; i++){
        let strLetter = string[i]

        for(let j = 0; j < alphabet.length; j++){
            if (alphabet[j] === strLetter){
                console.log(`Current Letter: ${strLetter}, Current Alphabet: ${alphabet[j]} -changing to-> ${alphabet[j+num]}`)
                newStr += alphabet[j+num]
                j= alphabet.length
            }
        }
        
    }
    return newStr
        
}

//console.log(caesarCipher("apple", 1)); // "bqqmf"
// console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = caesarCipher;
