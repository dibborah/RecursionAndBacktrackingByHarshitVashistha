function findSubset2(array) {
    function backTrack(array, outputArray, tempArray = [], startIdx = 0) {
        if(startIdx === array.length) {
            // base condition
            outputArray.push([...tempArray]);
            return;
        }
        tempArray.push(array[startIdx]);
        backTrack(array, outputArray, tempArray, startIdx + 1);
        tempArray.pop();

        // condition
        // while(startIdx + 1 < array.length && array[startIdx] === array[startIdx + 1]) {
        //     startIdx++;
        // }
        backTrack(array, outputArray, tempArray, startIdx + 1);
    }

    const outputArray = [];
    // sorting array in JS
    array.sort((a, b) => a - b);
    backTrack(array, outputArray);
    return outputArray
}

const ans = findSubset2([1,2,3]);
console.log(ans);



























// Given an integer array nums that may contain duplicates, return all possible 
// subsets
// (the power set)

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: nums = [1,2,2]
// Check this algorithm in pen and paper
// function findSubset2(nums) {
//     function backTrack(array, outputArray, tempArray = [], startIndex = 0) {
//         if(startIndex === array.length){
//            outputArray.push([...tempArray]);
//            return;
//         }
//         tempArray.push(array[startIndex]);
//         backTrack(array, outputArray, tempArray, startIndex + 1);
//         tempArray.pop();

//         while(startIndex + 1 < array.length && array[startIndex] === array[startIndex + 1]) {
//             startIndex ++;
//         }
//         backTrack(array, outputArray, tempArray, startIndex + 1);
//     }
//     const outputArray = [];
//     nums.sort((a, b) => a - b);
//     backTrack(nums, outputArray);
//     return outputArray;
// }

// const result = findSubset2([1,2,2]);
// console.log('result', result);
