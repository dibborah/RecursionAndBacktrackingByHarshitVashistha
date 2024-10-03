// 1st way

// let i = 1;
// function oneToN(n) {
//     if(i > n){
//         return;
//     }
//     // console.log((n + i) - n);
//     console.log(i);
//     i++;
//     return oneToN(n);
// }

// oneToN(5);

// 2nd way
// function oneToN(n, i) {
//     if (i > n) {
//         return;
//     }
//     console.log(i);
//     oneToN(n, i + 1);// in parameter ++ increment operator doesnot works
// }

// oneToN(5, 1);

// 3rd way
// function oneToN(n, i = 1) {
//     if (i > n) {
//         return;
//     }
//     console.log(i);
//     oneToN(n, i + 1);// in parameter ++ increment operator doesnot works
// }

// oneToN(5);

// Most important and complex way
function oneToN(n){
    if(n === 0){
        return;
    }
    oneToN(n-1);
    console.log(n);
}

oneToN(5);