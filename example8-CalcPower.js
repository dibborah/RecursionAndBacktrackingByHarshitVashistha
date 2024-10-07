// First way: I did it : My own approach
// function calcPower(a, b) {

//     if(b === 0) return 1;
//     if (b === 1) return a;
//     return a * calcPower(a, b - 1 );
// }

// // console.log(calcPower(2, 4));
// console.log(calcPower(2, 0));


// Fixed test case of  my approach
// function calcPower(num, exp) {
//     if(exp === 0) return 1;
//     if(exp === 1) return num;
//     return num * calcPower(num, exp - 1);
// }

// console.log(calcPower(5,4));

// Tut' way
function calcPower(num, exp) {
    if(exp === 0) return 1;
    if(exp === 1) return num;
    const halfPower = calcPower(num , Math.floor(exp / 2));
    if (exp % 2 === 0) {
        return halfPower * halfPower;
    } else {
        return halfPower * halfPower * num;
    }
};

console.log(calcPower(3, 2));
console.log(calcPower(2, 2));
console.log(calcPower(2, 4));
console.log(calcPower(5, 4));
