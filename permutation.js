function permutation(array, outputArray, tempArray = [], startIndex = 0) {
    if (tempArray.length === array.length) {
        outputArray.push([...tempArray]);
        return;
    };
    for(let i = startIndex; i < array.length; i++) {
        if (tempArray.includes(array[i])) {
          continue;
        }
        tempArray.push(array[i]);
        permutation(array, outputArray, tempArray, startIndex);
        tempArray.pop();
    }
}

const outputArray = [];
permutation([1], outputArray);
console.log(outputArray);