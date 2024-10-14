function findSubset2(array) {
    function backTrack(array, outputArray, tempArray = [], startIdx = 0) {
        if(startIdx === array.length) {
            // base condition
            outputArray.push([...tempArray]);
            return;
        }
        tempArray.push(array[startIdx]);
        backTrack(array, outputArray, tempArray, startIdx + 1);
        tempArray.pop();

        // condition
        while(startIdx + 1 < array.length && array[startIdx] === array[startIdx + 1]) {
            startIdx++;
        }
        backTrack(array, outputArray, tempArray, startIdx + 1);
    }

    const outputArray = [];
    // sorting array in JS
    array.sort((a, b) => a - b);
    backTrack(array, outputArray);
    return outputArray
}



const result = findSubset2([2,2,1]);
console.log(result);
