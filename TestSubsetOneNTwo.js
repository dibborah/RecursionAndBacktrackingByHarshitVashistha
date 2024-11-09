function TestSubsetOne(array, outputArray, tempArray = [], startIndex = 0) {
    outputArray.push([...tempArray]);
    for (let i = startIndex; i < array.length; i++) {
        tempArray.push(array[i]);
        TestSubsetOne(array, outputArray, tempArray, i + 1);
        tempArray.pop();
    }
}

const outputArray = [];
TestSubsetOne([1,2,2], outputArray);
console.log(outputArray);

// function TestSubsetTwo(array, outputArray, tempArray = [], startIndex = 0) {
//     outputArray.push([...tempArray]);
//     for (let i = startIndex; i < array.length; i++) {
//         // I have to understand the code
//         if(i > startIndex && array[i] === array[i - 1]){
//             continue;
//         }
//         tempArray.push(array[i]);
//         TestSubsetTwo(array, outputArray, tempArray, i + 1);
//         tempArray.pop();
//     }
// }

// const outputArray = [];
// TestSubsetTwo([1,2,2], outputArray);
// console.log(outputArray);