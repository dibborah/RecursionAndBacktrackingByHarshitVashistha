function subsetIIApproachII(array, outputArray, tempArray = [], startIndex = 0) {
    outputArray.push([...tempArray]);

    for(let i = startIndex; i < array.length; i++) {
        if(i > startIndex && array[i] === array[i - 1]) {
            continue;
        }
        tempArray.push(array[i]);
        subsetIIApproachII(array, outputArray, tempArray, i + 1);
        tempArray.pop();
    }
};

const outputArray = []
const arr = [2,1,2];
arr.sort((a, b) => a - b);
subsetIIApproachII(arr, outputArray);
console.log(outputArray);