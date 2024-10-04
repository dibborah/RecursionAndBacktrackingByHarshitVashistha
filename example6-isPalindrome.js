function isPalindrome(string,left = 0, right = string.length - 1) {
    if (left >= right){
        return true;
    }
    
    if (string[left] !== string[right]) return false;
    return isPalindrome(string, left + 1, right - 1);
}

const string1 = 'naman';
const string2 = 'nitin';
const string3 = 'abba';
const string4 = 'abcd';
const string5 = 'fsdfs';
const result1 = isPalindrome(string1);
const result2 = isPalindrome(string2);
const result3 = isPalindrome(string3);
const result4 = isPalindrome(string4);
const result5 = isPalindrome(string5);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);