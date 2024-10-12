// Tut way

// Lecture 11

// Need to understand the code
function findSubset2 (array, outputArray) {

    function backTrack (testArray, resultArray, tempArray = [], startIdx = 0) {
        resultArray.push([...tempArray]);
        for(let i = startIdx; i < testArray.length; i++) {
            tempArray.push(testArray[i])
            backTrack(testArray, resultArray, tempArray, i + 1);
            tempArray.pop();
        }    
    }

    backTrack(array, outputArray);
    return outputArray;
}

const outputArray = [];
findSubset2([1,2], outputArray);
console.log(outputArray);



