function isPalindrome(string, start, end) {
    while(start < end) {
        if (string[start] !== start[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

// Call pervez Ali in watsapp

function palindromePartitioning(string, outputArray, tempArray = [], start = 0) {
    if (start === string.length){
        outputArray.push([...tempArray]);
    }

    for (let i = start; i < string.length; i++) {
        if (isPalindrome(string, start, i)){
            tempArray.push(string.substring(start, i + 1));
            palindromePartitioning(string, outputArray, tempArray, i + 1);
            tempArray.pop();
        }
    }
};

const outputArray = [];
const str = 'aab';
palindromePartitioning(str, outputArray);
console.log(outputArray);