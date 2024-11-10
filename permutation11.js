function backTrack(array, outputArray, isUsed = new Array(array.length).fill(false), tempArray = []) {
    if (tempArray.length === array.length) {
        outputArray.push([...tempArray]);
        // return;
    }

    for (let i = 0; i < array.length; i++) {
        // if (tempArray.includes(array[i])) { // For some reason this code won't work on duplicate items array
        //    continue;
        // }
        if (isUsed[i] || (i > 0 && (array[i] === array[i - 1]) && !isUsed[i - 1])) continue;
        // if (isUsed[i]) continue;
        tempArray.push(array[i]);
        isUsed[i] = true;
        backTrack(array, outputArray, isUsed, tempArray);
        tempArray.pop();
        isUsed[i] = false;
    }
}


function permute2(nums) {
    const outputArray = [];
    nums.sort((a, b) => a - b);
    backTrack(nums, outputArray);
    return outputArray;
}

const nums = [1,1,2];
console.log(permute2(nums));