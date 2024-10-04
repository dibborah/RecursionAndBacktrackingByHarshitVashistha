function reverseArray(array, left = 0, right = array.length - 1) {
    if (left >= right) return console.log(array);

    // swap logic
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    reverseArray(array, left + 1, right - 1);
}

const array1 = [4, 3, 2, 1];
const array2 = [1, 2, 3, 4, 5];
// reverseArray(array1);
// reverseArray(array2);
// console.log(array1);
// console.log(array2);

reverseArray(array2);