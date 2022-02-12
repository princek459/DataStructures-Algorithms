/*
Recursion example:

3 rules:
1. Identify the base case
2. Identify the recursive case
3. Function get close and close to base case and return
*/

let counter = 0;
function inception() {
    console.log(counter);
    // Base case
    if(counter > 3) {
        // returns
        return 'done!';
    }
    // Recursive case
    counter++;
    // returns
    return inception();
}

inception();



// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) { // O(n)
    //code here
    // base case
    if(number === 2){
        return 2;
    }
    return number * findFactorialRecursive(number-1);
}

findFactorialRecursive(6);


function findFactorialIterative(number) { // O(n)
    //code here
    // base case
    let answer = 1;
    if (number === 2) {
        answer = 2;
    }
    // recursive case
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    // return case
    return answer;
}

findFactorialIterative(5);




// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){ // O(n)
    //code here;
    // Base case 
    let arr = [0,1];
    for(let i = 2; i < n + 1; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[n];
  }
  fibonacciIterative(8);
  
  function fibonacciRecursive(n) { // O(2^n)
    //code here;
    // base case
    if(n < 2) {
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
  }
  
  fibonacciRecursive(3);