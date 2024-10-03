function printArray(array, index = 0) {
    if (index === array.length) return; // base case
    console.log(array[index]);
    printArray(array, index + 1);
}

// function n times called 
// 1 * O(n)

// note: in recursion internally stack is used
// temporary space => auxillary space => O(n)

printArray([2, 3, 1, 5, 4]);
