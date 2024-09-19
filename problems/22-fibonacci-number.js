/*
Write a function fib that accepts a number n as an argument. The function should
return the "n-th" number of the Fibonacci sequence. The first two numbers of the
Fibonacci sequence are 1; to generate subsequent numbers of the Fibonacci
sequence, we take the sum of the previous two numbers of the sequence.
*/

// Your code here 
function fib(n){
    let num = 1
    let sum = 0

    for(let i = 0; i < n; i++){
        // 1(1), 0+1(2), 1+1(3), 1+2(4), 2+3, 
        nextNum = num+num

        if (i <= 1){
            sum = 1
        } else{
            let previousSum = sum
            sum += num
            num = previousSum
        }
    }
    return sum
}


// console.log(fib(1));    // 1
// console.log(fib(2));    // 1
// console.log(fib(3));    // 2
// console.log(fib(4));    // 3
// console.log(fib(5));    // 5
// console.log(fib(6));    // 8
// console.log(fib(10));   // 55
// console.log(fib(11));   // 89
// console.log(fib(12));   // 144

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fib;
