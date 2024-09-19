/*
Write a function tripletTrue that accepts a string as an argument. The function
should return a boolean indicating whether or not the the string contains three
of the same character consecutively.
*/

// Your code here 
function tripletTrue(str){
    let count = 0
    if (str !== String(str)) return null

    for(let i = 2; i< str.length; i++){
        let curStr = str[i]
        let preStr = str[i-1]
        let lastStr = str[i-2]

        if ( curStr === preStr && curStr === lastStr) return true
    }
    return false
}

// console.log(tripletTrue('caaabb'));        // true
// console.log(tripletTrue('terrrrrible'));   // true
// console.log(tripletTrue('runninggg'));     // true
// console.log(tripletTrue('bootcamp'));      // false
// console.log(tripletTrue('e'));             // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = tripletTrue;
