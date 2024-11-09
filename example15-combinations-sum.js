function combinationSum(candidates, k, target){
    const outputArray = [];
    function backTrack(candidates, k, target, outputArray, tempArray = [], startIndex = 0) {
        if (k === 0) {
            outputArray.push([...tempArray]);
            return;
        }
        for(let i = startIndex; i < candidates.length; i++) {
            tempArray.push(candidates[i]);
            backTrack(candidates, k - 1, target, outputArray, tempArray, startIndex + 1);
            tempArray.pop();
        }
    }
    backTrack(candidates, k, target, outputArray);
    const newOutputArray = [];

    for (let item of outputArray) {
        const sum = item.reduce((a,c) => {
            return a + c;
        })
        if (sum === target) {
            newOutputArray.push(item);
        };
    }
    return newOutputArray;
}

console.log(combinationSum([1,2,3], 2, 7));