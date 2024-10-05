// 0 1 1 2 3 5 8 13 ...
// fib(0) : 0
// fib(1) : 1
// fib(2): 1
// fib(3): 3

// When you design an algorithm first try to fit the algorithm for 1,2 and 3 case than try to make it a general one
function fibonacci(n) {
    console.log(n);
    if(n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2) // that much times recursion till the get the indexed sum
}
 
// console.log(fibonacci(5));
fibonacci(5);