function subsetApproachTwo(array, outputArray, tempArray = [], startIndex = 0) {
    outputArray.push([...tempArray]);

    for(let i = startIndex; i < array.length; i++) {
        tempArray.push(array[i]);
        subsetApproachTwo(array, outputArray, tempArray, i + 1);
        tempArray.pop();
    }
}

const outputArray = [];
const arr = [1,2,3];
subsetApproachTwo(arr, outputArray);
console.log(outputArray);