function findSubset1(array, outputArray, tempArray = [], index = 0) {
    if (index >= array.length){
        outputArray.push([...tempArray]);
        return;        
    }

    // 2 conditions

    // 1st include
    tempArray.push(array[index]);
    findSubset1(array, outputArray, tempArray, index + 1);
    tempArray.pop();

    // 2nd not includes
    findSubset1(array, outputArray, tempArray, index + 1);
};

const outputArray = []
findSubset1([1,2], outputArray);
console.log(outputArray);
