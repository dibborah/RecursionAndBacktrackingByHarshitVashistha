function combinations(n, k, outputArray, tempArray = [], start = 1) {
    if(k === 0) {
        outputArray.push([...tempArray]);
        return;
    }
    for (let i = start; i <= n; i++) {
        tempArray.push(i);
        combinations(n, k - 1, outputArray, tempArray, i + 1);
        tempArray.pop();
    }
} 

const outputArray = [];
combinations(4, 2, outputArray);

console.log('outputArray', outputArray);