function backTrack(array, outputArray, tempArray = [], startIndex = 0) {
    if (tempArray.length === array.length) {
        outputArray.push([...tempArray]);
        return;
    };
    for(let i = startIndex; i < array.length; i++) {
        if (tempArray.includes(array[i])) {
          continue;
        }
        tempArray.push(array[i]);
        backTrack(array, outputArray, tempArray, startIndex);
        tempArray.pop();
    }
}

const permute = function(nums) {
    const outputArray = [];
    backTrack(nums, outputArray);
    return outputArray;
}

const nums = [1, 2, 3];
const result = permute(nums)
console.log(result);