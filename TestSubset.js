function testSubset(testArray, outputArray, temp = [], startIndex = 0){
    if(startIndex === testArray.length){
        outputArray.push([...temp]);
        return;
    }

    temp.push(testArray[startIndex]);
    testSubset(testArray, outputArray, temp, startIndex + 1);

    temp.pop();
    testSubset(testArray,outputArray, temp, startIndex + 1);
};

const outputArray = [];
testSubset([1,2,3], outputArray);
console.log('outputArray', outputArray);