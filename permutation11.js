function permutation2(array, outputArray, isUsed = new Array(array.length).fill(false), tempArray = [], startIndex = 0) {
    if (tempArray.length === array.length) {
        outputArray.push([...tempArray]);
        // return;
    }

    for (let i = 0; i < array.length; i++) {
        // if (tempArray.includes(array[i])) { // For some reason this code won't work on duplicate items array
        //    continue;
        // }
        if (isUsed[i] || (i > 0 && (array[i] === array[i - 1]))) continue;
        // if (isUsed[i]) continue;
        tempArray.push(array[i]);
        isUsed[i] = true;
        permutation2(array, outputArray, isUsed, tempArray, startIndex + 1);
        tempArray.pop();
        isUsed[i] = false;
    }
}

const outputArray = [];
const nums = [1,1,2];
permutation2(nums, outputArray);
console.log(outputArray);