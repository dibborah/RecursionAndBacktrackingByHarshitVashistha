// function findSubset(array, outputArray, tempArray = [], index = 0) {
//     if (index >= array.length) {
//         outputArray.push([...tempArray]);
//         return;
//     }

//     tempArray.push(array[index]);
//     findSubset(array, outputArray, tempArray, index + 1);

//     tempArray.pop();
//     findSubset(array, outputArray, tempArray, index + 1);
// };
// const outputArray = []
// findSubset([1,2], outputArray);
// console.log(outputArray);

// const subset = function (nums) {
//     function backTrack(nums, outputArray, tempArray = [], index = 0) {
//         if (index >= nums.length) {
//             outputArray.push([...tempArray]);
//             return;
//         }

//         tempArray.push(nums[index]);
//         backTrack(nums, outputArray, tempArray, index + 1);

//         tempArray.pop();
//         backTrack(nums, outputArray, tempArray, index + 1);
//     };

//     const outputArray = []
//     backTrack(nums, outputArray);
//     return outputArray;
// }

// const result = subset(["a","b"]);
// console.log(result);

function findSubset1(array, outputArray, tempArray = [], index = 0) {
    if (index === array.length) {
        outputArray.push([...tempArray]);
        return;
    }

    tempArray.push(array[index]);
    findSubset1(array, outputArray, tempArray, index + 1);
    tempArray.pop();

    findSubset1(array, outputArray, tempArray, index + 1);    
}

const outputArray = [];
findSubset1([1, 2], outputArray);

console.log(outputArray);

 