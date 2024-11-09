function TestSubsetOne(array, outputArray, tempArray = [], startIndex = 0) {
    outputArray.push([...tempArray]);
    for (let i = startIndex; i < array.length; i++) {
        tempArray.push(array[i]);
        TestSubsetOne(array, outputArray, tempArray, i + 1);
        tempArray.pop();
    }
}

const outputArray = [];
TestSubsetOne([1,2,3], outputArray);
console.log(outputArray);