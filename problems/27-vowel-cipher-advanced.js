/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function vowelCipher(str){
    let vowels = 'aeiouaAEIOUA'
    let newStr = ''

    for(let i = 0; i < str.length; i++){
        let curStr = str[i]
        
        if (vowels.includes(curStr)){
            console.log(`Target: ${curStr} at Index: ${i}`)

            for(let j = 0; j < vowels.length; j++){
                let curV = vowels[j]
                let nextV = vowels[j+1]

                if(curV === curStr){
                    console.log(`${curV} changing to ${nextV}`)
                    newStr += nextV
                    j = vowels.length
                }
            }
        }
        else {
            newStr += curStr
        }
        
    }
    return newStr
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
// console.log(vowelCipher("paper cup")); // "pepir cap"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;
