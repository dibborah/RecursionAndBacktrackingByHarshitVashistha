function findSubset2 (array, outputArray) {

    function backTrack (testArray, resultArray, tempArray = [], startIdx = 0) {
        resultArray.push([...tempArray]);
        //  Need to understand this condition
        for(let i = startIdx; i < testArray.length; i++) {
            if(i > startIdx && array[i] === array[i - 1]) {
                continue;
            }
            tempArray.push(testArray[i])
            backTrack(testArray, resultArray, tempArray, i + 1);
            tempArray.pop();
        }    
    }

    // sorting array
    array.sort((a, b) => a - b);
    backTrack(array, outputArray);
    return outputArray;
}

const outputArray = [];
findSubset2([2, 2, 1], outputArray);
console.log(outputArray);
