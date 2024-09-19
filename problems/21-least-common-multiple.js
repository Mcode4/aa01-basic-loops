/*
Write a function leastCommonMultiple(num1, num2) that accepts two numbers as
arguments. The functions should return the smallest number that is divisible by
both num1 and num2.
*/

// Your code here 
function leastCommonMultiple(num1, num2){
    let LCM = 1
    for(let i = 1; i <= 999; i++){
        console.log(`I: ${i} and LCM: ${LCM}`)
        if(i % num1 === 0 && i % num2 === 0) return LCM
        LCM++
    }
}


console.log(leastCommonMultiple(4, 6)); // 12
// console.log(leastCommonMultiple(3, 5)); // 15
// console.log(leastCommonMultiple(2, 10)); // 10

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = leastCommonMultiple;
