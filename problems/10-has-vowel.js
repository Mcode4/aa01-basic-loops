/*
Define a function hasVowel that takes in a string parameter. The function should
return a boolean, true if the string contains at least one vowel, false
otherwise.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function hasVowel(str){
    let vowels = 'aeiouAEIOU'

    for(let i = 0; i < str.length; i++){
        let curStr = str[i]
        for(let j = 0; j < vowels.length; j++){
            let curV = vowels[j]
            if(curV === curStr){
                return true
            }
        }
    }
    return false
}
// console.log(hasVowel('dog'));          // => true
// console.log(hasVowel('conventional')); // => true
// console.log(hasVowel('rhythm'));       // => false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasVowel;
