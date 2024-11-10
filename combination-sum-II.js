function backTrack(array, target, outputArray, tempArray = [], startIndex = 0) {
    if (target < 0 ) return;
    if (target === 0) {
        outputArray.push([...tempArray]);
        return;
    }

    for (let i = startIndex; i < array.length; i++) {
        if (i > startIndex && array[i] === array[i - 1]) continue;
        tempArray.push(array[i]);
        backTrack(array, target - array[i], outputArray, tempArray, i + 1);
        tempArray.pop();
    }
}

const candidates = [10, 1, 2, 7, 6, 1, 5];
const target = 8;

function combinationSumTwo(candidates, target) {
    const outputArray = []
    candidates.sort((a, b) => a - b);
    backTrack(candidates, target, outputArray);
    return outputArray;
}

const result = combinationSumTwo(candidates, target);
console.log(result);