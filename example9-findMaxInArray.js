// My solution to the problem

// function findMaxInArray(array, i = array.length - 1, max = array[i]) {
    // if (array.length === 0) return null;
//     if(i < 0) return max;
//     if (max < array[i - 1]) {
//         max = array[i - 1];        
//     } else {
//         max = max;
//     }
//     return findMaxInArray(array, i - 1, max);       
// }

// console.log(findMaxInArray([1, 6, 9, 7]));

// Tut's solution to the problem

// Achieve the results by breaking the array into pieces:
function bigNum(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

// using slice
// function findMaxInArray (array) {
//     if (array.length === 0) return null;
//     if (array.length === 1) return array[0];

//     return bigNum(array[0], findMaxInArray(array.slice(1)));
// }

// console.log(findMaxInArray([1000,4,785,8,6000]));

// [1, 14]

// solution without using slice and using indexing
function findMaxInArray (array, startIdx = 0) {
    if (array.length === 0) return null;
    if (startIdx === array.length - 1) return array[startIdx];

    return bigNum(array[startIdx], findMaxInArray(array, startIdx + 1));
}

console.log(findMaxInArray([111, 18, 4544, 45, 90, 1000]));