// 4! = 4 * 3 * 2 * 1

// 1st way

// fact = 1;
// function factorial(n) {
//     fact = fact * n;
//     if (n === 1 ) {
//         console.log(fact);
//         return;
//     };
//     factorial(n - 1);
// }

// factorial(4);


function factorial(n) {
    if( n === 1) return 1;
    return n * (factorial(n - 1));
};

const result = factorial(4);
console.log(result);