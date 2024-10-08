function findMaxInArray(array, i = array.length - 1, max = array[i]) {
    if(i < 0) return max;
    if (max < array[i - 1]) {
        max = array[i - 1];        
    } else {
        max = max;
    }
    return findMaxInArray(array, i - 1, max);       
}

console.log(findMaxInArray([101,2,6,55,3,5003]));