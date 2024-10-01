// Recursion is when a fc keeps calling itself until a base condition is met.
// function keep calling itself to solve problem

function printNto1(n){
    console.log(n);
    return (n > 1) && printNto1(n-1);
}

printNto1(5);