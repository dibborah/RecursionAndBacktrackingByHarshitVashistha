// Recursion is when a fc keeps calling itself until a base condition is met.
// function keep calling itself to solve problem

// function printNto1(n){
//     console.log(n);
//     return (n > 1) && printNto1(n-1);
// }


// Note: If no base case of return statement is written in a recursive fc than stack overflow or infinite loop will be encountered
function printNto1(n){
    if(n === 0){
        return;
    }
    console.log(n);
    printNto1(n-1);
}

printNto1(5);