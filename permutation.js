function backTrack(array, outputArray, isUsed = new Array(array.length).fill(false), tempArray = []) {
    if (tempArray.length === array.length) {
        outputArray.push([...tempArray]);
        return;
    };

    for(let i = 0; i < array.length; i++) {
        // if (tempArray.includes(array[i])) continue; // time and space complexity O(n) => Linear time complexity. Large inputs less efficient
        if (isUsed[i]) continue; // O (1) => constant time and space complexity => Highly efficient for any inputs
        tempArray.push(array[i]);
        isUsed[i] = true;
        backTrack(array, outputArray, isUsed, tempArray);
        tempArray.pop();
        isUsed[i] = false; // The element which is popped since it is not unused that corresponding index should be made available hence to be made false again for the next cycle
    }
}

// const isUsed = [false, false, false];// This falsy array is the make the time complexity from O(n) to O(1)

const permute = function(nums) {
    const outputArray = [];
    backTrack(nums, outputArray);
    return outputArray;
}

// number of permutation if elements are distinct 
// n unique numbers than n!

const nums = [1, 2, 3];
const result = permute(nums)
console.log(result);
