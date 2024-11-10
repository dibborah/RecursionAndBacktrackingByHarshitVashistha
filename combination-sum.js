
function combinationSum(array, target) {
    function backTrack(array, target,outputArray, tempArray = [], startIndex = 0) {
        if (target < 0) return;
        if (target === 0) {
            outputArray.push([...tempArray]);
            return;
        }
        for(let i = startIndex; i < array.length; i++) {
            tempArray.push(array[i]);
            backTrack(array, target - array[i],outputArray, tempArray, i)
            tempArray.pop();
        }
    }
    const outputArray = [];
    backTrack(array, target, outputArray);
    return outputArray;
}

const candidates = [2, 3, 6, 7];
const target = 7;
const result = combinationSum(candidates, target)
console.log('result', result);