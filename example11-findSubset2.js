// Tut way

// Lecture 11

// Need to understand the code
function findSubset2 (array, outputArray, tempArray = [], startIdx = 0) {
    outputArray.push([...tempArray]);
    for(let i = startIdx; i < array.length; i++) {
        tempArray.push(array[i])
        findSubset2(array, outputArray, tempArray, i + 1);
        tempArray.pop();
    }    
}

const outputArray = [];
const tempArray = [];
findSubset2([1,2], outputArray, tempArray);



