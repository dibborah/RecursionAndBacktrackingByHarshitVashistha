function backTrack(k , n, outputArray, tempArray = [], start = 1) {
    if (k === 0 && n === 0) {
        outputArray.push([...tempArray])
        return;
    }
    if (n < 0) return;

    for(let i = start; i <= 9; i++ ) {
        // The below commented line won't be needed as the candidates are in sequence fr. 1 - 9 and duplicates won't be there
        // if (i > start && i === i - 1) {
        //     continue;
        // };
        // if (i > n) break;
        tempArray.push(i);
        backTrack(k - 1, n - i, outputArray, tempArray, i + 1);
        tempArray.pop();
    }
}

const k = 3; const n = 9;

function combinationSum3(k, n) {
    const outputArray = [];
    backTrack(k, n, outputArray);
    return outputArray;
}

const result = combinationSum3(k, n);
console.log(result);