function permute2 (array, outputArray, isUsed, tempArray = []) {
    if (tempArray.length === array.length) {
        outputArray.push([...tempArray]);
        return;
    }
    
    for (let i = 0; i < array.length; i++) {
        if (isUsed[i] || (i > 0 && array[i] === array[i - 1] && !isUsed[i - 1])) continue;
        tempArray.push(array[i]);
        isUsed[i] = true;
        permute2(array, outputArray, isUsed, tempArray);
        tempArray.pop();
        isUsed[i] = false;
    }
}

const array = [1, 1, 2, 2];
array.sort((a, b) => a - b);

const outputArray = [];

const isUsed = new Array(3).fill(false);

permute2(array, outputArray, isUsed);
console.log(outputArray);
