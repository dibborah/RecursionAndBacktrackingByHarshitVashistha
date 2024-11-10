function backTrack(array, outputArray, tempArray = []) {
    if (tempArray.length === array.length) {
        outputArray.push([...tempArray]);
        return;
    };
    for(let i = 0; i < array.length; i++) {
        if (tempArray.includes(array[i])) continue;
        tempArray.push(array[i]);
        backTrack(array, outputArray, tempArray);
        tempArray.pop();
    }
}
///

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