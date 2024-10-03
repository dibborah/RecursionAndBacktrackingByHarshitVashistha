function printArray(array, index = 0) {
    if (index >= array.length) return;
    console.log(array[index]);
    printArray(array, index + 1);
}

printArray([2, 3, 1, 5, 4]);
