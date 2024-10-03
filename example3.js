// 4! = 4 * 3 * 2 * 1

fact = 1;
function factorial(n) {
    fact = fact * n;
    if (n === 1) {
        console.log(fact);
        return;
    };
    factorial(n - 1);
}

factorial(4);
