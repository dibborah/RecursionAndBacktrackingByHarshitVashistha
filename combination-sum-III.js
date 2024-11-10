function combinationSum3(k , n, outputArray, tempArray = [], start = 1) {
    if (k === 0 && n === 0) {
        outputArray.push([...tempArray])
        return;
    }
    if (n < 0) return;

    for(let i = start; i <= 9; i++ ) {
        if (i > start && i === i - 1) {
            continue;
        };
        if (i > n) break;
        tempArray.push(i);
        combinationSum3(k - 1, n - i, outputArray, tempArray, i + 1);
        tempArray.pop();
    }
}

const outputArray = [];
const k = 3; const n = 9;
combinationSum3(k, n, outputArray);
console.log(outputArray);