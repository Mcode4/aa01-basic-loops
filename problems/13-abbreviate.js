/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function abbreviate(word){
    let vowels = 'aeiouAEIOU'
    let newWord = ''

    for(let i = 0; i < word.length; i++){
        let curWord = word[i]

        let Vowel = false
        for(let j = 0; j < vowels.length; j++){
            let curV = vowels[j]
             if (curV === curWord){
                Vowel = true
             } else if (!Vowel && j === vowels.length-1){
                newWord += curWord
             }
        }
    }
    return newWord
}

console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
